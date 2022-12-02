"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetFoodTBCAUseCase = void 0;
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _IFoodRepository = require("@modules/food/reposotories/IFoodRepository");
var _IFoodTBCARepository = require("@modules/foodTBCA/repositories/IFoodTBCARepository");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
let GetFoodTBCAUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("FoodRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("FoodTBCARepository")(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IFoodRepository.IFoodRepository === "undefined" ? Object : _IFoodRepository.IFoodRepository, typeof _IFoodTBCARepository.IFoodTBCARepository === "undefined" ? Object : _IFoodTBCARepository.IFoodTBCARepository, typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class GetFoodTBCAUseCase {
  constructor(foodRepository, foodTBCARepository, companyRepository) {
    this.foodRepository = foodRepository;
    this.foodTBCARepository = foodTBCARepository;
    this.companyRepository = companyRepository;
  }
  async execute({
    companyId,
    foodId
  }) {
    const companyExists = await this.companyRepository.findById(companyId);
    if (!companyExists) {
      throw new _AppError.AppError("the informed company does not exist.");
    }
    const foodTypeExists = await this.foodRepository.findById({
      id: foodId,
      companyId
    });
    if (!foodTypeExists) {
      throw new _AppError.AppError("the food informed does not exist");
    }
    const tbcaExists = await this.foodTBCARepository.findByFoodId({
      companyId,
      foodId
    });
    if (!tbcaExists) {
      throw new _AppError.AppError("the table tbca of the food informed was not found.");
    }
    return tbcaExists;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
exports.GetFoodTBCAUseCase = GetFoodTBCAUseCase;