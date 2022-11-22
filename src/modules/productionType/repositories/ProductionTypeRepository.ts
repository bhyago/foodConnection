import { Prisma, ProductionType } from "@prisma/client";

import { prisma } from "@shared/infra/prisma";

import {
  IListProductionType,
  IProductionTypeRepository,
} from "./IProductionType";

export class ProductionTypeRepository implements IProductionTypeRepository {
  async findById(
    companyId: string,
    id: string
  ): Promise<ProductionType | null> {
    const result = await prisma.productionType.findFirst({
      where: {
        companyId,
        id,
      },
    });

    return result;
  }

  async findMany(
    data: IListProductionType
  ): Promise<[number, ProductionType[]]> {
    const sortBy: string =
      {
        id: "id",
        name: "name",
      }[data.sortBy] || "id";

    const whereObj: Prisma.ProductionTypeWhereInput = {
      companyId: data.companyId,
    };

    const result = await prisma.$transaction([
      prisma.productionType.count({
        where: whereObj,
      }),
      prisma.productionType.findMany({
        where: whereObj,
        take: data.limit || undefined,
        skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined,
      }),
    ]);

    return result;
  }
}
