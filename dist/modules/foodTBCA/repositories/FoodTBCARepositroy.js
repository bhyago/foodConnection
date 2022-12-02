"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoodTBCARepository = void 0;
var _prisma = require("@shared/infra/prisma");
class FoodTBCARepository {
  async create({
    unity,
    valueBy100g,
    foodId,
    componentTBCAId
  }) {
    const result = await _prisma.prisma.foodTBCA.create({
      data: {
        componentTBCAId,
        unity,
        valueBy100g,
        foodId
      }
    });
    return result;
  }
  async findByFoodId(data) {
    const result = await _prisma.prisma.foodTBCA.findMany({
      where: {
        food: {
          id: data.foodId,
          id_company: data.companyId
        }
      }
    });
    return result;
  }
  async findById(data) {
    const result = await _prisma.prisma.foodTBCA.findFirst({
      where: {
        id: data.id,
        food: {
          id: data.foodId,
          id_company: data.companyId
        }
      }
    });
    return result;
  }
  async update(data) {
    const result = await _prisma.prisma.foodTBCA.update({
      data: {
        foodId: data.foodId,
        componentTBCAId: data.componentTBCAId,
        unity: data.unity,
        valueBy100g: data.valueBy100g
      },
      where: {
        id: data.id
      }
    });
    return result;
  }
}
exports.FoodTBCARepository = FoodTBCARepository;