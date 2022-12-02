import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IDishRepository } from "@modules/dish/repository/IDishRepository";
import { Dish } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateDishUseCase {
  constructor(
    @inject("DishRepository")
    private DishRepository: IDishRepository,

    @inject("CompanyRepository")
    private CompanyRepository: ICompanyRepository
  ) {}

  async execute(data: Omit<Dish, "id" | "active">): Promise<Dish> {
    const companyExists = await this.CompanyRepository.findById(data.companyId);

    if (!companyExists) {
      throw new AppError("the specified company was not found");
    }

    if (companyExists.companytype.type !== "restaurant") {
      throw new AppError(
        "the type of company informed is not allowed to register dishes"
      );
    }

    const response = await this.DishRepository.create({
      active: true,
      companyId: data.companyId,
      description: data.description,
      name: data.name,
    });

    return response;
  }
}
