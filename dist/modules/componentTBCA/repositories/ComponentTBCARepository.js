"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentTBCARepository = void 0;
var _prisma = require("@shared/infra/prisma");
class ComponentTBCARepository {
  async findMany(data) {
    const result = await _prisma.prisma.$transaction([_prisma.prisma.componentTBCA.count(), _prisma.prisma.componentTBCA.findMany({
      take: data.limit || undefined,
      skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined
    })]);
    return result;
  }
  async findById(id) {
    const result = await _prisma.prisma.componentTBCA.findFirst({
      where: {
        id
      }
    });
    return result;
  }
}
exports.ComponentTBCARepository = ComponentTBCARepository;