"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanyRepository = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _prisma = require("@shared/infra/prisma");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CompanyRepository {
  async deleteRefreshTokenById(companyTokenId) {
    await _prisma.prisma.companyToken.delete({
      where: {
        id: companyTokenId
      }
    });
  }
  async findByCompanyIdAndRefreshToken(companyId, refreshToken) {
    const result = await _prisma.prisma.companyToken.findFirst({
      where: {
        companyId,
        refreshToken
      }
    });
    return result;
  }
  async createToken({
    companyId,
    expiresDate,
    refreshToken
  }) {
    const result = await _prisma.prisma.companyToken.create({
      data: {
        expiresDate,
        refreshToken,
        companyId
      }
    });
    return result;
  }
  async findByEmail(email) {
    const result = await _prisma.prisma.company.findFirst({
      where: {
        active: true,
        email
      }
    });
    return result;
  }
  async create(data) {
    const result = await _prisma.prisma.company.create({
      data: {
        name: data.name,
        email: data.email,
        typeId: data.typeId,
        password: data.password,
        cnpj: data.cnpj,
        descriptiom: data.description,
        legalname: data.legalname,
        logo: data.logo,
        phone: data.phone,
        active: true,
        type: data.type,
        created_at: (0, _moment.default)().utc().format(),
        companyAddress: {
          create: {
            city: data.companyAddress.city,
            complement: data.companyAddress.complement,
            created_at: (0, _moment.default)().utc().format(),
            neighborhood: data.companyAddress.neighborhood,
            number: data.companyAddress.number,
            state: data.companyAddress.state,
            street: data.companyAddress.street,
            zipcode: data.companyAddress.zipcode
          }
        }
      }
    });
    return result;
  }
  async findById(companyId) {
    const result = await _prisma.prisma.company.findFirst({
      include: {
        companyAddress: true,
        companytype: true
      },
      where: {
        id: companyId,
        active: true
      }
    });
    return result;
  }
}
exports.CompanyRepository = CompanyRepository;