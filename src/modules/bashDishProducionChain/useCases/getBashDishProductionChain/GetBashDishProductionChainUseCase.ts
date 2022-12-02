import { IBashDishProductionChainRepository } from "@modules/bashDishProducionChain/repository/IBashDishProductionChainRepository";
import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IDishRepository } from "@modules/dish/repository/IDishRepository";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { BashDishProductionChain } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class GetBashDishProductionChainUseCase {
  constructor(
    @inject("DishRepository")
    private DishRepository: IDishRepository,

    @inject("BashDishProductionRepository")
    private BashDishProductionRepository: IBashDishProductionChainRepository,

    @inject("CompanyRepository")
    private CompanyRepository: ICompanyRepository,

    @inject("ProductionChainRepository")
    private ProductionChainRepository: IProductionChainRepository
  ) {}

  async execute(data: {
    id: string;
    companyId: string;
  }): Promise<BashDishProductionChain | null> {
    const companyExists = await this.CompanyRepository.findById(data.companyId);

    if (!companyExists) {
      throw new AppError("the specified company was not found");
    }

    if (companyExists.companytype.type !== "restaurant") {
      throw new AppError("the type of company informed is not allowed");
    }

    const bashDishProductionChainExists =
      await this.BashDishProductionRepository.findById({
        companyId: data.companyId,
        id: data.id,
      });

    if (!bashDishProductionChainExists) {
      throw new AppError("the bash dish production informad not found");
    }

    const response = await this.BashDishProductionRepository.findById({
      companyId: data.companyId,
      id: data.id,
    });

    return response;
  }
}
