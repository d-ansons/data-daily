locals {
  rg_name              = "${var.project}-bootstrap-rg"
  storage_account_name = "${var.project}tfstate"
  common_tags = {
    project = "data-brew"
  }
}

module "rg" {
  source   = "../modules/rg"
  name     = local.rg_name
  location = var.location
  tags     = merge(local.common_tags, var.tags)
}

module "storage" {
  source              = "../modules/storage"
  name                = local.storage_account_name
  resource_group_name = module.rg.name
  location            = var.location
  container_names     = ["tfstate"]
  tags                = merge(local.common_tags, var.tags)
}