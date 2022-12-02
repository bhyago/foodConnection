"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentTBCARoutes = void 0;
var _GetComponentTBCAController = require("@modules/componentTBCA/useCases/GetComponentTBCA/GetComponentTBCAController");
var _ListComponentTBCAController = require("@modules/componentTBCA/useCases/listComponentTBCA/ListComponentTBCAController");
var _express = require("express");
const componentTBCARoutes = (0, _express.Router)();
exports.componentTBCARoutes = componentTBCARoutes;
const listComponentTBCAController = new _ListComponentTBCAController.ListComponentTBCAController();
const getComponentTBCAController = new _GetComponentTBCAController.GetComponentTBCAController();
componentTBCARoutes.get("/", listComponentTBCAController.handle);
componentTBCARoutes.get("/:id", getComponentTBCAController.handle);