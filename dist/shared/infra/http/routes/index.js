"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;
var _express = require("express");
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swagger = _interopRequireDefault(require("../../../../swagger.json"));
var _allergic = require("./allergic.routes");
var _authenticate = require("./authenticate.routes");
var _bashDishProductionChain = require("./bashDishProductionChain.routes");
var _company = require("./company.routes");
var _companyTypes = require("./companyTypes.routes");
var _componentTBCA = require("./componentTBCA.routes");
var _dish = require("./dish.routes");
var _fabrication = require("./fabrication.routes");
var _foods = require("./foods.routes");
var _foodTBCA = require("./foodTBCA.routes");
var _ingredients = require("./ingredients.routes");
var _intervention = require("./intervention.routes");
var _productionChain = require("./productionChain.routes");
var _productionType = require("./productionType.routes");
var _providers = require("./providers.routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const routes = (0, _express.Router)();
exports.routes = routes;
routes.use("/companies", _company.companyRoutes);
routes.use("/providers", _providers.providerRoutes);
routes.use("/food", _foods.foodRoutes);
routes.use("/ingredient", _ingredients.ingredientRoutes);
routes.use("/productionchain", _productionChain.productionChainRoutes);
routes.use("/productiontype", _productionType.productionTypeRoutes);
routes.use("/food-tbca", _foodTBCA.foodTBCARoutes);
routes.use("/fabrications", _fabrication.fabricationRoutes);
routes.use("/interventions", _intervention.interventionRoutes);
routes.use("/allergic", _allergic.allergicRoutes);
routes.use("/company-types", _companyTypes.companyTypesRoutes);
routes.use("/component-tbca", _componentTBCA.componentTBCARoutes);
routes.use("/dish", _dish.dishRoutes);
routes.use("/bash-dish-production-chain", _bashDishProductionChain.bashDishProductionChainRoutes);
routes.use("/docs", _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
routes.use(_authenticate.authenticateRoutes);