import { Ingredient, Prisma } from "@prisma/client";
import moment from "moment";

import { prisma } from "@shared/infra/prisma";

import {
  ICreateIngredient,
  IListIngredients,
  IUpdateIngredient,
} from "../dtos/IIngredients";
import { IIngredientRepository } from "./IIngredientRepository";

export class IngredientRepository implements IIngredientRepository {
  async update(data: IUpdateIngredient): Promise<Ingredient> {
    const result = await prisma.ingredient.update({
      data: {
        name: data.name,
        description: data.description,
      },
      where: {
        id: data.id,
      },
    });

    return result;
  }

  async create({
    description,
    name,
    companyId,
  }: ICreateIngredient): Promise<Ingredient> {
    const result = await prisma.ingredient.create({
      data: {
        name,
        description,
        id_company: companyId,
        created_at: moment().utc().format(),
      },
    });

    return result;
  }

  async findById(id: string, companyId: string): Promise<Ingredient | null> {
    const result = await prisma.ingredient.findFirst({
      where: {
        id,
        id_company: companyId,
      },
    });
    return result;
  }

  async findMany(data: IListIngredients): Promise<[number, Ingredient[]]> {
    const sortBy: string =
      {
        id: "id",
        name: "name",
      }[data.sortBy] || "id";

    const whereObj: Prisma.IngredientWhereInput = {
      id_company: data.companyId,
    };

    const result = await prisma.$transaction([
      prisma.ingredient.count({
        where: whereObj,
      }),
      prisma.ingredient.findMany({
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
}
