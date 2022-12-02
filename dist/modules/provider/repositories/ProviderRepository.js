"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProviderRepository = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _prisma = require("@shared/infra/prisma");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProviderRepository {
  async update(data) {
    console.log(data);
    const response = await _prisma.prisma.provider.update({
      data: {
        area: data.area,
        active: data.active,
        cnpj: data.cnpj,
        name: data.name,
        updated_at: (0, _moment.default)().utc().format()
      },
      where: {
        id: data.providerId
      }
    });
    return response;
  }
  async listProviders({
    companyId,
    limit,
    page
  }) {
    const response = await _prisma.prisma.$transaction([_prisma.prisma.provider.count({
      where: {
        id_company: companyId,
        active: true
      }
    }), _prisma.prisma.provider.findMany({
      where: {
        id_company: companyId,
        active: true
      },
      take: limit || undefined,
      skip: limit * (page > 0 ? page - 1 : 0) || undefined
    })]);
    return response;
  }
  async findById(providerId, companyId) {
    const response = await _prisma.prisma.provider.findFirst({
      where: {
        id: providerId,
        id_company: companyId,
        active: true
      }
    });
    return response;
  }
  async create(data) {
    const response = await _prisma.prisma.provider.create({
      data: {
        active: true,
        cnpj: data.cnpj,
        name: data.name,
        area: data.area,
        id_company: data.companyId,
        created_at: (0, _moment.default)().utc().format()
      }
    });
    return response;
  }
  async findByCnpj(cnpj, companyId) {
    const response = await _prisma.prisma.provider.findFirst({
      where: {
        id_company: companyId,
        active: true,
        cnpj
      }
    });
    return response;
  }
}
exports.ProviderRepository = ProviderRepository;