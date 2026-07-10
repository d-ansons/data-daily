output "storage_account_name" {
  description = "value"
  value = azurerm_storage_account.this.name
}

output "storage_account_id" {
  description = "value"
  value = azurerm_storage_account.this.id
}

output "primary_blob_endpoint" {
  description = "value"
  value = azurerm_storage_account.this.primary_blob_endpoint
}