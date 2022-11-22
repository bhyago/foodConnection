import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductionTypesUseCase } from "./ListProductionTypesUseCase";

export class ListProductionTypesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId, limit, order, page, search, sortBy } = request.query;

    const listProductionTypesUseCase = container.resolve(
      ListProductionTypesUseCase
    );

    const result = await listProductionTypesUseCase.execute({
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
