"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListIngredientsUseCase = void 0;
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _IIngredientRepository = require("@modules/ingredient/repositories/IIngredientRepository");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
let ListIngredientsUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("IngredientRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IIngredientRepository.IIngredientRepository === "undefined" ? Object : _IIngredientRepository.IIngredientRepository, typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class ListIngredientsUseCase {
  constructor(ingredientRepository, companyRepository) {
    this.ingredientRepository = ingredientRepository;
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
    const ingredients = await this.ingredientRepository.findMany({
      companyId,
      page,
      limit,
      order,
      sortBy,
      search
    });
    const response = [];
    ingredients[1].forEach(({
      created_at,
      description,
      id,
      name,
      vegan,
      ingredientAllergic
    }) => {
      return response.push({
        description,
        id,
        name,
        vegan,
        allergic: ingredientAllergic.length ? ingredientAllergic.map(allergic => ({
          id: allergic.allergic.id,
          name: allergic.allergic.name
        })) : null,
        registerDate: created_at.toISOString()
      });
    });
    return {
      data: response,
      total: ingredients[0]
    };
  }
}) || _class) || _class) || _class) || _class) || _class);
exports.ListIngredientsUseCase = ListIngredientsUseCase;