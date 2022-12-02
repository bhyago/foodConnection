import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListBashDishProductionChainUseCase } from "./ListBashDishProductionChainUseCase";

export class ListBashDishProductionChainController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId, limit, order, page, search, sortBy } = request.query;

    const listBashDishProductionChainUseCase = container.resolve(
      ListBashDishProductionChainUseCase
    );

    const result = await listBashDishProductionChainUseCase.execute({
      limit: Number(limit),
      order: String(order),
      page: Number(page),
      search: String(search),
      sortBy: String(sortBy),
      companyId: String(companyId),
    });

    return response.status(200).json(result);
  }
}
