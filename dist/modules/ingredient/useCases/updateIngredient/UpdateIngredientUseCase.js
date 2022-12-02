"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateIngredientUseCase = void 0;
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _IIngredientRepository = require("@modules/ingredient/repositories/IIngredientRepository");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
let UpdateIngredientUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("IngredientRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IIngredientRepository.IIngredientRepository === "undefined" ? Object : _IIngredientRepository.IIngredientRepository, typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class UpdateIngredientUseCase {
  constructor(ingredientRepository, companyRepository) {
    this.ingredientRepository = ingredientRepository;
    this.companyRepository = companyRepository;
  }
  async execute({
    id,
    companyId,
    description,
    name,
    vegan
  }) {
    var _response$updated_at;
    const companyExists = await this.companyRepository.findById(companyId);
    if (!companyExists) {
      throw new _AppError.AppError("the informed company does not exist.");
    }
    const ingredientExists = await this.ingredientRepository.findById(id, companyId);
    if (!ingredientExists) {
      throw new _AppError.AppError("the informed ingredient was not found");
    }
    const response = await this.ingredientRepository.update({
      companyId,
      description,
      id,
      name,
      vegan
    });
    return {
      id: response.id,
      description: response.description,
      name: response.name,
      vegan: response.vegan,
      updatedDate: (_response$updated_at = response.updated_at) === null || _response$updated_at === void 0 ? void 0 : _response$updated_at.toISOString(),
      registerDate: response.created_at.toISOString()
    };
  }
}) || _class) || _class) || _class) || _class) || _class);
exports.UpdateIngredientUseCase = UpdateIngredientUseCase;