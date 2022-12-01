import { Dish } from "@prisma/client";

import { prisma } from "@shared/infra/prisma";

import { IListDish } from "../dtos/IDish";
import { IDishRepository } from "./IDishRepository";

export class DishRepository implements IDishRepository {
  async create(data: Omit<Dish, "id">): Promise<Dish> {
    const result = await prisma.dish.create({
      data: {
        companyId: data.companyId,
        active: true,
        description: data.description,
        name: data.name,
      },
    });

    return result;
  }

  async update(data: Dish): Promise<Dish> {
    const result = await prisma.dish.update({
      data: {
        companyId: data.companyId,
        description: data.description,
        name: data.name,
      },
      where: {
        id: data.id,
      },
    });

    return result;
  }

  async delete(data: { id: string; companyId: string }): Promise<Dish> {
    const result = await prisma.dish.update({
      data: {
        active: false,
      },
      where: {
        id: data.id,
      },
    });

    return result;
  }

  async findById(data: {
    id: string;
    companyId: string;
  }): Promise<Dish | null> {
    const result = await prisma.dish.findFirst({
      where: {
        active: true,
        companyId: data.companyId,
        id: data.id,
      },
    });

    return result;
  }

  async findMany(data: IListDish): Promise<[number, Dish[]]> {
    const result = await prisma.$transaction([
      prisma.dish.count({
        where: {
          active: true,
          companyId: data.companyId,
        },
      }),
      prisma.dish.findMany({
        where: {
          active: true,
          companyId: data.companyId,
        },
        take: data.limit || undefined,
        skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined,
      }),
    ]);

    return result;
  }
}
