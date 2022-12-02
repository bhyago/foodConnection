import { ComponentTBCA } from "@prisma/client";
import moment from "moment";

import { prisma } from "@shared/infra/prisma";

import { IListComponentTBCA } from "../dtos/IComponentTBCA";
import { IComponentTBCARepository } from "./IComponentTBCARepository";

export class ComponentTBCARepository implements IComponentTBCARepository {
  async findMany(data: IListComponentTBCA): Promise<[number, ComponentTBCA[]]> {
    const result = await prisma.$transaction([
      prisma.componentTBCA.count(),
      prisma.componentTBCA.findMany({
        take: data.limit || undefined,
        skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined,
      }),
    ]);

    return result;
  }
  async findById(id: string): Promise<ComponentTBCA | null> {
    const result = await prisma.componentTBCA.findFirst({
      where: {
        id,
      },
    });

    return result;
  }
}
