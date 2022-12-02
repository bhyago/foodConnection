"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.companyRoutes = void 0;
var _CreateCompanyController = require("@modules/company/useCases/createCompany/CreateCompanyController");
var _express = require("express");
const companyRoutes = (0, _express.Router)();
exports.companyRoutes = companyRoutes;
const createCompanyController = new _CreateCompanyController.CreateCompanyController();
companyRoutes.post("/", createCompanyController.handle);