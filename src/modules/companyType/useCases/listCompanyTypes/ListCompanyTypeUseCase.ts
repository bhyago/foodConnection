import { IListAllergic } from "@modules/allergic/dtos/IAllergic";
import { IListCompanyTypes } from "@modules/companyType/dtos/ICompanyTypes";
import { ICompanyTypeRepository } from "@modules/companyType/repositories/ICompanyTypeRepository";
import { CompanyType } from "@prisma/client";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListCompanyTypeAUseCase {
  constructor(
    @inject("CompanyTypeRepository")
    private CompanyTypeRepository: ICompanyTypeRepository
  ) {}

  async execute({
    page,
    limit,
    order,
    sortBy,
    search,
  }: IListCompanyTypes): Promise<{
    data: CompanyType[];
    total: number;
  }> {
    const companyTypes = await this.CompanyTypeRepository.findMany({
      page,
      limit,
      order,
      sortBy,
      search,
    });

    return {
      data: companyTypes[1],
      total: companyTypes[0],
    };
  }
}
