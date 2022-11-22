import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IFoodRepository } from "@modules/food/reposotories/IFoodRepository";
import { ICreateFoodTBCA } from "@modules/foodTBCA/dtos/IFoodTBCA";
import { IFoodTBCARepository } from "@modules/foodTBCA/repositories/IFoodTBCARepository";
import { FoodTBCA } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateFoodTBCAUseCase {
  constructor(
    @inject("FoodRepository")
    private foodRepository: IFoodRepository,

    @inject("FoodTBCARepository")
    private foodTBCARepository: IFoodTBCARepository,

    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute({
    companyId,
    foodId,
    unity,
    valueBy100g,
  }: ICreateFoodTBCA): Promise<FoodTBCA> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }
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
    });

    if (!tbcaExists) {
      throw new AppError("the table tbca of the food informed was not found.");
    }

    const response = await this.foodTBCARepository.create({
      companyId,
      foodId,
      unity,
      valueBy100g,
    });

    return response;
  }
}
