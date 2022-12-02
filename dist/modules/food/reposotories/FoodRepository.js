"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoodRepository = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _prisma = require("@shared/infra/prisma");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class FoodRepository {
  async update(data) {
    const result = await _prisma.prisma.food.update({
      include: {
        foodtype: true
      },
      data: {
        description: data.description,
        id_foodtype: data.foodTypeId,
        name: data.name,
        updated_at: (0, _moment.default)().utc().format()
      },
      where: {
        id: data.id
      }
    });
    return result;
  }
  async delete(data) {
    await _prisma.prisma.food.update({
      data: {
        active: false,
        updated_at: (0, _moment.default)().utc().format()
      },
      where: {
        id: data.id
      }
    });
  }
  async findMany(data) {
    const sortBy = {
      id: "id",
      name: "name"
    }[data.sortBy] || "id";
    const whereObj = {
      active: true,
      id_company: data.companyId
    };
    const result = await _prisma.prisma.$transaction([_prisma.prisma.food.count({
      where: whereObj
    }), _prisma.prisma.food.findMany({
      include: {
        foodtype: true
      },
      where: whereObj,
      take: data.limit || undefined,
      skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined
    })]);
    return result;
  }
  async findByName(data) {
    const result = await _prisma.prisma.food.findFirst({
      where: {
        name: data.name,
        id_company: data.companyId,
        active: true
      }
    });
    return result;
  }
  async findById(data) {
    const result = await _prisma.prisma.food.findFirst({
      include: {
        foodtype: true
      },
      where: {
        id: data.id,
        id_company: data.companyId,
        active: true
      }
    });
    return result;
  }
  async findTypeById(data) {
    const result = await _prisma.prisma.foodType.findFirst({
      where: {
        id: data.foodTypeId
      }
    });
    return result;
  }
  async create(data) {
    const food = await _prisma.prisma.food.create({
      data: {
        active: true,
        name: data.name,
        description: data.description,
        id_foodtype: data.foodTypeId,
        created_at: (0, _moment.default)().utc().format(),
        id_company: data.companyId
      }
    });
    return food;
  }
}
exports.FoodRepository = FoodRepository;