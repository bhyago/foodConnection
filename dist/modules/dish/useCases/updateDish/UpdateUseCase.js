"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateDishUseCase = void 0;
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _IDishRepository = require("@modules/dish/repository/IDishRepository");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
let UpdateDishUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("DishRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IDishRepository.IDishRepository === "undefined" ? Object : _IDishRepository.IDishRepository, typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class UpdateDishUseCase {
  constructor(DishRepository, CompanyRepository) {
    this.DishRepository = DishRepository;
    this.CompanyRepository = CompanyRepository;
  }
  async execute(data) {
    const companyExists = await this.CompanyRepository.findById(data.companyId);
    if (!companyExists) {
      throw new _AppError.AppError("the specified company was not found");
    }
    const dishExists = await this.DishRepository.findById({
      companyId: data.companyId,
      id: data.id
    });
    if (!dishExists) {
      throw new _AppError.AppError("the specified dish was not found");
    }
    const response = await this.DishRepository.update({
      id: data.id,
      companyId: data.companyId,
      description: data.description,
      name: data.name
    });
    return response;
  }
}) || _class) || _class) || _class) || _class) || _class);
exports.UpdateDishUseCase = UpdateDishUseCase;