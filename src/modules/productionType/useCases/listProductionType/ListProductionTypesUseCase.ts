import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IResponseListProductionTypes } from "@modules/productionType/dtos/IProductionType";
import {
  IListProductionType,
  IProductionTypeRepository,
} from "@modules/productionType/repositories/IProductionType";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class ListProductionTypesUseCase {
  constructor(
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository,

    @inject("ProductionTypeRepository")
    private productionTypeRepository: IProductionTypeRepository
  ) {}

  async execute({
    companyId,
    limit,
    order,
    page,
    sortBy,
    search,
  }: IListProductionType): Promise<IResponseListProductionTypes> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const productionTypes = await this.productionTypeRepository.findMany({
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
    }[] = [];

    productionTypes[1].forEach((productionType) => {
      return response.push({
        id: productionType.id,
        name: productionType.name,
      });
    });

    return { data: response, total: productionTypes[0] };
  }
}
