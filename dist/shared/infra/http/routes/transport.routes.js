"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transportRoutes = void 0;
var _CreateTransportController = require("@modules/transport/useCases/createTransport/CreateTransportController");
var _GetTransportController = require("@modules/transport/useCases/getTransport/GetTransportController");
var _UpdateTrasportController = require("@modules/transport/useCases/updateTransport/UpdateTrasportController");
var _express = require("express");
const transportRoutes = (0, _express.Router)();
exports.transportRoutes = transportRoutes;
const createTransportController = new _CreateTransportController.CreateTransportController();
const getTransportController = new _GetTransportController.GetTransportController();
const updateTransportController = new _UpdateTrasportController.UpdateTransportController();
transportRoutes.post("/", createTransportController.handle);
transportRoutes.get("/:fabricationId", getTransportController.handle);
transportRoutes.patch("/:fabricationId", updateTransportController.handle);