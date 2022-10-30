import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { ICreateFood } from "@modules/food/dtos/IFood";
import { IFoodRepository } from "@modules/food/reposotories/IFoodRepository";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateFoodUseCase {
  constructor(
    @inject("FoodRepository")
    private foodRepository: IFoodRepository,

    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute({
    companyId,
    description,
    foodTypeId,
    name,
    id,
  }: ICreateFood): Promise<{ id: string }> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }
    const foodTypeExists = await this.foodRepository.findTypeById({
      foodTypeId,
      companyId,
    });

    if (!foodTypeExists) {
      throw new AppError("the type of food informed does not exist");
    }
    const foodNameAlreadyExists = await this.foodRepository.findByName({
      companyId,
      name,
    });

    if (foodNameAlreadyExists) {
      throw new AppError("the informed food already exists.");
    }

    const response = await this.foodRepository.create({
      id,
      companyId,
      description,
      foodTypeId,
      name,
    });

    return { id: response.id };
  }
}
