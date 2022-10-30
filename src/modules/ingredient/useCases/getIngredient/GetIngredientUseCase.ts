import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import {
  IGetIngredient,
  IResponseIngredient,
} from "@modules/ingredient/dtos/IIngredients";
import { IIngredientRepository } from "@modules/ingredient/repositories/IIngredientRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class GetIngredientUseCase {
  constructor(
    @inject("IngredientRepository")
    private ingredientRepository: IIngredientRepository,
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute({
    companyId,
    id,
  }: IGetIngredient): Promise<IResponseIngredient> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const ingredientExists = await this.ingredientRepository.findById(
      companyId,
      id
    );

    if (!ingredientExists) {
      throw new AppError("the informed ingredient was not found");
    }

    return {
      id: ingredientExists.id,
      description: ingredientExists.description,
      name: ingredientExists.name,
      registerDate: ingredientExists.created_at.toISOString(),
    };
  }
}
