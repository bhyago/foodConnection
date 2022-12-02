"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fabricationRoutes = void 0;
var _CreateFabricationController = require("@modules/fabrication/useCases/createFabrication/CreateFabricationController");
var _GetFabricationController = require("@modules/fabrication/useCases/getFabritation/GetFabricationController");
var _express = require("express");
const fabricationRoutes = (0, _express.Router)();
exports.fabricationRoutes = fabricationRoutes;
const createFabricationController = new _CreateFabricationController.CreateFabricationController();
const getFabricationController = new _GetFabricationController.GetFabricationController();
fabricationRoutes.post("/", createFabricationController.handle);
fabricationRoutes.get("/:id", getFabricationController.handle);