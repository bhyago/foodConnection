import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetFabricationUseCase } from "./GetFabricationUseCase";

export class GetFabricationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { companyId, productionChainId } = request.query;

    const getFabricationUseCase = container.resolve(GetFabricationUseCase);

    const result = await getFabricationUseCase.execute({
      companyId: String(companyId),
      id,
      productionChainId: String(productionChainId),
    });

    return response.status(200).json(result);
  }
}
