import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IFabricationRepository } from "@modules/fabrication/repositories/IFabricationRepository";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { ICreateTransport } from "@modules/transport/dtos/ITransport";
import { prisma, Transport } from "@prisma/client";
import moment from "moment";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { ITransportRepository } from "../../repositories/ITransportRepository";

@injectable()
export class CreateTransportUseCase {
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
    destinyAddress,
    endDateTime,
    fabricationId,
    originAddress,
    startDateTime,
  }: ICreateTransport): Promise<Transport> {
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

    const origin = `${originAddress.street}, ${originAddress.number}, ${originAddress.complement}, ${originAddress.neighborhood}, ${originAddress.city}, ${originAddress.state}, ${originAddress.zipCode}`;

    let destiny;
    if (destinyAddress) {
      destiny = `${destinyAddress.street}, ${destinyAddress.number}, ${destinyAddress.complement}, ${destinyAddress.neighborhood}, ${destinyAddress.city}, ${destinyAddress.state}, ${destinyAddress.zipCode}`;
    }

    const response = await this.transportRepository.create({
      companyId,
      destiny,
      endDateTime,
      fabricationId,
      origin,
      startDateTime,
    });

    return response;
  }
}
