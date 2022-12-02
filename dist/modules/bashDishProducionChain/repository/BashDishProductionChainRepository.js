"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BashDishProductionChainRepository = void 0;
var _prisma = require("@shared/infra/prisma");
class BashDishProductionChainRepository {
  async create(data) {
    const result = await _prisma.prisma.bashDishProductionChain.create({
      data: {
        dishId: data.dishId,
        companyId: data.companyId,
        active: true,
        productionChainId: data.productionChainId
      }
    });
    return result;
  }
  async update(data) {
    const result = await _prisma.prisma.bashDishProductionChain.update({
      data: {
        dishId: data.dishId,
        productionChainId: data.productionChainId
      },
      where: {
        id: data.id
      }
    });
    return result;
  }
  async delete(data) {
    const result = await _prisma.prisma.bashDishProductionChain.delete({
      where: {
        id: data.id
      }
    });
    return result;
  }
  async findById(data) {
    const result = await _prisma.prisma.bashDishProductionChain.findFirst({
      where: {
        id: data.id,
        companyId: data.companyId
      }
    });
    return result;
  }
  async findMany(data) {
    const result = await _prisma.prisma.$transaction([_prisma.prisma.bashDishProductionChain.count({
      where: {
        active: true,
        companyId: data.companyId
      }
    }), _prisma.prisma.bashDishProductionChain.findMany({
      where: {
        active: true,
        companyId: data.companyId
      },
      take: data.limit || undefined,
      skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined
    })]);
    return result;
  }
}
exports.BashDishProductionChainRepository = BashDishProductionChainRepository;