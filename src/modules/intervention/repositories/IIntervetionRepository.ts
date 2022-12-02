import { Intervention, Prisma } from "@prisma/client";
import moment from "moment";

import { prisma } from "@shared/infra/prisma";

import {
  ICreateIntervention,
  IGetIntervention,
  IListIntervention,
  IUpdateIntervention,
} from "../dtos/IIntervention";
import { IInterventionChainRepository } from "./IntervetionRepository";

export class InterventionRepository implements IInterventionChainRepository {
  async create({
    companyId,
    description,
    endDateTime,
    productionChainId,
    startDateTime,
  }: ICreateIntervention): Promise<Intervention> {
    const result = await prisma.intervention.create({
      data: {
        description,
        endDateTime,
        startDateTime,
        productionChainId,
      },
    });

    return result;
  }
  async update({
    companyId,
    description,
    endDateTime,
    id,
    productionChainId,
    startDateTime,
  }: IUpdateIntervention): Promise<Intervention> {
    const result = await prisma.intervention.update({
      data: {
        description,
        endDateTime,
        productionChainId,
        startDateTime,
      },
      where: {
        id,
      },
    });

    return result;
  }
  async listById({
    companyId,
    id,
    productionChainId,
  }: IGetIntervention): Promise<Intervention | null> {
    const result = await prisma.intervention.findFirst({
      where: {
        id,
        productionChainId,
      },
    });

    return result;
  }
  async listMany({
    companyId,
    limit,
    order,
    page,
    productionChainId,
    sortBy,
    search,
  }: IListIntervention): Promise<[number, Intervention[]]> {
    const whereObj: Prisma.InterventionWhereInput = {
      productionChainId,
    };

    const result = await prisma.$transaction([
      prisma.intervention.count({
        where: whereObj,
      }),
      prisma.intervention.findMany({
        where: whereObj,
        take: limit || undefined,
        skip: limit * (page > 0 ? page - 1 : 0) || undefined,
        orderBy: { id: "desc" },
      }),
    ]);

    return result;
  }
}
