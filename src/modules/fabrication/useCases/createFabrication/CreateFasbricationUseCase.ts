import { ICreateFabrication } from "@modules/fabrication/dtos/IFabrication";
import { IFabricationRepository } from "@modules/fabrication/repositories/IFabricationRepository";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { Fabrication } from "@prisma/client";
import moment from "moment";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateFabricationUseCase {
  constructor(
    @inject("FabricationRepository")
    private fabricationRepository: IFabricationRepository,

    @inject("ProductionChainRepository")
    private productionChainRepository: IProductionChainRepository
  ) {}

  async execute({
    batch,
    fabricationDate,
    productionChainId,
    validadeDate,
    companyId,
  }: ICreateFabrication): Promise<Fabrication> {
    const productionChainExists = await this.productionChainRepository.findById(
      {
        id: productionChainId,
        companyId,
      }
    );

    if (!productionChainExists) {
      throw new AppError("the informed production chain was not found.");
    }

    if (fabricationDate >= moment().utc().format()) {
      throw new AppError("invalid manufacturing date");
    }

    if (validadeDate <= moment().utc().format()) {
      throw new AppError("invalid expiration date.");
    }

    const response = await this.fabricationRepository.create({
      batch,
      companyId,
      fabricationDate,
      productionChainId,
      validadeDate,
    });

    return response;
  }
}
