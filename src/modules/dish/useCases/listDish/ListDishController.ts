import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListDishUseCase } from "./ListDishUseCase";

export class ListDishController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId, limit, order, page, search, sortBy } = request.query;

    const listDishUseCase = container.resolve(ListDishUseCase);

    const result = await listDishUseCase.execute({
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
