import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListIngredientsUseCase } from "./ListIngredientsUseCase";

export class ListIngredientsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId, limit, order, page, search, sortBy } = request.query;

    const listIngredientsUseCase = container.resolve(ListIngredientsUseCase);

    const result = await listIngredientsUseCase.execute({
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
