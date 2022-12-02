import { ICompanyTypeRepository } from "@modules/companyType/repositories/ICompanyTypeRepository";
import { CompanyType } from "@prisma/client";
import { inject, injectable } from "tsyringe";

@injectable()
export class GetCompanyTypeUseCase {
  constructor(
    @inject("CompanyTypeRepository")
    private CompanyTypeRepository: ICompanyTypeRepository
  ) {}

  async execute(id: string): Promise<CompanyType | null> {
    const response = await this.CompanyTypeRepository.findById(id);

    return response;
  }
}
