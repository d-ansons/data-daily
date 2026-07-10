variable "name" {
  description = "Name of Azure storage account"
  type        = string
}

variable "resource_group_name" {
  description = "Name of Azure resource group"
  type        = string
}

variable "location" {
  description = "Name of the Azure region"
  type        = string
}

variable "account_tier" {
  default     = "Standard"
  description = "value"
  type        = string
}

variable "account_replication_type" {
  default     = "LRS"
  description = "value"
  type        = string
}

variable "container_names" {
  description = "Name of the storage containers in account"
  type        = list(string)
}

variable "tags" {
  type    = map(string)
  default = {}
}