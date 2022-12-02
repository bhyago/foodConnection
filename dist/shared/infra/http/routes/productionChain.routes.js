"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productionChainRoutes = void 0;
var _CreateProductionChainController = require("@modules/productionChain/useCases/createProductionChain/CreateProductionChainController");
var _GetProductionChainController = require("@modules/productionChain/useCases/getProductionChain/GetProductionChainController");
var _ListProductionChainController = require("@modules/productionChain/useCases/listProductionsChain/ListProductionChainController");
var _UpdateProductionChainController = require("@modules/productionChain/useCases/updateProductionChain/UpdateProductionChainController");
var _express = require("express");
const productionChainRoutes = (0, _express.Router)();
exports.productionChainRoutes = productionChainRoutes;
const createProductionChainController = new _CreateProductionChainController.CreateProductionChainController();
const getProductionChainController = new _GetProductionChainController.GetProductionChainController();
const listProductionChainController = new _ListProductionChainController.ListProductionChainController();
const updateProductionChainController = new _UpdateProductionChainController.UpdateProductionChainController();
productionChainRoutes.post("/", createProductionChainController.handle);
productionChainRoutes.get("/", listProductionChainController.handle);
productionChainRoutes.patch("/", updateProductionChainController.handle);
productionChainRoutes.get("/:id", getProductionChainController.handle);