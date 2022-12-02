"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.companyTypesRoutes = void 0;
var _GetCompanyTypesController = require("@modules/companyType/useCases/GetCompanyTypes/GetCompanyTypesController");
var _ListCompanyController = require("@modules/companyType/useCases/listCompanyTypes/ListCompanyController");
var _express = require("express");
const companyTypesRoutes = (0, _express.Router)();
exports.companyTypesRoutes = companyTypesRoutes;
const listCompanyTypeController = new _ListCompanyController.ListCompanyTypeController();
const getCompanyTypeController = new _GetCompanyTypesController.GetCompanyController();
companyTypesRoutes.get("/", listCompanyTypeController.handle);
companyTypesRoutes.get("/:id", getCompanyTypeController.handle);