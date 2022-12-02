import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import {
  IGetProductionType,
  IResponseGetProductionType,
} from "@modules/productionType/dtos/IProductionType";
import { IProductionTypeRepository } from "@modules/productionType/repositories/IProductionType";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class GetProductionTypeUseCase {
  constructor(
    @inject("ProductionTypeRepository")
    private productionTypeRepository: IProductionTypeRepository,

    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute({
    companyId,
    id,
  }: IGetProductionType): Promise<IResponseGetProductionType> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const foodExits = await this.productionTypeRepository.findById(
      companyId,
      id
    );

    if (!foodExits) {
      throw new AppError("the reported production type was not found.");
    }

    return {
      id: foodExits.id,
      name: foodExits.name,
    };
  }
}
