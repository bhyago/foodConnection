import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IFoodRepository } from "@modules/food/reposotories/IFoodRepository";
import { ICreateProductionChain } from "@modules/productionChain/dtos/IProductionChain";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateProductionChainUseCase {
  constructor(
    @inject("ProductionChainRepository")
    private productionChainRepository: IProductionChainRepository,
    @inject("FoodRepository")
    private foodRepository: IFoodRepository,
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute(data: ICreateProductionChain): Promise<{ id: string }> {
    const companyExists = await this.companyRepository.findById(data.companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const foodExits = await this.foodRepository.findById({
      companyId: data.companyId,
      id: data.foodId,
    });

    if (!foodExits) {
      throw new AppError("the reported food was not found.");
    }
  }
}
