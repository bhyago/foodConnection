import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTransportUseCase } from "./CreateTransportUseCase";

export class CreateTransportController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      destinyAddress,
      endDateTime,
      fabricationId,
      originAddress,
      startDateTime,
    } = request.body;

    const { companyId } = request.query;

    const createTransportUseCase = container.resolve(CreateTransportUseCase);

    const result = await createTransportUseCase.execute({
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
