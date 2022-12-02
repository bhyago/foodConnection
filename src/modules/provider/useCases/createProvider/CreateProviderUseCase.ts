import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IProviderRepository } from "../../repositories/IProviderRepository";

@injectable()
export class CreateProviderUseCase {
  constructor(
    @inject("ProviderRepository")
    private providerRepository: IProviderRepository,
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute(data: IProvider): Promise<{ id: string }> {
    const companyExists = await this.companyRepository.findById(data.companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const cnpjAlreadyExists = await this.providerRepository.findByCnpj(
      data.companyId,
      data.cnpj
    );

    if (cnpjAlreadyExists) {
      throw new AppError("CNPJ provided is already used.");
    }

    const response = await this.providerRepository.create({
      active: true,
      area: data.area,
      cnpj: data.cnpj,
      companyId: data.companyId,
      name: data.name,
    });

    return { id: response.id };
  }
}
