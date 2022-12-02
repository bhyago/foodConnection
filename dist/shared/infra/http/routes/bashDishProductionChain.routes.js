"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bashDishProductionChainRoutes = void 0;
var _CreateBashDishProductionChainController = require("@modules/bashDishProducionChain/useCases/createBashDishProductionChain/CreateBashDishProductionChainController");
var _DeleteBashDishProductionChainController = require("@modules/bashDishProducionChain/useCases/DeleteBashDishProductionChain/DeleteBashDishProductionChainController");
var _GetBashDishProductionChainController = require("@modules/bashDishProducionChain/useCases/getBashDishProductionChain/GetBashDishProductionChainController");
var _ListBashDishProductionChainController = require("@modules/bashDishProducionChain/useCases/listBashDishProductionChain/ListBashDishProductionChainController");
var _UpdateUpdateBashDishProductionChainController = require("@modules/bashDishProducionChain/useCases/updateUpdateBashDishProductionChain/UpdateUpdateBashDishProductionChainController");
var _express = require("express");
const bashDishProductionChainRoutes = (0, _express.Router)();
exports.bashDishProductionChainRoutes = bashDishProductionChainRoutes;
const createDishController = new _CreateBashDishProductionChainController.CreateBashDishProductionChainController();
const listDishController = new _ListBashDishProductionChainController.ListBashDishProductionChainController();
const deleteDishController = new _DeleteBashDishProductionChainController.DeleteBashDishProductionChainController();
const updateDishController = new _UpdateUpdateBashDishProductionChainController.UpdateBashDishProductionChainController();
const getDishController = new _GetBashDishProductionChainController.GetBashDishProductionChainController();
bashDishProductionChainRoutes.post("/", createDishController.handle);
bashDishProductionChainRoutes.get("/", listDishController.handle);
bashDishProductionChainRoutes.delete("/:id", deleteDishController.handle);
bashDishProductionChainRoutes.patch("/:id", updateDishController.handle);
bashDishProductionChainRoutes.get("/:id", getDishController.handle);