"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FabricationRepository = void 0;
var _prisma = require("@shared/infra/prisma");
class FabricationRepository {
  async create({
    fabricationDate,
    batch,
    productionChainId,
    validadeDate
  }) {
    const result = await _prisma.prisma.fabrication.create({
      data: {
        batch,
        fabricationDate,
        validadeDate,
        productionChainId
      }
    });
    return result;
  }
  async findById({
    companyId,
    id,
    productionChainId
  }) {
    const result = await _prisma.prisma.fabrication.findFirst({
      where: {
        productionChainId,
        id
      }
    });
    return result;
  }
}
exports.FabricationRepository = FabricationRepository;