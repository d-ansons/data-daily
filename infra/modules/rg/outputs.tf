output "name" {
  description = "Name of the Azure resource group"
  value = azurerm_resource_group.this.name
}

output "location" {
  description = "Region of the Azure resource group"
  value = azurerm_resource_group.this.location
}

output "id" {
  description = "Identifier for the Azure resource group"
  value = azurerm_resource_group.this.id
}