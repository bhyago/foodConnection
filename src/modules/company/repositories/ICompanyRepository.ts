import { Company, CompanyAddress } from "@prisma/client";

interface ICompanyRepository {
  create(data: Omit<ICreateCompany, "companyId">): Promise<Company>;
  findByEmail(companyId: string, email: string): Promise<Company | null>;
  findById(companyId: string): Promise<
    | (Company & {
        companyAddress: CompanyAddress[];
      })
    | null
  >;
}

export { ICompanyRepository };
