terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "3.89.0"
    }
  }
}

provider "azurerm" {
  subscription_id = "1bbe1d16-db50-421b-9afb-771f42577508"
  client_id       = "2a121695-4ede-44aa-903e-6bd0e2a65c21"
  client_secret   = "1Iz8Q~G_1-vXYEsAmhqeDAqyzmh96PvbonzXVbh2"
  tenant_id       = "7b2f922c-33b1-4c77-a870-99bfb9429a4d"
  features {}
}

locals {
  resource_group_name = "BIT_PROJECT_GROUP_ONE"
  location            = "East US"
}

resource "azurerm_resource_group" "Resource_Group" {
  name     = local.resource_group_name
  location = local.location
}

resource "azurerm_app_service_plan" "App_Plan" {
  name                = "bit_group_one_app-plan"
  location            = local.location
  resource_group_name = local.resource_group_name
  depends_on          = [azurerm_resource_group.Resource_Group]

  sku {
    tier = "PremiumV3"
    size = "P0v3" 
  }

  kind     = "Linux" 
  reserved = true
}

resource "azurerm_app_service" "WebApp" {
  name                = "bitgrouponewebapp"
  location            = local.location
  resource_group_name = local.resource_group_name
  app_service_plan_id = azurerm_app_service_plan.App_Plan.id
  depends_on          = [azurerm_app_service_plan.App_Plan]
}
