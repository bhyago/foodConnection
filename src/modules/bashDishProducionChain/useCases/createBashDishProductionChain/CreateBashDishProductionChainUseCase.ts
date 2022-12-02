import { IBashDishProductionChainRepository } from "@modules/bashDishProducionChain/repository/IBashDishProductionChainRepository";
import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IDishRepository } from "@modules/dish/repository/IDishRepository";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { BashDishProductionChain } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateBashDishProductionChainUseCase {
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
    data: Omit<BashDishProductionChain, "id" | "active">
  ): Promise<BashDishProductionChain> {
    const companyExists = await this.CompanyRepository.findById(data.companyId);

    if (!companyExists) {
      throw new AppError("the specified company was not found");
    }

    if (companyExists.companytype.type !== "restaurant") {
      throw new AppError(
        "the type of company informed is not allowed to register dishes"
      );
    }

    const dishExists = await this.DishRepository.findById({
      companyId: data.companyId,
      id: data.dishId,
    });

    if (!dishExists) {
      throw new AppError("the specified dish was not found");
    }

    // const productionChainExists = await this.ProductionChainRepository.findById(
    //   {
    //     id: data.productionChainId,
    //     companyId: undefined,
    //   }
    // );

    // if (!productionChainExists) {
    //   throw new AppError("the informed production chain was not found.");
    // }

    const response = await this.BashDishProductionRepository.create({
      companyId: data.companyId,
      dishId: data.dishId,
      productionChainId: data.productionChainId,
    });

    return response;
  }
}
