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
  client_id       = "875f80ef-6c88-458d-9135-b630e031fb57"
  client_secret   = "1fb8Q~vqzIEY7HRZOVKQjVeZFmi3mAS4Uw1Uxams"
  tenant_id       = "7b2f922c-33b1-4c77-a870-99bfb9429a4d"
  features {}
}

locals {
  resource_group_name = "BIT_PROJECT_GROUP_ONE"
  location = "East US"
}

resource "azurerm_resource_group" "Resource_Group"{
  name= local.resource_group_name
  location= local.location
}

resource "azurerm_app_service_plan" "App_Plan" {
  name                = "app-plan10"
  location            = local.location
  resource_group_name = local.resource_group_name
  depends_on = [ azurerm_resource_group.Resource_Group ]

  sku {
    tier = "Free"
    size = "F1"
  }
}

resource "azurerm_app_service" "WebApp" {
  name                = "webapp2506"
  location            = local.location
  resource_group_name = local.resource_group_name
  app_service_plan_id = azurerm_app_service_plan.App_Plan.id
  depends_on = [ azurerm_app_service_plan.App_Plan ]
}

