import { IBashDishProductionChainRepository } from "@modules/bashDishProducionChain/repository/IBashDishProductionChainRepository";
import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IDishRepository } from "@modules/dish/repository/IDishRepository";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { BashDishProductionChain } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class UpdateBashDishProductionChainUseCase {
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

  async execute(
    data: Omit<BashDishProductionChain, "active">
  ): Promise<BashDishProductionChain> {
    const companyExists = await this.CompanyRepository.findById(data.companyId);

    if (!companyExists) {
      throw new AppError("the specified company was not found");
    }

    if (companyExists.companytype.type !== "restaurant") {
      throw new AppError("the type of company informed is not allowe");
    }

    const bashDishProductionChainExists =
      await this.BashDishProductionRepository.findById({
        companyId: data.companyId,
        id: data.id,
      });

    if (!bashDishProductionChainExists) {
      throw new AppError("the bash dish production informad not found");
    }

    if (data.dishId) {
      const dishExists = await this.DishRepository.findById({
        companyId: data.companyId,
        id: data.dishId,
      });

      if (!dishExists) {
        throw new AppError("the specified dish was not found");
      }
    }

    const response = await this.BashDishProductionRepository.update({
      id: data.id,
      companyId: data.companyId,
      dishId: data.dishId,
      productionChainId: data.productionChainId,
    });

    return response;
  }
}
