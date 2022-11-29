import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IProviderRepository } from "../../repositories/IProviderRepository";

@injectable()
export class UpdateProviderUseCase {
  constructor(
    @inject("ProviderRepository")
    private providerRepository: IProviderRepository,

    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute(data: IUpdateProvider): Promise<{ id: string }> {
    const companyExists = await this.companyRepository.findById(data.companyId);

    console.log(data);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const providerExists = await this.providerRepository.findById(
      data.providerId,
      data.companyId
    );

    if (!providerExists) {
      throw new AppError("the informed provider does not exist.");
    }

    const response = await this.providerRepository.update({
      providerId: data.providerId,
      active: true,
      area: data.area,
      cnpj: data.cnpj,
      companyId: data.companyId,
      name: data.name,
    });

    return { id: response.id };
  }
}
