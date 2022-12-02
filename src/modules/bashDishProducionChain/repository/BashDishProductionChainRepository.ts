import { BashDishProductionChain } from "@prisma/client";

import { prisma } from "@shared/infra/prisma";

import { IListBashDishProductionChain } from "../dtos/IBashDishProductionChain";
import { IBashDishProductionChainRepository } from "./IBashDishProductionChainRepository";

export class BashDishProductionChainRepository
  implements IBashDishProductionChainRepository
{
  async create(
    data: Omit<BashDishProductionChain, "id">
  ): Promise<BashDishProductionChain> {
    const result = await prisma.bashDishProductionChain.create({
      data: {
        dishId: data.dishId,
        companyId: data.companyId,
        active: true,
        productionChainId: data.productionChainId,
      },
    });

    return result;
  }

  async update(
    data: Omit<BashDishProductionChain, "active">
  ): Promise<BashDishProductionChain> {
    const result = await prisma.bashDishProductionChain.update({
      data: {
        dishId: data.dishId,
        productionChainId: data.productionChainId,
      },
      where: {
        id: data.id,
      },
    });

    return result;
  }

  async delete(data: {
    id: string;
    companyId: string;
  }): Promise<BashDishProductionChain> {
    const result = await prisma.bashDishProductionChain.delete({
      where: {
        id: data.id,
      },
    });

    return result;
  }

  async findById(data: {
    id: string;
    companyId: string;
  }): Promise<BashDishProductionChain | null> {
    const result = await prisma.bashDishProductionChain.findFirst({
      where: {
        id: data.id,
        companyId: data.companyId,
      },
    });

    return result;
  }

  async findMany(
    data: IListBashDishProductionChain
  ): Promise<[number, BashDishProductionChain[]]> {
    const result = await prisma.$transaction([
      prisma.bashDishProductionChain.count({
        where: {
          active: true,
          companyId: data.companyId,
        },
      }),
      prisma.bashDishProductionChain.findMany({
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
