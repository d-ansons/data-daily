variable "name" {
  type        = string
  description = "Name of the Azure resource group"
}

variable "location" {
  type        = string
  description = "Azure region resource group belong to"
}

variable "tags" {
  type        = map(string)
  description = "Map of tags assigned to the resource group"
  default     = {}
}