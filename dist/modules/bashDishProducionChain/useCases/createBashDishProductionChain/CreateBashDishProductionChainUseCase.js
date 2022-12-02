"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateBashDishProductionChainUseCase = void 0;
var _IBashDishProductionChainRepository = require("@modules/bashDishProducionChain/repository/IBashDishProductionChainRepository");
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _IDishRepository = require("@modules/dish/repository/IDishRepository");
var _IProductionChainRepository = require("@modules/productionChain/repositories/IProductionChainRepository");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class;
let CreateBashDishProductionChainUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("DishRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("BashDishProductionRepository")(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 2);
}, _dec5 = function (target, key) {
  return (0, _tsyringe.inject)("ProductionChainRepository")(target, undefined, 3);
}, _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", [typeof _IDishRepository.IDishRepository === "undefined" ? Object : _IDishRepository.IDishRepository, typeof _IBashDishProductionChainRepository.IBashDishProductionChainRepository === "undefined" ? Object : _IBashDishProductionChainRepository.IBashDishProductionChainRepository, typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository, typeof _IProductionChainRepository.IProductionChainRepository === "undefined" ? Object : _IProductionChainRepository.IProductionChainRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = class CreateBashDishProductionChainUseCase {
  constructor(DishRepository, BashDishProductionRepository, CompanyRepository, ProductionChainRepository) {
    this.DishRepository = DishRepository;
    this.BashDishProductionRepository = BashDishProductionRepository;
    this.CompanyRepository = CompanyRepository;
    this.ProductionChainRepository = ProductionChainRepository;
  }
  async execute(data) {
    const companyExists = await this.CompanyRepository.findById(data.companyId);
    if (!companyExists) {
      throw new _AppError.AppError("the specified company was not found");
    }
    if (companyExists.companytype.type !== "restaurant") {
      throw new _AppError.AppError("the type of company informed is not allowed to register dishes");
    }
    const dishExists = await this.DishRepository.findById({
      companyId: data.companyId,
      id: data.dishId
    });
    if (!dishExists) {
      throw new _AppError.AppError("the specified dish was not found");
    }

    // const productionChainExists = await this.ProductionChainRepository.findById(
    //   {
    //     id: data.productionChainId,
    //     companyId: undefined,
    //   }
    // );

    // if (!productionChainExists) {
    //   throw new AppError("the informed production chain was not found.");
    // }

    const response = await this.BashDishProductionRepository.create({
      companyId: data.companyId,
      dishId: data.dishId,
      productionChainId: data.productionChainId
    });
    return response;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
exports.CreateBashDishProductionChainUseCase = CreateBashDishProductionChainUseCase;