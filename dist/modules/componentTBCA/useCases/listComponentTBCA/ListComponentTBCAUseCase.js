"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListComponentTBCAUseCase = void 0;
var _IComponentTBCARepository = require("@modules/componentTBCA/repositories/IComponentTBCARepository");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let ListComponentTBCAUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ComponentTBCARepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IComponentTBCARepository.IComponentTBCARepository === "undefined" ? Object : _IComponentTBCARepository.IComponentTBCARepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListComponentTBCAUseCase {
  constructor(ComponentTBCARepository) {
    this.ComponentTBCARepository = ComponentTBCARepository;
  }
  async execute({
    page,
    limit,
    order,
    sortBy,
    search
  }) {
    const companyTypes = await this.ComponentTBCARepository.findMany({
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
exports.ListComponentTBCAUseCase = ListComponentTBCAUseCase;