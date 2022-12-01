import { IListBashDishProductionChain } from "@modules/bashDishProducionChain/dtos/IBashDishProductionChain";
import { IBashDishProductionChainRepository } from "@modules/bashDishProducionChain/repository/IBashDishProductionChainRepository";
import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IDishRepository } from "@modules/dish/repository/IDishRepository";
import { BashDishProductionChain } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class ListBashDishProductionChainUseCase {
  constructor(
    @inject("DishRepository")
    private DishRepository: IDishRepository,

    @inject("BashDishProductionRepository")
    private BashDishProductionRepository: IBashDishProductionChainRepository,

    @inject("CompanyRepository")
    private CompanyRepository: ICompanyRepository
  ) {}

  async execute(data: IListBashDishProductionChain): Promise<{
    data: BashDishProductionChain[];
    total: number;
  }> {
    const companyExists = await this.CompanyRepository.findById(data.companyId);

    if (!companyExists) {
      throw new AppError("the specified company was not found");
    }

    if (companyExists.companytype.type !== "restaurant") {
      throw new AppError("the type of company informed is not allowed");
    }

    const response = await this.BashDishProductionRepository.findMany({
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
