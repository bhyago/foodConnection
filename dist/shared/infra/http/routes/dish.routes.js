"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dishRoutes = void 0;
var _CreateDishController = require("@modules/dish/useCases/createDish/CreateDishController");
var _DeleteDishController = require("@modules/dish/useCases/deleteDish/DeleteDishController");
var _GetDishController = require("@modules/dish/useCases/getDish/GetDishController");
var _ListDishController = require("@modules/dish/useCases/listDish/ListDishController");
var _UpdateController = require("@modules/dish/useCases/updateDish/UpdateController");
var _express = require("express");
const dishRoutes = (0, _express.Router)();
exports.dishRoutes = dishRoutes;
const createDishController = new _CreateDishController.CreateDishController();
const listDishController = new _ListDishController.ListDishController();
const deleteDishController = new _DeleteDishController.DeleteDishController();
const updateDishController = new _UpdateController.UpdateDishController();
const getDishController = new _GetDishController.GetDishController();
dishRoutes.post("/", createDishController.handle);
dishRoutes.get("/", listDishController.handle);
dishRoutes.delete("/:id", deleteDishController.handle);
dishRoutes.patch("/:id", updateDishController.handle);
dishRoutes.get("/:id", getDishController.handle);