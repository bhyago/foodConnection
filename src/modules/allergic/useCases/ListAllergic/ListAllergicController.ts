import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllergicUseCase } from "./ListAllergicUseCase";

export class ListAllergicController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { limit, order, page, search, sortBy } = request.query;

    const listAllergicUseCase = container.resolve(ListAllergicUseCase);

    const result = await listAllergicUseCase.execute({
      limit: Number(limit),
      order: String(order),
      page: Number(page),
      search: String(search),
      sortBy: String(sortBy),
    });

    return response.status(200).json(result);
  }
}
