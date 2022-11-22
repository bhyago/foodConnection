import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IListIntervention } from "@modules/intervention/dtos/IIntervention";
import { InterventionRepository } from "@modules/intervention/repositories/IIntervetionRepository";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { Intervention, prisma } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class ListInterventionUseCase {
  constructor(
    @inject("InterventionRepository")
    private interventionRepository: InterventionRepository,
    @inject("ProductionChainRepository")
    private productionChainRepository: IProductionChainRepository,
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute({
    companyId,
    limit,
    order,
    page,
    productionChainId,
    sortBy,
    search,
  }: IListIntervention): Promise<{ total: number; data: Intervention[] }> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const productionChainExists = await this.productionChainRepository.findById(
      {
        id: productionChainId,
        companyId,
      }
    );

    if (!productionChainExists) {
      throw new AppError("the informed production chain was not found.");
    }

    const interventions = await this.interventionRepository.listMany({
      companyId,
      limit,
      order,
      page,
      productionChainId,
      sortBy,
      search,
    });

    return {
      total: interventions[0],
      data: interventions[1],
    };
  }
}
