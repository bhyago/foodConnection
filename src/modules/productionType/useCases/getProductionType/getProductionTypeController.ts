import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetProductionTypeUseCase } from "./getProductionTypeUseCase";

export class GetProductionTypeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { companyId } = request.query;

    const getProductionTypeUseCase = container.resolve(
      GetProductionTypeUseCase
    );

    const result = await getProductionTypeUseCase.execute({
      companyId: String(companyId),
      id,
    });

    return response.status(200).json(result);
  }
}
