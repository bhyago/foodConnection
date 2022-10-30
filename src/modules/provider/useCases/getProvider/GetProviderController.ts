import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetProviderUseCase } from "./GetProviderUseCase";

export class GetProviderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { providerId } = request.params;
    const { companyId } = request.query;

    const getProviderUseCase = container.resolve(GetProviderUseCase);

    const result = await getProviderUseCase.execute({
      companyId: String(companyId),
      providerId,
    });

    return response.status(201).json(result);
  }
}
