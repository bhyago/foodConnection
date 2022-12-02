"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCompanyUseCase = void 0;
var _bcrypt = require("bcrypt");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _ICompanyRepository = require("../../repositories/ICompanyRepository");
var _dec, _dec2, _dec3, _dec4, _class;
let CreateCompanyUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateCompanyUseCase {
  constructor(companyRepository) {
    this.companyRepository = companyRepository;
  }
  async execute(data) {
    const emailAlreadyExists = await this.companyRepository.findByEmail(data.email);
    if (emailAlreadyExists) {
      throw new _AppError.AppError("Email provided is already used.");
    }
    const passwordHash = await (0, _bcrypt.hash)(data.password, 8);
    const response = await this.companyRepository.create({
      name: data.name,
      email: data.email,
      typeId: data.typeId,
      password: passwordHash,
      cnpj: data.cnpj,
      description: data.description,
      legalname: data.legalname,
      logo: data.logo,
      phone: data.phone,
      type: data.type,
      companyAddress: data.companyAddress
    });
    return {
      id: response.id
    };
  }
}) || _class) || _class) || _class) || _class);
exports.CreateCompanyUseCase = CreateCompanyUseCase;