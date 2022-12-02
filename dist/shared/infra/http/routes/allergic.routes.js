"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allergicRoutes = void 0;
var _GetAllergicController = require("@modules/allergic/useCases/getAllergic/GetAllergicController");
var _ListAllergicController = require("@modules/allergic/useCases/ListAllergic/ListAllergicController");
var _express = require("express");
const allergicRoutes = (0, _express.Router)();
exports.allergicRoutes = allergicRoutes;
const listAllergicController = new _ListAllergicController.ListAllergicController();
const getAllergicController = new _GetAllergicController.GetAllergicController();
allergicRoutes.get("/", listAllergicController.handle);
allergicRoutes.get("/:id", getAllergicController.handle);