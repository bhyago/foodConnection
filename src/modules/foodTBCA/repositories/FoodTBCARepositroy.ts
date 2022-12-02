import { FoodTBCA } from "@prisma/client";

import { prisma } from "@shared/infra/prisma";

import { ICreateFoodTBCA } from "../dtos/IFoodTBCA";
import { IFoodTBCARepository } from "./IFoodTBCARepository";

class FoodTBCARepository implements IFoodTBCARepository {
  async create({
    unity,
    valueBy100g,
    foodId,
    componentTBCAId,
  }: ICreateFoodTBCA): Promise<FoodTBCA> {
    const result = await prisma.foodTBCA.create({
      data: {
        componentTBCAId,
        unity,
        valueBy100g,
        foodId,
      },
    });

    return result;
  }

  async findByFoodId(data: {
    companyId: string;
    foodId: string;
  }): Promise<FoodTBCA[]> {
    const result = await prisma.foodTBCA.findMany({
      where: {
        food: {
          id: data.foodId,
          id_company: data.companyId,
        },
      },
    });

    return result;
  }

  async findById(data: {
    companyId: string;
    foodId: string;
    id: string;
  }): Promise<FoodTBCA | null> {
    const result = await prisma.foodTBCA.findFirst({
      where: {
        id: data.id,
        food: {
          id: data.foodId,
          id_company: data.companyId,
        },
      },
    });

    return result;
  }

  async update(data: {
    foodId: string;
    unity: string;
    valueBy100g: number;
    id: string;
    componentTBCAId: string;
  }): Promise<FoodTBCA> {
    const result = await prisma.foodTBCA.update({
      data: {
        foodId: data.foodId,
        componentTBCAId: data.componentTBCAId,
        unity: data.unity,
        valueBy100g: data.valueBy100g,
      },
      where: {
        id: data.id,
      },
    });

    return result;
  }
}

export { FoodTBCARepository };
