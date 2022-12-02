import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IFabricationRepository } from "@modules/fabrication/repositories/IFabricationRepository";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { IGetTransport } from "@modules/transport/dtos/ITransport";
import { Transport } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { ITransportRepository } from "../../repositories/ITransportRepository";

@injectable()
export class GetTransportUseCase {
  constructor(
    @inject("FabricationRepository")
    private fabricationRepository: IFabricationRepository,

    @inject("ProductionChainRepository")
    private productionChainRepository: IProductionChainRepository,

    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository,

    @inject("TransportRepository")
    private transportRepository: ITransportRepository
  ) {}

  async execute({
    companyId,
    fabricationId,
  }: IGetTransport): Promise<Transport | null> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const fabricationExists = await this.fabricationRepository.findById({
      companyId,
      id: fabricationId,
      productionChainId: undefined,
    });

    if (!fabricationExists) {
      throw new AppError("The specified manufacturer was not found.");
    }

    const transportExists = await this.transportRepository.findById({
      companyId,
      fabricationId,
    });

    if (!transportExists) {
      throw new AppError("The specified transport was not found.");
    }

    return transportExists;
  }
}
