import { Company, CompanyAddress, CompanyToken } from "@prisma/client";

import { ICreateCompany, ICreateCompanyTokenDTO } from "../dtos/ICompany";

interface ICompanyRepository {
  deleteRefreshTokenById(companyTokenId: string): Promise<void>;
  findByCompanyIdAndRefreshToken(
    companyId: string,
    refreshToken: string
  ): Promise<CompanyToken | null>;
  createToken({
    companyId,
    expiresDate,
    refreshToken,
  }: ICreateCompanyTokenDTO): Promise<CompanyToken>;
  create(data: Omit<ICreateCompany, "companyId">): Promise<Company>;
  findByEmail(email: string): Promise<Company | null>;
  findById(companyId: string): Promise<
    | (Company & {
        companyAddress: CompanyAddress[];
      })
    | null
  >;
}

export { ICompanyRepository };
