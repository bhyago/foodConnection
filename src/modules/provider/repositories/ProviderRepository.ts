import { IProviderRepository } from "@modules/provider/repositories/IProviderRepository";
import { Provider } from "@prisma/client";
import moment from "moment";

import { prisma } from "@shared/infra/prisma";

export class ProviderRepository implements IProviderRepository {
  async update(data: IUpdateProvider): Promise<Provider> {
    console.log(data);

    const response = await prisma.provider.update({
      data: {
        area: data.area,
        active: data.active,
        cnpj: data.cnpj,
        name: data.name,
        updated_at: moment().utc().format(),
      },
      where: {
        id: data.providerId,
      },
    });

    return response;
  }

  async listProviders({
    companyId,
    limit,
    page,
  }: IListProviders): Promise<[number, Provider[]]> {
    const response = await prisma.$transaction([
      prisma.provider.count({
        where: {
          id_company: companyId,
          active: true,
        },
      }),

      prisma.provider.findMany({
        where: {
          id_company: companyId,
          active: true,
        },
        take: limit || undefined,
        skip: limit * (page > 0 ? page - 1 : 0) || undefined,
      }),
    ]);

    return response;
  }

  async findById(
    providerId: string,
    companyId: string
  ): Promise<Provider | null> {
    const response = await prisma.provider.findFirst({
      where: {
        id: providerId,
        id_company: companyId,
        active: true,
      },
    });

    return response;
  }

  async create(data: IProvider): Promise<Provider> {
    const response = await prisma.provider.create({
      data: {
        active: true,
        cnpj: data.cnpj,
        name: data.name,
        area: data.area,
        id_company: data.companyId,
        created_at: moment().utc().format(),
      },
    });

    return response;
  }

  async findByCnpj(cnpj: string, companyId: string): Promise<Provider | null> {
    const response = await prisma.provider.findFirst({
      where: {
        id_company: companyId,
        active: true,
        cnpj,
      },
    });

    return response;
  }
}
