"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetProviderUseCase = void 0;
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _IProviderRepository = require("../../repositories/IProviderRepository");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
let GetProviderUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ProviderRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IProviderRepository.IProviderRepository === "undefined" ? Object : _IProviderRepository.IProviderRepository, typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class GetProviderUseCase {
  constructor(providerRepository, companyRepository) {
    this.providerRepository = providerRepository;
    this.companyRepository = companyRepository;
  }
  async execute({
    companyId,
    providerId
  }) {
    const companyExists = await this.companyRepository.findById(companyId);
    if (!companyExists) {
      throw new _AppError.AppError("the informed company does not exist.");
    }
    const provider = await this.providerRepository.findById(providerId, companyId);
    if (!provider) {
      throw new _AppError.AppError("Informed provider not found.");
    }
    return provider;
  }
}) || _class) || _class) || _class) || _class) || _class);
exports.GetProviderUseCase = GetProviderUseCase;