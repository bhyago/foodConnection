"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foodRoutes = void 0;
var _CreateFoodController = require("@modules/food/useCases/createFood/CreateFoodController");
var _DeleteFoodController = require("@modules/food/useCases/deleteFood/DeleteFoodController");
var _GetFoodController = require("@modules/food/useCases/getFood/GetFoodController");
var _ListFoodsController = require("@modules/food/useCases/listFoods/ListFoodsController");
var _UpdateFoodController = require("@modules/food/useCases/updateFood/UpdateFoodController");
var _express = require("express");
const foodRoutes = (0, _express.Router)();
exports.foodRoutes = foodRoutes;
const createFoodController = new _CreateFoodController.CreateFoodController();
const listFoodsController = new _ListFoodsController.ListFoodsController();
const getFoodController = new _GetFoodController.GetFoodController();
const updateFoodController = new _UpdateFoodController.UpdateFoodController();
const deleteFoodController = new _DeleteFoodController.DeleteFoodController();
foodRoutes.post("/", createFoodController.handle);
foodRoutes.get("/", listFoodsController.handle);
foodRoutes.get("/:id", getFoodController.handle);
foodRoutes.patch("/:id", updateFoodController.handle);
foodRoutes.delete("/:id", deleteFoodController.handle);