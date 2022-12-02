import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateBashDishProductionChainUseCase } from "./UpdateUpdateBashDishProductionChainUseCase";

export class UpdateBashDishProductionChainController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId, dishId, id, productionChainId } = request.body;

    const updateBashDishProductionChainUseCase = container.resolve(
      UpdateBashDishProductionChainUseCase
    );

    const result = await updateBashDishProductionChainUseCase.execute({
      companyId,
      dishId,
      id,
      productionChainId,
    });

    return response.status(200).json(result);
  }
}
