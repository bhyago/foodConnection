import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetInterventionUseCase } from "./GetInterventionsUseCase";

export class GetInterventionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { companyId, productionChainId } = request.query;

    const getInterventionUseCase = container.resolve(GetInterventionUseCase);

    const result = await getInterventionUseCase.execute({
      companyId: String(companyId),
      productionChainId: String(productionChainId),
      id,
    });

    return response.status(200).json(result);
  }
}
