"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCompanyTypeAUseCase = void 0;
var _ICompanyTypeRepository = require("@modules/companyType/repositories/ICompanyTypeRepository");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let ListCompanyTypeAUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyTypeRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICompanyTypeRepository.ICompanyTypeRepository === "undefined" ? Object : _ICompanyTypeRepository.ICompanyTypeRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListCompanyTypeAUseCase {
  constructor(CompanyTypeRepository) {
    this.CompanyTypeRepository = CompanyTypeRepository;
  }
  async execute({
    page,
    limit,
    order,
    sortBy,
    search
  }) {
    const companyTypes = await this.CompanyTypeRepository.findMany({
      page,
      limit,
      order,
      sortBy,
      search
    });
    return {
      data: companyTypes[1],
      total: companyTypes[0]
    };
  }
}) || _class) || _class) || _class) || _class);
exports.ListCompanyTypeAUseCase = ListCompanyTypeAUseCase;