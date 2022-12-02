import { IGetFabrication } from "@modules/fabrication/dtos/IFabrication";
import { IFabricationRepository } from "@modules/fabrication/repositories/IFabricationRepository";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { Fabrication } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class GetFabricationUseCase {
  constructor(
    @inject("FabricationRepository")
    private fabricationRepository: IFabricationRepository,

    @inject("ProductionChainRepository")
    private productionChainRepository: IProductionChainRepository
  ) {}

  async execute({
    companyId,
    id,
    productionChainId,
  }: IGetFabrication): Promise<Fabrication | null> {
    const productionChainExists = await this.productionChainRepository.findById(
      {
        id: productionChainId,
        companyId,
      }
    );

    if (!productionChainExists) {
      throw new AppError("the informed production chain was not found.");
    }

    const response = await this.fabricationRepository.findById({
      companyId,
      id,
      productionChainId,
    });

    return response;
  }
}
