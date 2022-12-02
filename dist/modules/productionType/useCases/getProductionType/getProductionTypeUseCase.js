"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetProductionTypeUseCase = void 0;
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _IProductionType = require("@modules/productionType/repositories/IProductionType");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
let GetProductionTypeUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ProductionTypeRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IProductionType.IProductionTypeRepository === "undefined" ? Object : _IProductionType.IProductionTypeRepository, typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class GetProductionTypeUseCase {
  constructor(productionTypeRepository, companyRepository) {
    this.productionTypeRepository = productionTypeRepository;
    this.companyRepository = companyRepository;
  }
  async execute({
    companyId,
    id
  }) {
    const companyExists = await this.companyRepository.findById(companyId);
    if (!companyExists) {
      throw new _AppError.AppError("the informed company does not exist.");
    }
    const foodExits = await this.productionTypeRepository.findById(companyId, id);
    if (!foodExits) {
      throw new _AppError.AppError("the reported production type was not found.");
    }
    return {
      id: foodExits.id,
      name: foodExits.name
    };
  }
}) || _class) || _class) || _class) || _class) || _class);
exports.GetProductionTypeUseCase = GetProductionTypeUseCase;