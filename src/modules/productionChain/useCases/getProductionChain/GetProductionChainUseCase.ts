import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IGetProductionChain } from "@modules/productionChain/dtos/IProductionChain";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { ProductionChain } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class GetProductionChainUseCase {
  constructor(
    @inject("ProductionChainRepository")
    private productionChainRepository: IProductionChainRepository,
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute({
    id,
    companyId,
  }: IGetProductionChain): Promise<ProductionChain> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const productionChainExists = await this.productionChainRepository.findById(
      {
        id,
        companyId,
      }
    );

    if (!productionChainExists) {
      throw new AppError("the informed production chain was not found.");
    }

    return productionChainExists;
  }
}
