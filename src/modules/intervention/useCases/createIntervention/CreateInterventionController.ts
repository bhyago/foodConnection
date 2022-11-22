import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateInterventionUseCase } from "./CreateInterventionUseCase";

export class CreateInterventionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, endDateTime, startDateTime, productionChainId } =
      request.body;

    const { companyId } = request.query;

    const createInterventionUseCase = container.resolve(
      CreateInterventionUseCase
    );

    const result = await createInterventionUseCase.execute({
      companyId: String(companyId),
      description,
      endDateTime,
      productionChainId,
      startDateTime,
    });

    return response.status(201).json(result);
  }
}
