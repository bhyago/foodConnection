import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import {
  Company,
  CompanyAddress,
  CompanyToken,
  CompanyType,
} from "@prisma/client";
import { hash } from "bcrypt";
import moment from "moment";

import { prisma } from "@shared/infra/prisma";

import { ICreateCompany, ICreateCompanyTokenDTO } from "../dtos/ICompany";

class CompanyRepository implements ICompanyRepository {
  async deleteRefreshTokenById(companyTokenId: string): Promise<void> {
    await prisma.companyToken.delete({
      where: {
        id: companyTokenId,
      },
    });
  }
  async findByCompanyIdAndRefreshToken(
    companyId: string,
    refreshToken: string
  ): Promise<CompanyToken | null> {
    const result = await prisma.companyToken.findFirst({
      where: {
        companyId,
        refreshToken,
      },
    });

    return result;
  }
  async createToken({
    companyId,
    expiresDate,
    refreshToken,
  }: ICreateCompanyTokenDTO): Promise<CompanyToken> {
    const result = await prisma.companyToken.create({
      data: {
        expiresDate,
        refreshToken,
        companyId,
      },
    });

    return result;
  }
  async findByEmail(email: string): Promise<Company | null> {
    const result = await prisma.company.findFirst({
      where: {
        active: true,
        email,
      },
    });
    return result;
  }

  async create(data: ICreateCompany): Promise<Company> {
    const result = await prisma.company.create({
      data: {
        name: data.name,
        email: data.email,
        typeId: data.typeId,
        password: data.password,
        cnpj: data.cnpj,
        descriptiom: data.description,
        legalname: data.legalname,
        logo: data.logo,
        phone: data.phone,
        active: true,
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

    return result;
  }

  async findById(companyId: string): Promise<
    | (Company & {
        companyAddress: CompanyAddress[];
        companytype: CompanyType;
      })
    | null
  > {
    const result = await prisma.company.findFirst({
      include: {
        companyAddress: true,
        companytype: true,
      },
      where: {
        id: companyId,
        active: true,
      },
    });

    return result;
  }
}

export { CompanyRepository };
