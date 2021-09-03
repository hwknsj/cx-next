#-------------------------------------------
# Required variables (do not add defaults here!)
#-------------------------------------------
variable "app_namespace" {}
# variable domain_name {}
variable "hosted_zone_name" {}
variable "domain_suffix" {}
variable "env_tag" {}


#-------------------------------------------
# Configurable variables
#-------------------------------------------
variable "region" {
  default     = "us-west-2"
  description = "Default region for bucket"
}


#-------------------------------------------
# Interpolated Values
#-------------------------------------------
locals {
  bucket_name = "${replace(var.app_namespace, "_", "-")}-${terraform.workspace}-client"
  domain_name = "${var.app_namespace}${var.domain_suffix}.${var.hosted_zone_name}"
}
