import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { Company, CompanyAddress } from "@prisma/client";
import moment from "moment";

import { prisma } from "@shared/infra/prisma";

class CompanyRepository implements ICompanyRepository {
  async findByEmail(companyId: string, email: string): Promise<Company | null> {
    const response = await prisma.company.findFirst({
      where: {
        id: companyId,
        active: true,
        email,
      },
    });
    return response;
  }

  async create(data: ICreateCompany): Promise<Company> {
    const response = await prisma.company.create({
      data: {
        active: true,
        cnpj: data.cnpj,
        email: data.email,
        legalname: data.legalname,
        name: data.name,
        password: data.password,
        phone: data.password,
        type: data.type,
        created_at: moment().utc().format(),
        companyAddress: {
          create: {
            city: data.companyAddress.city,
            complement: data.companyAddress.complement,
            created_at: moment().utc().format(),
            neighborhood: data.companyAddress.neighborhood,
            number: data.companyAddress.number,
            state: data.companyAddress.state,
            street: data.companyAddress.street,
            zipcode: data.companyAddress.zipcode,
          },
        },
      },
    });

    return response;
  }

  async findById(companyId: string): Promise<
    | (Company & {
        companyAddress: CompanyAddress[];
      })
    | null
  > {
    const response = await prisma.company.findFirst({
      include: {
        companyAddress: true,
      },
      where: {
        id: companyId,
        active: true,
      },
    });

    return response;
  }
}

export { CompanyRepository };
