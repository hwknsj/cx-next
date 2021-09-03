#!/bin/bash
###########################
## Use for local deploys ##
###########################
set -e

CLIENT_NAMESPACE="next"

# Environments
case "$1" in
  dev)
    WORKSPACE="dev"
    ;;
  preprod)
    WORKSPACE="preprod"
    ;;
  prod)
    WORKSPACE="prod"
    ;;
  *)
    echo $"Usage: $0 {dev|preprod|prod}"
    exit 1
esac
echo "Will deploy site for ${WORKSPACE} environment"


# Build the static files
if [ $CI ]
then
  # Build the static files IF we aren't in Github Actions
  # (Github Actions pre-builds files)
  echo "Skipping build step; using pre-built files"
else
  echo "Building files..."
  yarn
  yarn run build
fi

# S3 bucket name
CLIENT_BUCKET_NAME="${CLIENT_NAMESPACE}-${WORKSPACE}-client"

# Push client code to s3
aws s3 rm s3://$CLIENT_BUCKET_NAME/  --recursive
aws s3 sync build/ s3://$CLIENT_BUCKET_NAME/ --exclude \"*.DS_Store*\"
aws s3 cp build/index.html s3://$CLIENT_BUCKET_NAME/ --cache-control max-age=0
