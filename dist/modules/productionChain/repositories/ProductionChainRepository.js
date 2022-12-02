"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductionChainRepository = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _prisma = require("@shared/infra/prisma");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProductionChainRepository {
  async findById({
    companyId,
    id
  }) {
    const result = await _prisma.prisma.productionChain.findFirst({
      select: {
        id: true,
        name: true,
        description: true,
        endDateTime: true,
        startDateTime: true,
        quantity: true,
        interventions: {
          select: {
            id: true,
            description: true,
            startDateTime: true,
            endDateTime: true
          }
        },
        Fabrication: {
          select: {
            id: true
          }
        },
        productiontype: {
          select: {
            id: true,
            name: true
          }
        },
        food: {
          select: {
            id: true,
            description: true,
            name: true,
            FoodTBCA: {
              select: {
                id: true
              }
            },
            foodtype: {
              select: {
                id: true,
                type: true
              }
            }
          }
        },
        ingredientProductionChain: {
          select: {
            ingredient: {
              select: {
                id: true,
                name: true,
                description: true,
                vegan: true,
                ingredientAllergic: {
                  select: {
                    allergic: {
                      select: {
                        id: true,
                        name: true
                      }
                    }
                  }
                }
              }
            }
          }
        },
        providerProductionChain: {
          select: {
            provider: {
              select: {
                id: true,
                name: true,
                area: true,
                cnpj: true
              }
            }
          }
        }
      },
      where: {
        companyId,
        id
      }
    });
    return result;
  }
  async listMany(data) {
    const whereObj = {
      active: true,
      companyId: data.companyId
    };
    const result = await _prisma.prisma.$transaction([_prisma.prisma.productionChain.count({
      where: whereObj
    }), _prisma.prisma.productionChain.findMany({
      include: {
        Fabrication: true,
        productiontype: true,
        food: true,
        ingredientProductionChain: true,
        providerProductionChain: true
      },
      where: whereObj,
      take: data.limit || undefined,
      skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined
    })]);
    return result;
  }
  async update({
    id,
    description,
    endDateTime,
    foodId,
    name,
    productionTypeId,
    quantity,
    startDateTime
  }) {
    const result = await _prisma.prisma.productionChain.update({
      data: {
        description,
        endDateTime,
        foodId,
        name,
        productionTypeId,
        quantity,
        startDateTime
      },
      where: {
        id
      }
    });
    return result;
  }
  async create({
    companyId,
    description,
    endDateTime,
    foodId,
    name,
    productionTypeId,
    quantity,
    startDateTime
  }) {
    const result = await _prisma.prisma.productionChain.create({
      data: {
        createdAt: (0, _moment.default)().utc().format(),
        active: true,
        startDateTime,
        endDateTime,
        name,
        productionTypeId,
        quantity,
        companyId,
        foodId,
        description
      }
    });
    return result;
  }
}
exports.ProductionChainRepository = ProductionChainRepository;