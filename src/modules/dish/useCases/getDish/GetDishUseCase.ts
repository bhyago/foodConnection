import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IDishRepository } from "@modules/dish/repository/IDishRepository";
import { Dish } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class GetDishUseCase {
  constructor(
    @inject("DishRepository")
    private DishRepository: IDishRepository,

    @inject("CompanyRepository")
    private CompanyRepository: ICompanyRepository
  ) {}

  async execute(data: { id: string; companyId: string }): Promise<Dish | null> {
    const companyExists = await this.CompanyRepository.findById(data.companyId);

    if (!companyExists) {
      throw new AppError("the specified company was not found");
    }

    const dishExists = await this.DishRepository.findById({
      companyId: data.companyId,
      id: data.id,
    });

    if (!dishExists) {
      throw new AppError("the specified dish was not found");
    }

    const response = await this.DishRepository.findById({
      companyId: data.companyId,
      id: data.id,
    });

    return response;
  }
}
