import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IComponentTBCARepository } from "@modules/componentTBCA/repositories/IComponentTBCARepository";
import { IFoodRepository } from "@modules/food/reposotories/IFoodRepository";
import { IUpdateFoodTBCA } from "@modules/foodTBCA/dtos/IFoodTBCA";
import { IFoodTBCARepository } from "@modules/foodTBCA/repositories/IFoodTBCARepository";
import { FoodTBCA } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class UpdateFoodTBCAUseCase {
  constructor(
    @inject("FoodRepository")
    private foodRepository: IFoodRepository,

    @inject("FoodTBCARepository")
    private foodTBCARepository: IFoodTBCARepository,

    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository,

    @inject("ComponentTBCARepository")
    private componentTBCARepository: IComponentTBCARepository
  ) {}

  async execute({
    companyId,
    foodId,
    unity,
    valueBy100g,
    componentTBCAId,
    id,
  }: IUpdateFoodTBCA): Promise<FoodTBCA> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    console.log(foodId);

    const foodTypeExists = await this.foodRepository.findById({
      id: foodId,
      companyId,
    });

    if (!foodTypeExists) {
      throw new AppError("the food informed does not exist");
    }

    const tbcaExists = await this.foodTBCARepository.findById({
      companyId,
      foodId,
      id,
    });

    if (!tbcaExists) {
      throw new AppError("the table tbca of the food informed was not found.");
    }

    if (componentTBCAId) {
      const componentTBCAExists = await this.componentTBCARepository.findById(
        componentTBCAId
      );

      if (!componentTBCAExists) {
        throw new AppError("the component tbca informed does not exist");
      }
    }

    const response = await this.foodTBCARepository.update({
      foodId,
      unity,
      valueBy100g,
      id,
      componentTBCAId,
    });

    return response;
  }
}
