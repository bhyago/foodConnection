import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateFabricationUseCase } from "./CreateFasbricationUseCase";

export class CreateFabricationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { batch, fabricationDate, productionChainId, validadeDate } =
      request.body;

    const { companyId } = request.query;

    const createFabricationUseCase = container.resolve(
      CreateFabricationUseCase
    );

    const result = await createFabricationUseCase.execute({
      companyId: String(companyId),
      batch,
      fabricationDate,
      productionChainId,
      validadeDate,
    });

    return response.status(201).json(result);
  }
}
