resource "azurerm_storage_account" "this" {
  name                            = var.name
  resource_group_name             = var.resource_group_name
  location                        = var.location
  account_tier                    = var.account_tier
  account_replication_type        = var.account_replication_type
  allow_nested_items_to_be_public = false
  blob_properties {
    versioning_enabled = true
  }
  tags = var.tags
  lifecycle {
    prevent_destroy = true
  }
}

resource "azurerm_storage_container" "this" {
  container_access_type = "private"
  for_each              = toset(var.container_names)
  name                  = each.value
  storage_account_id    = azurerm_storage_account.this.id
}