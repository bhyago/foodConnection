import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductionChainUseCase } from "./CreateProductionChainUseCase";

export class CreateProductionChainController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
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

    const createProductionChainUseCase = container.resolve(
      CreateProductionChainUseCase
    );

    const result = await createProductionChainUseCase.execute({
      companyId: String(companyId),
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
