import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetProductionChainUseCase } from "./GetProductionChainUseCase";

export class GetProductionChainController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { companyId } = request.query;

    const getProductionChainUseCase = container.resolve(
      GetProductionChainUseCase
    );

    const result = await getProductionChainUseCase.execute({
      companyId: String(companyId),
      id,
    });

    return response.status(200).json(result);
  }
}
