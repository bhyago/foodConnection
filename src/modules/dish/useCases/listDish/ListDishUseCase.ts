import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IListDish } from "@modules/dish/dtos/IDish";
import { IDishRepository } from "@modules/dish/repository/IDishRepository";
import { Dish } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class ListDishUseCase {
  constructor(
    @inject("DishRepository")
    private DishRepository: IDishRepository,

    @inject("CompanyRepository")
    private CompanyRepository: ICompanyRepository
  ) {}

  async execute(data: IListDish): Promise<{
    data: Dish[];
    total: number;
  }> {
    const companyExists = await this.CompanyRepository.findById(data.companyId);

    if (!companyExists) {
      throw new AppError("the specified company was not found");
    }

    const response = await this.DishRepository.findMany({
      companyId: data.companyId,
      limit: data.limit,
      order: data.order,
      page: data.page,
      sortBy: data.sortBy,
      search: data.search,
    });

    return {
      total: response[0],
      data: response[1],
    };
  }
}
