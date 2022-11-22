import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductionChainUseCase } from "./ListProductionChainUseCase";

export class ListProductionChainController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId, limit, order, page, search, sortBy } = request.query;

    const listProductionChainUseCase = container.resolve(
      ListProductionChainUseCase
    );

    const result = await listProductionChainUseCase.execute({
      companyId: String(companyId),
      limit: Number(limit),
      order: String(order),
      page: Number(page),
      search: String(search),
      sortBy: String(sortBy),
    });

    return response.status(200).json(result);
  }
}
