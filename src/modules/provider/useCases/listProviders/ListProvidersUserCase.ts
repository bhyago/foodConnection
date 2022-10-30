import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { Provider } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IProviderRepository } from "../../repositories/IProviderRepository";

@injectable()
export class ListProvidersUseCase {
  constructor(
    @inject("ProviderRepository")
    private providerRepository: IProviderRepository,

    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute(
    data: IListProviders
  ): Promise<{ data: Provider[]; total: number }> {
    const providers = await this.providerRepository.listProviders(data);

    return {
      total: providers[0],
      data: providers[1],
    };
  }
}
