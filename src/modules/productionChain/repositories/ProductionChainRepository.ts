import {
  Fabrication,
  Food,
  IngredientProductionChain,
  Prisma,
  ProductionChain,
  ProductionType,
  ProviderProductionChain,
} from "@prisma/client";
import moment from "moment";

import { prisma } from "@shared/infra/prisma";

import {
  ICreateProductionChain,
  IGetProductionChain,
  IListProductionChain,
  IUpdateProductionChain,
} from "../dtos/IProductionChain";
import { IProductionChainRepository } from "./IProductionChainRepository";

export class ProductionChainRepository implements IProductionChainRepository {
  async findById({ companyId, id }: IGetProductionChain): Promise<any> {
    const result = await prisma.productionChain.findFirst({
      select: {
        id: true,
        name: true,
        description: true,
        endDateTime: true,
        startDateTime: true,
        quantity: true,
        interventions: {
          select: {
            id: true,
            description: true,
            startDateTime: true,
            endDateTime: true,
          },
        },
        Fabrication: {
          select: {
            id: true,
          },
        },
        productiontype: {
          select: {
            id: true,
            name: true,
          },
        },
        food: {
          select: {
            id: true,
            description: true,
            name: true,
            FoodTBCA: {
              select: {
                id: true,
              },
            },
            foodtype: {
              select: {
                id: true,
                type: true,
              },
            },
          },
        },
        ingredientProductionChain: {
          select: {
            ingredient: {
              select: {
                id: true,
                name: true,
                description: true,
                vegan: true,
                ingredientAllergic: {
                  select: {
                    allergic: {
                      select: {
                        id: true,
                        name: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
        providerProductionChain: {
          select: {
            provider: {
              select: {
                id: true,
                name: true,
                area: true,
                cnpj: true,
              },
            },
          },
        },
      },
      where: {
        companyId,
        id,
      },
    });

    return result;
  }

  async listMany(
    data: IListProductionChain
  ): Promise<[number, ProductionChain[]]> {
    const whereObj: Prisma.ProductionChainWhereInput = {
      active: true,
      companyId: data.companyId,
    };

    const result = await prisma.$transaction([
      prisma.productionChain.count({
        where: whereObj,
      }),
      prisma.productionChain.findMany({
        include: {
          Fabrication: true,
          productiontype: true,
          food: true,
          ingredientProductionChain: true,
          providerProductionChain: true,
        },
        where: whereObj,
        take: data.limit || undefined,
        skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined,
      }),
    ]);

    return result;
  }

  async update({
    id,
    description,
    endDateTime,
    foodId,
    name,
    productionTypeId,
    quantity,
    startDateTime,
  }: IUpdateProductionChain): Promise<ProductionChain> {
    const result = await prisma.productionChain.update({
      data: {
        description,
        endDateTime,
        foodId,
        name,
        productionTypeId,
        quantity,
        startDateTime,
      },
      where: {
        id,
      },
    });

    return result;
  }

  async create({
    companyId,
    description,
    endDateTime,
    foodId,
    name,
    productionTypeId,
    quantity,
    startDateTime,
  }: ICreateProductionChain): Promise<ProductionChain> {
    const result = await prisma.productionChain.create({
      data: {
        createdAt: moment().utc().format(),
        active: true,
        startDateTime,
        endDateTime,
        name,
        productionTypeId,
        quantity,
        companyId,
        foodId,
        description,
      },
    });

    return result;
  }
}
