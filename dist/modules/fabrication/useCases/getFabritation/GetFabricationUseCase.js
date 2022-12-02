"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetFabricationUseCase = void 0;
var _IFabricationRepository = require("@modules/fabrication/repositories/IFabricationRepository");
var _IProductionChainRepository = require("@modules/productionChain/repositories/IProductionChainRepository");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
let GetFabricationUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("FabricationRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("ProductionChainRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IFabricationRepository.IFabricationRepository === "undefined" ? Object : _IFabricationRepository.IFabricationRepository, typeof _IProductionChainRepository.IProductionChainRepository === "undefined" ? Object : _IProductionChainRepository.IProductionChainRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class GetFabricationUseCase {
  constructor(fabricationRepository, productionChainRepository) {
    this.fabricationRepository = fabricationRepository;
    this.productionChainRepository = productionChainRepository;
  }
  async execute({
    companyId,
    id,
    productionChainId
  }) {
    const productionChainExists = await this.productionChainRepository.findById({
      id: productionChainId,
      companyId
    });
    if (!productionChainExists) {
      throw new _AppError.AppError("the informed production chain was not found.");
    }
    const response = await this.fabricationRepository.findById({
      companyId,
      id,
      productionChainId
    });
    return response;
  }
}) || _class) || _class) || _class) || _class) || _class);
exports.GetFabricationUseCase = GetFabricationUseCase;