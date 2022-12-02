import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProviderUseCase } from "./CreateProviderUseCase";

export class CreateProviderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { active, area, cnpj, name } = request.body;

    const { companyId } = request.query;

    const createProviderUseCase = container.resolve(CreateProviderUseCase);

    const result = await createProviderUseCase.execute({
      companyId: String(companyId),
      active,
      area,
      cnpj,
      name,
    });

    return response.status(201).json(result);
  }
}
