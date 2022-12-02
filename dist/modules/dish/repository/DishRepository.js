"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DishRepository = void 0;
var _prisma = require("@shared/infra/prisma");
class DishRepository {
  async create(data) {
    const result = await _prisma.prisma.dish.create({
      data: {
        companyId: data.companyId,
        active: true,
        description: data.description,
        name: data.name
      }
    });
    return result;
  }
  async update(data) {
    const result = await _prisma.prisma.dish.update({
      data: {
        companyId: data.companyId,
        description: data.description,
        name: data.name
      },
      where: {
        id: data.id
      }
    });
    return result;
  }
  async delete(data) {
    const result = await _prisma.prisma.dish.update({
      data: {
        active: false
      },
      where: {
        id: data.id
      }
    });
    return result;
  }
  async findById(data) {
    const result = await _prisma.prisma.dish.findFirst({
      where: {
        active: true,
        companyId: data.companyId,
        id: data.id
      }
    });
    return result;
  }
  async findMany(data) {
    const result = await _prisma.prisma.$transaction([_prisma.prisma.dish.count({
      where: {
        active: true,
        companyId: data.companyId
      }
    }), _prisma.prisma.dish.findMany({
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
exports.DishRepository = DishRepository;