import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import {
  IResponseIngredient,
  IUpdateIngredient,
} from "@modules/ingredient/dtos/IIngredients";
import { IIngredientRepository } from "@modules/ingredient/repositories/IIngredientRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class UpdateIngredientUseCase {
  constructor(
    @inject("IngredientRepository")
    private ingredientRepository: IIngredientRepository,

    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute({
    id,
    companyId,
    description,
    name,
  }: IUpdateIngredient): Promise<IResponseIngredient> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const ingredientExists = await this.ingredientRepository.findById(
      id,
      companyId
    );

    if (!ingredientExists) {
      throw new AppError("the informed ingredient was not found");
    }

    const response = await this.ingredientRepository.update({
      companyId,
      description,
      id,
      name,
    });

    return {
      id: response.id,
      description: response.description,
      name: response.name,
      registerDate: response.created_at.toISOString(),
    };
  }
}
