import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IListFoods, IResponseListFoods } from "@modules/food/dtos/IFood";
import { IFoodRepository } from "@modules/food/reposotories/IFoodRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class ListFoodsUseCase {
  constructor(
    @inject("FoodRepository")
    private foodRepository: IFoodRepository,

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
  }: IListFoods): Promise<IResponseListFoods> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const foods = await this.foodRepository.findMany({
      companyId,
      page,
      limit,
      order,
      sortBy,
      search,
    });

    const response: {
      id: string;
      name: string;
      description: string | null;
      type: {
        id: string;
        name: string;
      };
    }[] = [];

    foods[1].forEach((food) => {
      return response.push({
        id: food.id,
        description: food.description || null,
        name: food.name,
        type: {
          id: food.foodtype.id,
          name: food.foodtype.type,
        },
      });
    });

    return { data: response, total: foods[0] };
  }
}
