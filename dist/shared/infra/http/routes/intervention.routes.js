"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interventionRoutes = void 0;
var _CreateInterventionController = require("@modules/intervention/useCases/createIntervention/CreateInterventionController");
var _GetInterventionController = require("@modules/intervention/useCases/getIntervention/GetInterventionController");
var _ListInterventionController = require("@modules/intervention/useCases/listInterventions/ListInterventionController");
var _UpdateInterventionController = require("@modules/intervention/useCases/updateIntervention/UpdateInterventionController");
var _express = require("express");
const interventionRoutes = (0, _express.Router)();
exports.interventionRoutes = interventionRoutes;
const listInterventionController = new _ListInterventionController.ListInterventionController();
const createInterventionController = new _CreateInterventionController.CreateInterventionController();
const getInterventionController = new _GetInterventionController.GetInterventionController();
const updateInterventionController = new _UpdateInterventionController.UpdateInterventionController();
interventionRoutes.get("/", listInterventionController.handle);
interventionRoutes.get("/:id", getInterventionController.handle);
interventionRoutes.post("/", createInterventionController.handle);
interventionRoutes.patch("/", updateInterventionController.handle);