import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IUpdateIntervention } from "@modules/intervention/dtos/IIntervention";
import { InterventionRepository } from "@modules/intervention/repositories/IIntervetionRepository";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { Intervention, prisma } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class UpdateInterventionUseCase {
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
    id,
  }: IUpdateIntervention): Promise<Intervention> {
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

    const interventionExists = await this.interventionRepository.listById({
      companyId,
      id,
      productionChainId,
    });

    if (!interventionExists) {
      throw new AppError("intervention not found..");
    }

    const response = await this.interventionRepository.update({
      id,
      companyId,
      description,
      endDateTime,
      productionChainId,
      startDateTime,
    });

    return response;
  }
}
