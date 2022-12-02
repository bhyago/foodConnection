"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ingredientRoutes = void 0;
var _DeleteFoodController = require("@modules/food/useCases/deleteFood/DeleteFoodController");
var _CreateIngredientController = require("@modules/ingredient/useCases/createIngredient/CreateIngredientController");
var _GetIngredientController = require("@modules/ingredient/useCases/getIngredient/GetIngredientController");
var _ListIngredientsController = require("@modules/ingredient/useCases/listIngredients/ListIngredientsController");
var _UpdateIngredientController = require("@modules/ingredient/useCases/updateIngredient/UpdateIngredientController");
var _express = require("express");
const ingredientRoutes = (0, _express.Router)();
exports.ingredientRoutes = ingredientRoutes;
const createIngredientController = new _CreateIngredientController.CreateIngredientController();
const listIngredientsController = new _ListIngredientsController.ListIngredientsController();
const getIngredientController = new _GetIngredientController.GetIngredientController();
const updateIngredientController = new _UpdateIngredientController.UpdateIngredientController();
const deleteFoodController = new _DeleteFoodController.DeleteFoodController();
ingredientRoutes.post("/", createIngredientController.handle);
ingredientRoutes.get("/", listIngredientsController.handle);
ingredientRoutes.get("/:id", getIngredientController.handle);
ingredientRoutes.patch("/:id", updateIngredientController.handle);
ingredientRoutes.delete("/:id", deleteFoodController.handle);