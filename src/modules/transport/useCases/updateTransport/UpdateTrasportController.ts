import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateTransportUseCase } from "./UpdateTransportUseCase";

export class UpdateTransportController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      destinyAddress,
      endDateTime,
      fabricationId,
      originAddress,
      startDateTime,
    } = request.body;

    const { companyId } = request.query;

    const updateTransportUseCase = container.resolve(UpdateTransportUseCase);

    const result = await updateTransportUseCase.execute({
      companyId: String(companyId),
      destinyAddress,
      endDateTime,
      fabricationId,
      originAddress,
      startDateTime,
    });

    return response.status(201).json(result);
  }
}
