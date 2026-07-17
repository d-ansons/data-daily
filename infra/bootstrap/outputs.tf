output "resource_group_name" {
  description = "Name of the Azure resource group"
  value       = module.rg.name
}

output "storage_account_name" {
  description = "Name of the Azure storage account"
  value       = module.storage.storage_account_name
}

output "container_name" {
  description = "Name of the bootstrap container"
  value       = "tfstate"
}