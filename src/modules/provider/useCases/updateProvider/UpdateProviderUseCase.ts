import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IProviderRepository } from "../../repositories/IProviderRepository";

@injectable()
export class UpdateProviderUseCase {
  constructor(
    @inject("ProviderRepository")
    private providerRepository: IProviderRepository
  ) {}

  async execute(data: IUpdateProvider): Promise<{ id: string }> {
    const providerExists = await this.providerRepository.findById(
      data.companyId,
      data.providerId
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
