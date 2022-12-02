"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productionTypeRoutes = void 0;
var _getProductionTypeController = require("@modules/productionType/useCases/getProductionType/getProductionTypeController");
var _ListProductionTypesController = require("@modules/productionType/useCases/listProductionType/ListProductionTypesController");
var _express = require("express");
const productionTypeRoutes = (0, _express.Router)();
exports.productionTypeRoutes = productionTypeRoutes;
const listProductionTypesController = new _ListProductionTypesController.ListProductionTypesController();
const getProductionTypeController = new _getProductionTypeController.GetProductionTypeController();
productionTypeRoutes.get("/", listProductionTypesController.handle);
productionTypeRoutes.get("/:id", getProductionTypeController.handle);