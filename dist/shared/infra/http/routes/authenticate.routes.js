"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateRoutes = void 0;
var _AuthenticateCompanyController = require("@modules/company/useCases/authenticateCompany/AuthenticateCompanyController");
var _RefreshTokenController = require("@modules/company/useCases/refreshToken/RefreshTokenController");
var _express = require("express");
const authenticateRoutes = (0, _express.Router)();
exports.authenticateRoutes = authenticateRoutes;
const authenticateCompanyController = new _AuthenticateCompanyController.AuthenticateCompanyController();
const refreshTokenController = new _RefreshTokenController.RefreshTokenController();
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);
authenticateRoutes.post("/sessions", authenticateCompanyController.handle);