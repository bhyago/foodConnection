"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foodTBCARoutes = void 0;
var _CreateFoodTBCAController = require("@modules/foodTBCA/useCases/createFoodTBCA/CreateFoodTBCAController");
var _GetFoodTBCAController = require("@modules/foodTBCA/useCases/getFoodTBCA/GetFoodTBCAController");
var _UpdateFoodTBCAController = require("@modules/foodTBCA/useCases/updateFoodTBCA/UpdateFoodTBCAController");
var _express = require("express");
const foodTBCARoutes = (0, _express.Router)();
exports.foodTBCARoutes = foodTBCARoutes;
const createFoodController = new _CreateFoodTBCAController.CreateFoodTBCAController();
const getFoodTBCAController = new _GetFoodTBCAController.GetFoodTBCAController();
const updateFoodTBCAController = new _UpdateFoodTBCAController.UpdateFoodTBCAController();
foodTBCARoutes.post("/", createFoodController.handle);
foodTBCARoutes.get("/:foodId", getFoodTBCAController.handle);
foodTBCARoutes.patch("/", updateFoodTBCAController.handle);