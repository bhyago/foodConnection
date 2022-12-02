"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetProductionChainUseCase = void 0;
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _IProductionChainRepository = require("@modules/productionChain/repositories/IProductionChainRepository");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
let GetProductionChainUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ProductionChainRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IProductionChainRepository.IProductionChainRepository === "undefined" ? Object : _IProductionChainRepository.IProductionChainRepository, typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class GetProductionChainUseCase {
  constructor(productionChainRepository, companyRepository) {
    this.productionChainRepository = productionChainRepository;
    this.companyRepository = companyRepository;
  }
  async execute({
    id,
    companyId
  }) {
    const companyExists = await this.companyRepository.findById(companyId);
    if (!companyExists) {
      throw new _AppError.AppError("the informed company does not exist.");
    }
    const productionChainExists = await this.productionChainRepository.findById({
      id,
      companyId
    });
    if (!productionChainExists) {
      throw new _AppError.AppError("the informed production chain was not found.");
    }
    return productionChainExists;
  }
}) || _class) || _class) || _class) || _class) || _class);
exports.GetProductionChainUseCase = GetProductionChainUseCase;