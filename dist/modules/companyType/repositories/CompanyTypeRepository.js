"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanyTypeRepository = void 0;
var _prisma = require("@shared/infra/prisma");
class CompanyTypeRepository {
  async findMany(data) {
    const result = await _prisma.prisma.$transaction([_prisma.prisma.companyType.count(), _prisma.prisma.companyType.findMany({
      take: data.limit || undefined,
      skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined
    })]);
    return result;
  }
  async findById(id) {
    const result = await _prisma.prisma.companyType.findFirst({
      where: {
        id
      }
    });
    return result;
  }
}
exports.CompanyTypeRepository = CompanyTypeRepository;