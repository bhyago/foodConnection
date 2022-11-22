import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IFoodRepository } from "@modules/food/reposotories/IFoodRepository";
import { ICreateProductionChain } from "@modules/productionChain/dtos/IProductionChain";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { IProductionTypeRepository } from "@modules/productionType/repositories/IProductionType";
import { ProductionChain } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { prisma } from "@shared/infra/prisma";

@injectable()
export class CreateProductionChainUseCase {
  constructor(
    @inject("ProductionChainRepository")
    private productionChainRepository: IProductionChainRepository,
    @inject("FoodRepository")
    private foodRepository: IFoodRepository,
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository,
    @inject("ProductionTypeRepository")
    private productionTypeRepository: IProductionTypeRepository
  ) {}

  async execute({
    companyId,
    description,
    endDateTime,
    foodId,
    ingredientIds,
    productionTypeId,
    providerIds,
    startDateTime,
    name,
    quantity,
  }: ICreateProductionChain): Promise<ProductionChain> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const foodExits = await this.foodRepository.findById({
      companyId,
      id: foodId,
    });

    if (!foodExits) {
      throw new AppError("the reported food was not found.");
    }

    const productionTypeExists = await this.productionTypeRepository.findById(
      companyId,
      productionTypeId
    );

    if (!productionTypeExists) {
      throw new AppError("production type not found.");
    }

    const response = await this.productionChainRepository.create({
      companyId,
      description,
      endDateTime,
      foodId,
      name,
      productionTypeId,
      quantity,
      startDateTime,
    });

    ingredientIds.forEach(async (ingredientId) => {
      await prisma.ingredientProductionChain.create({
        data: {
          productionChainId: response.id,
          ingredientId,
        },
      });
    });

    if (providerIds) {
      providerIds.forEach(async (providerId) => {
        await prisma.providerProductionChain.create({
          data: {
            productionChainId: response.id,
            providerId,
          },
        });
      });
    }

    return response;
  }
}
