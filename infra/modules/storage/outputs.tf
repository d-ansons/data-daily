output "storage_account_name" {
  description = "Name of the Azure storage account"
  value = azurerm_storage_account.this.name
}

output "storage_account_id" {
  description = "Identifier for the Azure storage account"
  value = azurerm_storage_account.this.id
}

output "primary_blob_endpoint" {
  description = "Base URL of the storage account"
  value = azurerm_storage_account.this.primary_blob_endpoint
}