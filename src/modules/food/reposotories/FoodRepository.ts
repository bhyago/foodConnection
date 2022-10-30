import { Food, FoodType, Prisma } from "@prisma/client";
import moment from "moment";

import { prisma } from "@shared/infra/prisma";

import { ICreateFood, IListFoods, IUpdateFood } from "../dtos/IFood";
import { IFoodRepository } from "./IFoodRepository";

class FoodRepository implements IFoodRepository {
  async update(data: IUpdateFood): Promise<
    Food & {
      foodtype: FoodType;
    }
  > {
    const result = await prisma.food.update({
      include: { foodtype: true },
      data: {
        description: data.description,
        id_foodtype: data.foodTypeId,
        name: data.name,
        updated_at: moment().utc().format(),
      },
      where: {
        id: data.id,
      },
    });

    return result;
  }

  async delete(data: { id: string; companyId: string }): Promise<void> {
    await prisma.food.update({
      data: {
        active: false,
        updated_at: moment().utc().format(),
      },
      where: {
        id: data.id,
      },
    });
  }

  async findMany(data: IListFoods): Promise<
    [
      number,
      (Food & {
        foodtype: FoodType;
      })[]
    ]
  > {
    const sortBy: string =
      {
        id: "id",
        name: "name",
      }[data.sortBy] || "id";

    const whereObj: Prisma.FoodWhereInput = {
      active: true,
      id_company: data.companyId,
    };

    const result = await prisma.$transaction([
      prisma.food.count({
        where: whereObj,
      }),
      prisma.food.findMany({
        include: {
          foodtype: true,
        },
        where: whereObj,
        take: data.limit || undefined,
        skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined,
        orderBy: {
          [sortBy]: data.order || "desc",
        },
      }),
    ]);

    return result;
  }
  async findByName(data: {
    name: string;
    companyId: string;
  }): Promise<Food | null> {
    const result = await prisma.food.findFirst({
      where: {
        name: data.name,
        id_company: data.companyId,
      },
    });

    return result;
  }
  async findById(data: { id: string; companyId: string }): Promise<
    | (Food & {
        foodtype: FoodType;
      })
    | null
  > {
    const result = await prisma.food.findFirst({
      include: { foodtype: true },
      where: {
        id: data.id,
        id_company: data.companyId,
      },
    });

    return result;
  }

  async findTypeById(data: {
    companyId: string;
    foodTypeId: string;
  }): Promise<FoodType | null> {
    const result = await prisma.foodType.findFirst({
      where: {
        id_company: data.companyId,
        id: data.foodTypeId,
      },
    });

    return result;
  }

  async create(data: ICreateFood): Promise<Food> {
    const food = await prisma.food.create({
      data: {
        active: true,
        name: data.name,
        description: data.description,
        id_foodtype: data.foodTypeId,
        created_at: moment().utc().format(),
        id_company: data.companyId,
      },
    });

    return food;
  }
}

export { FoodRepository };
