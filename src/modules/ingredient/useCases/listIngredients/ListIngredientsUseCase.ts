import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import {
  IListIngredients,
  IResponseIngredient,
} from "@modules/ingredient/dtos/IIngredients";
import { IIngredientRepository } from "@modules/ingredient/repositories/IIngredientRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class ListIngredientsUseCase {
  constructor(
    @inject("IngredientRepository")
    private ingredientRepository: IIngredientRepository,

    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute({
    companyId,
    limit,
    order,
    page,
    sortBy,
    search,
  }: IListIngredients): Promise<{
    data: IResponseIngredient[];
    total: number;
  }> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const ingredients = await this.ingredientRepository.findMany({
      companyId,
      page,
      limit,
      order,
      sortBy,
      search,
    });

    const response: IResponseIngredient[] = [];

    ingredients[1].forEach(({ created_at, description, id, name }) => {
      return response.push({
        description,
        id,
        name,
        registerDate: created_at.toISOString(),
      });
    });

    return {
      data: response,
      total: ingredients[0],
    };
  }
}
