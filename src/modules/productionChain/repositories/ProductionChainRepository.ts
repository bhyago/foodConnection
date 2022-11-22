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
  async findById({ companyId, id }: IGetProductionChain): Promise<
    | (ProductionChain & {
        Fabrication: Fabrication[];
        productiontype: ProductionType;
        food: Food;
        IngredientProductionChain: IngredientProductionChain[];
        ProviderProductionChain: ProviderProductionChain[];
      })
    | null
  > {
    const result = await prisma.productionChain.findFirst({
      include: {
        Fabrication: true,
        productiontype: true,
        food: true,
        IngredientProductionChain: true,
        ProviderProductionChain: true,
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
          IngredientProductionChain: true,
          ProviderProductionChain: true,
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
