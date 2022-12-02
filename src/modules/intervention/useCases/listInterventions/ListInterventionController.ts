import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListInterventionUseCase } from "./ListInterventionUseCase";

export class ListInterventionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId, limit, order, page, search, sortBy, productionChainId } =
      request.query;

    const listInterventionUseCase = container.resolve(ListInterventionUseCase);

    const result = await listInterventionUseCase.execute({
      companyId: String(companyId),
      productionChainId: String(productionChainId),
      limit: Number(limit),
      order: String(order),
      page: Number(page),
      search: String(search),
      sortBy: String(sortBy),
    });

    return response.status(200).json(result);
  }
}
