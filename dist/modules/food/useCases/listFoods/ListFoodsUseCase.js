"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListFoodsUseCase = void 0;
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _IFoodRepository = require("@modules/food/reposotories/IFoodRepository");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
let ListFoodsUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("FoodRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IFoodRepository.IFoodRepository === "undefined" ? Object : _IFoodRepository.IFoodRepository, typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class ListFoodsUseCase {
  constructor(foodRepository, companyRepository) {
    this.foodRepository = foodRepository;
    this.companyRepository = companyRepository;
  }
  async execute({
    companyId,
    limit,
    order,
    page,
    sortBy,
    search
  }) {
    const companyExists = await this.companyRepository.findById(companyId);
    if (!companyExists) {
      throw new _AppError.AppError("the informed company does not exist.");
    }
    const foods = await this.foodRepository.findMany({
      companyId,
      page,
      limit,
      order,
      sortBy,
      search
    });
    const response = [];
    foods[1].forEach(food => {
      return response.push({
        id: food.id,
        description: food.description || null,
        name: food.name,
        type: {
          id: food.foodtype.id,
          name: food.foodtype.type
        }
      });
    });
    return {
      data: response,
      total: foods[0]
    };
  }
}) || _class) || _class) || _class) || _class) || _class);
exports.ListFoodsUseCase = ListFoodsUseCase;