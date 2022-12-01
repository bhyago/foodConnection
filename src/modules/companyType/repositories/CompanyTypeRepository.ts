import { CompanyType } from "@prisma/client";
import moment from "moment";

import { prisma } from "@shared/infra/prisma";

import { IListCompanyTypes } from "../dtos/ICompanyTypes";
import { ICompanyTypeRepository } from "./ICompanyTypeRepository";

export class CompanyTypeRepository implements ICompanyTypeRepository {
  async findMany(data: IListCompanyTypes): Promise<[number, CompanyType[]]> {
    const result = await prisma.$transaction([
      prisma.companyType.count(),
      prisma.companyType.findMany({
        take: data.limit || undefined,
        skip: data.limit * (data.page > 0 ? data.page - 1 : 0) || undefined,
      }),
    ]);

    return result;
  }
  async findById(id: string): Promise<CompanyType | null> {
    const result = await prisma.companyType.findFirst({
      where: {
        id,
      },
    });

    return result;
  }
}
