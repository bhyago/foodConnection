"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateTransportUseCase = void 0;
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _IFabricationRepository = require("@modules/fabrication/repositories/IFabricationRepository");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _ITransportRepository = require("../../repositories/ITransportRepository");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;
let UpdateTransportUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("FabricationRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)("TransportRepository")(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IFabricationRepository.IFabricationRepository === "undefined" ? Object : _IFabricationRepository.IFabricationRepository, typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository, typeof _ITransportRepository.ITransportRepository === "undefined" ? Object : _ITransportRepository.ITransportRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class UpdateTransportUseCase {
  constructor(fabricationRepository, companyRepository, transportRepository) {
    this.fabricationRepository = fabricationRepository;
    this.companyRepository = companyRepository;
    this.transportRepository = transportRepository;
  }
  async execute({
    companyId,
    destinyAddress,
    endDateTime,
    fabricationId,
    originAddress,
    startDateTime
  }) {
    const companyExists = await this.companyRepository.findById(companyId);
    if (!companyExists) {
      throw new _AppError.AppError("the informed company does not exist.");
    }
    const fabricationExists = await this.fabricationRepository.findById({
      companyId,
      id: fabricationId,
      productionChainId: undefined
    });
    if (!fabricationExists) {
      throw new _AppError.AppError("The specified manufacturer was not found.");
    }
    const transportExists = await this.transportRepository.findById({
      companyId,
      fabricationId
    });
    if (!transportExists) {
      throw new _AppError.AppError("The specified transport was not found.");
    }
    let origin;
    if (origin) {
      origin = `${originAddress.street}, ${originAddress.number}, ${originAddress.complement}, ${originAddress.neighborhood}, ${originAddress.city}, ${originAddress.state}, ${originAddress.zipCode}`;
    }
    let destiny;
    if (destinyAddress) {
      destiny = `${destinyAddress.street}, ${destinyAddress.number}, ${destinyAddress.complement}, ${destinyAddress.neighborhood}, ${destinyAddress.city}, ${destinyAddress.state}, ${destinyAddress.zipCode}`;
    }
    const response = await this.transportRepository.update({
      companyId,
      destiny,
      endDateTime,
      fabricationId,
      origin,
      startDateTime
    });
    return response;
  }
}) || _class) || _class) || _class) || _class) || _class) || _class);
exports.UpdateTransportUseCase = UpdateTransportUseCase;