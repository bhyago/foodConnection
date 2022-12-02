import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IListProductionChain } from "@modules/productionChain/dtos/IProductionChain";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { ProductionChain } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class ListProductionChainUseCase {
  constructor(
    @inject("ProductionChainRepository")
    private productionChainRepository: IProductionChainRepository,
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute({
    companyId,
    limit,
    order,
    page,
    sortBy,
    search,
  }: IListProductionChain): Promise<{
    total: number;
    data: ProductionChain[];
  }> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const productionChain = await this.productionChainRepository.listMany({
      companyId,
      limit,
      order,
      page,
      sortBy,
      search,
    });

    return { total: productionChain[0], data: productionChain[1] };
  }
}
