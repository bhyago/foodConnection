import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListFoodsUseCase } from "./ListFoodsUseCase";

export class ListFoodsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId, limit, order, page, search, sortBy } = request.query;

    const listFoodsUseCase = container.resolve(ListFoodsUseCase);

    const result = await listFoodsUseCase.execute({
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
