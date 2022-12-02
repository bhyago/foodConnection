"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCompanyTypeUseCase = void 0;
var _ICompanyTypeRepository = require("@modules/companyType/repositories/ICompanyTypeRepository");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let GetCompanyTypeUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyTypeRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICompanyTypeRepository.ICompanyTypeRepository === "undefined" ? Object : _ICompanyTypeRepository.ICompanyTypeRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class GetCompanyTypeUseCase {
  constructor(CompanyTypeRepository) {
    this.CompanyTypeRepository = CompanyTypeRepository;
  }
  async execute(id) {
    const response = await this.CompanyTypeRepository.findById(id);
    return response;
  }
}) || _class) || _class) || _class) || _class);
exports.GetCompanyTypeUseCase = GetCompanyTypeUseCase;