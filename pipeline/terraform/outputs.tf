output "my_hosted_zone_name" {
  value = var.hosted_zone_name
}

output "domain_name" {
  value = module.cx_client.domain_name
}
output "bucket_name" {
  value = module.cx_client.bucket_name
}
