import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetBashDishProductionChainUseCase } from "./GetBashDishProductionChainUseCase";

export class GetBashDishProductionChainController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId } = request.query;
    const { id } = request.params;

    const getBashDishProductionChainController = container.resolve(
      GetBashDishProductionChainUseCase
    );

    const result = await getBashDishProductionChainController.execute({
      companyId: String(companyId),
      id,
    });

    return response.status(200).json(result);
  }
}
