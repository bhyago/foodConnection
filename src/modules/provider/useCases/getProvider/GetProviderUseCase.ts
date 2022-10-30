import { Provider } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IProviderRepository } from "../../repositories/IProviderRepository";

@injectable()
export class GetProviderUseCase {
  constructor(
    @inject("ProviderRepository")
    private providerRepository: IProviderRepository
  ) {}

  async execute({ companyId, providerId }: IGetProvider): Promise<Provider> {
    const provider = await this.providerRepository.findById(
      providerId,
      companyId
    );

    if (!provider) {
      throw new AppError("Informed provider not found.");
    }

    return provider;
  }
}
