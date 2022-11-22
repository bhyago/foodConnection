import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetTransportUseCase } from "./GetTransportUseCase";

export class GetTransportController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId } = request.query;
    const { fabricationId } = request.params;

    const getTransportUseCase = container.resolve(GetTransportUseCase);

    const result = await getTransportUseCase.execute({
      companyId: String(companyId),
      fabricationId,
    });

    return response.status(201).json(result);
  }
}
