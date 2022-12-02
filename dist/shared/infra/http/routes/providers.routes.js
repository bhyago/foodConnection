"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.providerRoutes = void 0;
var _CreateProviderController = require("@modules/provider/useCases/createProvider/CreateProviderController");
var _GetProviderController = require("@modules/provider/useCases/getProvider/GetProviderController");
var _ListProvidersController = require("@modules/provider/useCases/listProviders/ListProvidersController");
var _UpdateProviderController = require("@modules/provider/useCases/updateProvider/UpdateProviderController");
var _express = require("express");
const providerRoutes = (0, _express.Router)();
exports.providerRoutes = providerRoutes;
const createProviderController = new _CreateProviderController.CreateProviderController();
const listProvidersController = new _ListProvidersController.ListProvidersController();
const getProviderController = new _GetProviderController.GetProviderController();
const updateProviderController = new _UpdateProviderController.UpdateProviderController();
providerRoutes.post("/", createProviderController.handle);
providerRoutes.get("/", listProvidersController.handle);
providerRoutes.get("/:id", getProviderController.handle);
providerRoutes.patch("/:providerId", updateProviderController.handle);
// providerRoutes.delete("/:id", createCompanyController.handle);