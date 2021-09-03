#-------------------------------------------
# Required variables (`env_configs/*.tfvars`)
#-------------------------------------------
variable hosted_zone_name {}
variable domain_suffix {}
variable env_tag {}


module "cx_client" {
  source = "./modules/cx-client"

  app_namespace    = var.app_namespace
  region           = var.region
  hosted_zone_name = var.hosted_zone_name
  domain_suffix    = var.domain_suffix
  env_tag          = var.env_tag
}
