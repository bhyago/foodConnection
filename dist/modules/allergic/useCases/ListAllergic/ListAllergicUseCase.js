"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListAllergicUseCase = void 0;
var _IAllergicRepository = require("@modules/allergic/repository/IAllergicRepository");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let ListAllergicUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("AllergicRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IAllergicRepository.IAllergicRepository === "undefined" ? Object : _IAllergicRepository.IAllergicRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListAllergicUseCase {
  constructor(AllergicRepository) {
    this.AllergicRepository = AllergicRepository;
  }
  async execute({
    limit,
    order,
    page,
    sortBy,
    search
  }) {
    const allergic = await this.AllergicRepository.findMany({
      page,
      limit,
      order,
      sortBy,
      search
    });
    return {
      data: allergic[1],
      total: allergic[0]
    };
  }
}) || _class) || _class) || _class) || _class);
exports.ListAllergicUseCase = ListAllergicUseCase;