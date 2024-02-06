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
  client_id       = "885fdcf9-0a05-42a8-8d10-79a7156e3930"
  client_secret   = "aqw8Q~yF-GX7EeS9Zo75mNSufSwezGW8IQsp-agY"
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
  kind = "Linux"
  reserved = true
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

