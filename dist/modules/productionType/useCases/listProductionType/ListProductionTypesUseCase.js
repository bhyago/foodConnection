"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListProductionTypesUseCase = void 0;
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _IProductionType = require("@modules/productionType/repositories/IProductionType");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
let ListProductionTypesUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("ProductionTypeRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository, typeof _IProductionType.IProductionTypeRepository === "undefined" ? Object : _IProductionType.IProductionTypeRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class ListProductionTypesUseCase {
  constructor(companyRepository, productionTypeRepository) {
    this.companyRepository = companyRepository;
    this.productionTypeRepository = productionTypeRepository;
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
    const productionTypes = await this.productionTypeRepository.findMany({
      companyId,
      page,
      limit,
      order,
      sortBy,
      search
    });
    const response = [];
    productionTypes[1].forEach(productionType => {
      return response.push({
        id: productionType.id,
        name: productionType.name
      });
    });
    return {
      data: response,
      total: productionTypes[0]
    };
  }
}) || _class) || _class) || _class) || _class) || _class);
exports.ListProductionTypesUseCase = ListProductionTypesUseCase;