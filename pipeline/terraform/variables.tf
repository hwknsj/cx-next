terraform {
  backend "s3" {
    key    = "next" # TODO: update for each application
    region = "us-west-2"
  }
  required_version = ">= 0.13.5"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~>3.4"
    }
  }
}

variable "app_namespace" {
  default = "next" # TODO: update for each application
}

variable "region" {
  default = "us-west-2"
}
