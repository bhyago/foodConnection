import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProviderUseCase } from "./UpdateProviderUseCase";

export class UpdateProviderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { providerId, active, area, cnpj, name } = request.body;
    const { companyId } = request.query;

    const updateProviderUseCase = container.resolve(UpdateProviderUseCase);

    const result = await updateProviderUseCase.execute({
      companyId: String(companyId),
      providerId,
      active,
      area,
      cnpj,
      name,
    });

    return response.status(201).json(result);
  }
}
