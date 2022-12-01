import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateBashDishProductionChainUseCase } from "./CreateBashDishProductionChainUseCase";

export class CreateBashDishProductionChainController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId } = request.query;
    const { dishId, productionChainId } = request.body;

    const createBashDishProductionChainUseCase = container.resolve(
      CreateBashDishProductionChainUseCase
    );

    const result = await createBashDishProductionChainUseCase.execute({
      companyId: String(companyId),
      dishId,
      productionChainId,
    });

    return response.status(201).json(result);
  }
}
