import { IAllergicRepository } from "@modules/allergic/repository/IAllergicRepository";
import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import {
  ICreateIngredient,
  IResponseIngredient,
} from "@modules/ingredient/dtos/IIngredients";
import { IIngredientRepository } from "@modules/ingredient/repositories/IIngredientRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateIngredientUseCase {
  constructor(
    @inject("IngredientRepository")
    private ingredientRepository: IIngredientRepository,

    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute({
    companyId,
    description,
    name,
    allergicIds,
    vegan,
  }: ICreateIngredient): Promise<Omit<IResponseIngredient, "allergic">> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const response = await this.ingredientRepository.create({
      companyId,
      description,
      name,
      allergicIds,
      vegan,
    });

    return {
      id: response.id,
      description: response.description,
      name: response.name,
      vegan: response.vegan,
      registerDate: response.created_at.toISOString(),
    };
  }
}
