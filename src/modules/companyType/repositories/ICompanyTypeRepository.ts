import { CompanyType } from "@prisma/client";

import { IListCompanyTypes } from "../dtos/ICompanyTypes";

interface ICompanyTypeRepository {
  findById(id: string): Promise<CompanyType | null>;
  findMany(data: IListCompanyTypes): Promise<[number, CompanyType[]]>;
}

export { ICompanyTypeRepository };
