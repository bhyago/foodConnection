import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { ICreateIntervention } from "@modules/intervention/dtos/IIntervention";
import { InterventionRepository } from "@modules/intervention/repositories/IIntervetionRepository";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { Intervention } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateInterventionUseCase {
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
    description,
    endDateTime,
    productionChainId,
    startDateTime,
  }: ICreateIntervention): Promise<Intervention> {
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

    const response = await this.interventionRepository.create({
      companyId,
      description,
      endDateTime,
      productionChainId,
      startDateTime,
    });

    return response;
  }
}
