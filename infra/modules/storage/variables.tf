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
  description = "Storage tier of the account"
  type        = string
}

variable "account_replication_type" {
  default     = "LRS"
  description = "Account replication type"
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