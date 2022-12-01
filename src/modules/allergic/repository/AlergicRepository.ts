import { Allergic, Ingredient, Prisma } from "@prisma/client";
import moment from "moment";

import { prisma } from "@shared/infra/prisma";

import { IListAllergic } from "../dtos/IAllergic";
import { IAllergicRepository } from "./IAllergicRepository";

export class AllergicRepository implements IAllergicRepository {
  async findById(id: string): Promise<Allergic | null> {
    const result = await prisma.allergic.findFirst({
      where: {
        id,
      },
    });

    return result;
  }

  async findMany(data: IListAllergic): Promise<[number, Allergic[]]> {
    const result = await prisma.$transaction([
      prisma.allergic.count(),
      prisma.allergic.findMany({
        take: data.limit || undefined,
        skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined,
      }),
    ]);

    return result;
  }
}
