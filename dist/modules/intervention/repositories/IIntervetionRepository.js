"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterventionRepository = void 0;
var _prisma = require("@shared/infra/prisma");
class InterventionRepository {
  async create({
    companyId,
    description,
    endDateTime,
    productionChainId,
    startDateTime
  }) {
    const result = await _prisma.prisma.intervention.create({
      data: {
        description,
        endDateTime,
        startDateTime,
        productionChainId
      }
    });
    return result;
  }
  async update({
    companyId,
    description,
    endDateTime,
    id,
    productionChainId,
    startDateTime
  }) {
    const result = await _prisma.prisma.intervention.update({
      data: {
        description,
        endDateTime,
        productionChainId,
        startDateTime
      },
      where: {
        id
      }
    });
    return result;
  }
  async listById({
    companyId,
    id,
    productionChainId
  }) {
    const result = await _prisma.prisma.intervention.findFirst({
      where: {
        id,
        productionChainId
      }
    });
    return result;
  }
  async listMany({
    companyId,
    limit,
    order,
    page,
    productionChainId,
    sortBy,
    search
  }) {
    const whereObj = {
      productionChainId
    };
    const result = await _prisma.prisma.$transaction([_prisma.prisma.intervention.count({
      where: whereObj
    }), _prisma.prisma.intervention.findMany({
      where: whereObj,
      take: limit || undefined,
      skip: limit * (page > 0 ? page - 1 : 0) || undefined,
      orderBy: {
        id: "desc"
      }
    })]);
    return result;
  }
}
exports.InterventionRepository = InterventionRepository;