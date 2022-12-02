"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllergicRepository = void 0;
var _prisma = require("@shared/infra/prisma");
class AllergicRepository {
  async findById(id) {
    const result = await _prisma.prisma.allergic.findFirst({
      where: {
        id
      }
    });
    return result;
  }
  async findMany(data) {
    const result = await _prisma.prisma.$transaction([_prisma.prisma.allergic.count(), _prisma.prisma.allergic.findMany({
      take: data.limit || undefined,
      skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined
    })]);
    return result;
  }
}
exports.AllergicRepository = AllergicRepository;