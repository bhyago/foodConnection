"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductionTypeRepository = void 0;
var _prisma = require("@shared/infra/prisma");
class ProductionTypeRepository {
  async findById(companyId, id) {
    const result = await _prisma.prisma.productionType.findFirst({
      where: {
        id
      }
    });
    return result;
  }
  async findMany(data) {
    const sortBy = {
      id: "id",
      name: "name"
    }[data.sortBy] || "id";
    const result = await _prisma.prisma.$transaction([_prisma.prisma.productionType.count(), _prisma.prisma.productionType.findMany({
      take: data.limit || undefined,
      skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined
    })]);
    return result;
  }
}
exports.ProductionTypeRepository = ProductionTypeRepository;