import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateInterventionUseCase } from "./UpdateInterventionUseCase";

export class UpdateInterventionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, endDateTime, startDateTime, productionChainId, id } =
      request.body;

    const { companyId } = request.query;

    const updateInterventionUseCase = container.resolve(
      UpdateInterventionUseCase
    );

    const result = await updateInterventionUseCase.execute({
      companyId: String(companyId),
      id,
      description,
      endDateTime,
      productionChainId,
      startDateTime,
    });

    return response.status(201).json(result);
  }
}
