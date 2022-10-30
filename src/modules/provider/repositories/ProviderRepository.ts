import { IProviderRepository } from "@modules/provider/repositories/IProviderRepository";
import { Provider } from "@prisma/client";
import moment from "moment";

import { prisma } from "@shared/infra/prisma";

export class ProviderRepository implements IProviderRepository {
  async update(data: IUpdateProvider): Promise<Provider> {
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
    sortBy,
    order,
    search,
  }: IListProviders): Promise<[number, Provider[]]> {
    const sortByOptions = {
      id: "id",
      name: "name",
      registerDate: "created_at",
      area: "area",
    }[sortBy];

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
          OR: [
            {
              cnpj: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        },
        take: limit || undefined,
        skip: limit * (page > 0 ? page - 1 : 0) || undefined,
        orderBy: {
          [sortByOptions || "id"]: order || "desc",
        },
      }),
    ]);

    return response;
  }

  async findById(
    companyId: string,
    providerId: string
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
