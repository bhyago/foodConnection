"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateInterventionUseCase = void 0;
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _IIntervetionRepository = require("@modules/intervention/repositories/IIntervetionRepository");
var _IProductionChainRepository = require("@modules/productionChain/repositories/IProductionChainRepository");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
let UpdateInterventionUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("InterventionRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("ProductionChainRepository")(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IIntervetionRepository.InterventionRepository === "undefined" ? Object : _IIntervetionRepository.InterventionRepository, typeof _IProductionChainRepository.IProductionChainRepository === "undefined" ? Object : _IProductionChainRepository.IProductionChainRepository, typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class UpdateInterventionUseCase {
  constructor(interventionRepository, productionChainRepository, companyRepository) {
    this.interventionRepository = interventionRepository;
    this.productionChainRepository = productionChainRepository;
    this.companyRepository = companyRepository;
  }
  async execute({
    companyId,
    description,
    endDateTime,
    productionChainId,
    startDateTime,
    id
  }) {
    const companyExists = await this.companyRepository.findById(companyId);
    if (!companyExists) {
      throw new _AppError.AppError("the informed company does not exist.");
    }
    const productionChainExists = await this.productionChainRepository.findById({
      id: productionChainId,
      companyId
    });
    if (!productionChainExists) {
      throw new _AppError.AppError("the informed production chain was not found.");
    }
    const interventionExists = await this.interventionRepository.listById({
      companyId,
      id,
      productionChainId
    });
    if (!interventionExists) {
      throw new _AppError.AppError("intervention not found..");
    }
    const response = await this.interventionRepository.update({
      id,
      companyId,
      description,
      endDateTime,
      productionChainId,
      startDateTime
    });
    return response;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
exports.UpdateInterventionUseCase = UpdateInterventionUseCase;