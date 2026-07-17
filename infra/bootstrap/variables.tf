variable "location" {
  type        = string
  description = "Location to use for resources"
  validation {
    condition     = contains(["uksouth", "ukwest"], var.location)
    error_message = "Location must be in the UK"
  }
}

variable "project" {
  type        = string
  description = "Project name, used to build resource names"
}

variable "tags" {
  type        = map(string)
  description = "Map of tags assigned to resource"
  default = {
    environment = "bootstrap"
    managed_by  = "terraform"
  }
}