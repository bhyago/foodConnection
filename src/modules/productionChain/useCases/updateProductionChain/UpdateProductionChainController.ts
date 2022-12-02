import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductionChainUseCase } from "./UpdateProductionChainUseCase";

export class UpdateProductionChainController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      description,
      name,
      endDateTime,
      foodId,
      ingredientIds,
      productionTypeId,
      providerIds,
      quantity,
      startDateTime,
    } = request.body;

    const { companyId } = request.query;

    const updateProductionChainUseCase = container.resolve(
      UpdateProductionChainUseCase
    );

    const result = await updateProductionChainUseCase.execute({
      companyId: String(companyId),
      id,
      description,
      name,
      endDateTime,
      foodId,
      ingredientIds,
      productionTypeId,
      providerIds,
      quantity,
      startDateTime,
    });

    return response.status(201).json(result);
  }
}
