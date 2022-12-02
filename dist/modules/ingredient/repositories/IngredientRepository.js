"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IngredientRepository = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _prisma = require("@shared/infra/prisma");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class IngredientRepository {
  async update(data) {
    const result = await _prisma.prisma.ingredient.update({
      data: {
        name: data.name,
        description: data.description,
        vegan: data.vegan,
        updated_at: (0, _moment.default)().utc().format()
      },
      where: {
        id: data.id
      }
    });
    return result;
  }
  async create({
    description,
    name,
    vegan,
    companyId,
    allergicIds
  }) {
    const result = await _prisma.prisma.ingredient.create({
      data: {
        name,
        description,
        vegan,
        id_company: companyId,
        created_at: (0, _moment.default)().utc().format()
      }
    });
    if (allergicIds) {
      allergicIds.forEach(async id => {
        await _prisma.prisma.ingredientAllergic.create({
          data: {
            ingredientId: result.id,
            allergicId: id
          }
        });
      });
    }
    return result;
  }
  async findById(id, companyId) {
    const result = await _prisma.prisma.ingredient.findFirst({
      include: {
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
      },
      where: {
        id,
        id_company: companyId
      }
    });
    return result;
  }
  async findMany(data) {
    const sortBy = {
      id: "id",
      name: "name"
    }[data.sortBy] || "id";
    const whereObj = {
      id_company: data.companyId
    };
    const result = await _prisma.prisma.$transaction([_prisma.prisma.ingredient.count({
      where: whereObj
    }), _prisma.prisma.ingredient.findMany({
      include: {
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
      },
      where: whereObj,
      take: data.limit || undefined,
      skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined
    })]);
    return result;
  }
}
exports.IngredientRepository = IngredientRepository;