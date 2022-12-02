"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetComponentTBCAUseCase = void 0;
var _IComponentTBCARepository = require("@modules/componentTBCA/repositories/IComponentTBCARepository");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let GetComponentTBCAUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ComponentTBCARepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IComponentTBCARepository.IComponentTBCARepository === "undefined" ? Object : _IComponentTBCARepository.IComponentTBCARepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class GetComponentTBCAUseCase {
  constructor(ComponentTBCARepository) {
    this.ComponentTBCARepository = ComponentTBCARepository;
  }
  async execute(id) {
    const response = await this.ComponentTBCARepository.findById(id);
    return response;
  }
}) || _class) || _class) || _class) || _class);
exports.GetComponentTBCAUseCase = GetComponentTBCAUseCase;