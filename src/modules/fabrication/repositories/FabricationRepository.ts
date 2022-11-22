import { Fabrication, Food, FoodType, Prisma } from "@prisma/client";
import moment from "moment";

import { prisma } from "@shared/infra/prisma";

import { ICreateFabrication, IGetFabrication } from "../dtos/IFabrication";
import { IFabricationRepository } from "./IFabricationRepository";

export class FabricationRepository implements IFabricationRepository {
  async create({
    fabricationDate,
    batch,
    productionChainId,
    validadeDate,
  }: ICreateFabrication): Promise<Fabrication> {
    const result = await prisma.fabrication.create({
      data: {
        batch,
        fabricationDate,
        validadeDate,
        productionChainId,
      },
    });

    return result;
  }

  async findById({
    companyId,
    id,
    productionChainId,
  }: IGetFabrication): Promise<Fabrication | null> {
    const result = await prisma.fabrication.findFirst({
      where: {
        productionChainId,
        id,
      },
    });

    return result;
  }
}
