terraform {
  backend "azurerm" {
    resource_group_name   = "Terra_State_Store"
    storage_account_name   = "terrastatestore2024"
    container_name         = "terracontainerstore"
    key                    = "terraform.tfstate"
  }
}