import { Food, FoodTBCA, FoodType, Prisma } from "@prisma/client";
import moment from "moment";

import { prisma } from "@shared/infra/prisma";

import { ICreateFoodTBCA, IUpdateFoodTBCA } from "../dtos/IFoodTBCA";
import { IFoodTBCARepository } from "./IFoodTBCARepository";

class FoodTBCARepository implements IFoodTBCARepository {
  async create({
    unity,
    valueBy100g,
    foodId,
  }: ICreateFoodTBCA): Promise<FoodTBCA> {
    const result = await prisma.foodTBCA.create({
      data: {
        unity,
        valueBy100g,
        foodId,
      },
    });

    return result;
  }

  async findById(data: {
    companyId: string;
    foodId: string;
  }): Promise<FoodTBCA | null> {
    const result = await prisma.foodTBCA.findFirst({
      where: {
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
  }): Promise<FoodTBCA> {
    const result = await prisma.foodTBCA.update({
      data: {
        foodId: data.foodId,
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
