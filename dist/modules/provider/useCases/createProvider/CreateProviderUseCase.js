"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProviderUseCase = void 0;
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _IProviderRepository = require("../../repositories/IProviderRepository");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
let CreateProviderUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ProviderRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IProviderRepository.IProviderRepository === "undefined" ? Object : _IProviderRepository.IProviderRepository, typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateProviderUseCase {
  constructor(providerRepository, companyRepository) {
    this.providerRepository = providerRepository;
    this.companyRepository = companyRepository;
  }
  async execute(data) {
    const companyExists = await this.companyRepository.findById(data.companyId);
    if (!companyExists) {
      throw new _AppError.AppError("the informed company does not exist.");
    }
    const cnpjAlreadyExists = await this.providerRepository.findByCnpj(data.companyId, data.cnpj);
    if (cnpjAlreadyExists) {
      throw new _AppError.AppError("CNPJ provided is already used.");
    }
    const response = await this.providerRepository.create({
      active: true,
      area: data.area,
      cnpj: data.cnpj,
      companyId: data.companyId,
      name: data.name
    });
    return {
      id: response.id
    };
  }
}) || _class) || _class) || _class) || _class) || _class);
exports.CreateProviderUseCase = CreateProviderUseCase;