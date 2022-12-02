import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IFabricationRepository } from "@modules/fabrication/repositories/IFabricationRepository";
import { IUpdateTransport } from "@modules/transport/dtos/ITransport";
import { prisma, Transport } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { ITransportRepository } from "../../repositories/ITransportRepository";

@injectable()
export class UpdateTransportUseCase {
  constructor(
    @inject("FabricationRepository")
    private fabricationRepository: IFabricationRepository,

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
  }: IUpdateTransport): Promise<Transport> {
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

    let origin;
    if (origin) {
      origin = `${originAddress.street}, ${originAddress.number}, ${originAddress.complement}, ${originAddress.neighborhood}, ${originAddress.city}, ${originAddress.state}, ${originAddress.zipCode}`;
    }

    let destiny;
    if (destinyAddress) {
      destiny = `${destinyAddress.street}, ${destinyAddress.number}, ${destinyAddress.complement}, ${destinyAddress.neighborhood}, ${destinyAddress.city}, ${destinyAddress.state}, ${destinyAddress.zipCode}`;
    }

    const response = await this.transportRepository.update({
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
