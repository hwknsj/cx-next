#!/bin/bash
############################
## Use for local planning ##
############################
set -e

# Environments
case "$1" in
  dev)
    WORKSPACE="dev"
    VAR_FILE=${2:-"./env_configs/dev.tfvars"}
    ;;
  preprod)
    WORKSPACE="preprod"
    VAR_FILE=${2:-"./env_configs/preprod.tfvars"}
    ;;
  prod)
    WORKSPACE="prod"
    VAR_FILE=${2:-"./env_configs/prod.tfvars"}
    ;;
  *)
    echo $"Usage: $0 {dev|preprod|prod}"
    exit 1
esac
echo "Running tf-plan on ${WORKSPACE}"



# Terraform state, bucket name
AWS_ACCOUNT_ID=$(aws sts get-caller-identity | jq -r '.Account')
terraform_state_bucket="terraform-remote-config-$AWS_ACCOUNT_ID"
echo "Using Terraform state bucket: $terraform_state_bucket"

# TF version
tf_ver="v1.1.0-alpha20210908"; if [[ ! $(Terraform --version) =~ "Terraform $tf_ver" ]]; then echo "Terraform $tf_ver is required"; exit 1; fi

pushd pipeline/terraform

# Cleanup .terraform
rm -rf .terraform/

# Plan terraform
terraform init -backend-config bucket="${terraform_state_bucket}"

# If the workspace does not exist, create it.
if ! terraform workspace select ${WORKSPACE}; then
  terraform workspace new ${WORKSPACE}
fi
terraform plan -var-file=$VAR_FILE
popd

