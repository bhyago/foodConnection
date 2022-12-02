"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListBashDishProductionChainUseCase = void 0;
var _IBashDishProductionChainRepository = require("@modules/bashDishProducionChain/repository/IBashDishProductionChainRepository");
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _IDishRepository = require("@modules/dish/repository/IDishRepository");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
let ListBashDishProductionChainUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("DishRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("BashDishProductionRepository")(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IDishRepository.IDishRepository === "undefined" ? Object : _IDishRepository.IDishRepository, typeof _IBashDishProductionChainRepository.IBashDishProductionChainRepository === "undefined" ? Object : _IBashDishProductionChainRepository.IBashDishProductionChainRepository, typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class ListBashDishProductionChainUseCase {
  constructor(DishRepository, BashDishProductionRepository, CompanyRepository) {
    this.DishRepository = DishRepository;
    this.BashDishProductionRepository = BashDishProductionRepository;
    this.CompanyRepository = CompanyRepository;
  }
  async execute(data) {
    const companyExists = await this.CompanyRepository.findById(data.companyId);
    if (!companyExists) {
      throw new _AppError.AppError("the specified company was not found");
    }
    if (companyExists.companytype.type !== "restaurant") {
      throw new _AppError.AppError("the type of company informed is not allowed");
    }
    const response = await this.BashDishProductionRepository.findMany({
      companyId: data.companyId,
      limit: data.limit,
      order: data.order,
      page: data.page,
      sortBy: data.sortBy,
      search: data.search
    });
    return {
      total: response[0],
      data: response[1]
    };
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
exports.ListBashDishProductionChainUseCase = ListBashDishProductionChainUseCase;