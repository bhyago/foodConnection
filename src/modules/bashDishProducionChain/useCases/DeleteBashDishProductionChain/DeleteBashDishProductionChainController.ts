import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteBashDishProductionChainUseCase } from "./DeleteBashDishProductionChainUseCase";

export class DeleteBashDishProductionChainController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId } = request.query;
    const { id } = request.params;

    const deleteBashDishProductionChainUseCase = container.resolve(
      DeleteBashDishProductionChainUseCase
    );

    const result = await deleteBashDishProductionChainUseCase.execute({
      companyId: String(companyId),
      id,
    });

    return response.status(204).json(result);
  }
}
