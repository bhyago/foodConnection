import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListComponentTBCAUseCase } from "./ListComponentTBCAUseCase";

export class ListComponentTBCAController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { limit, order, page, search, sortBy } = request.query;

    const listComponentTBCAUseCase = container.resolve(
      ListComponentTBCAUseCase
    );

    const result = await listComponentTBCAUseCase.execute({
      limit: Number(limit),
      order: String(order),
      page: Number(page),
      search: String(search),
      sortBy: String(sortBy),
    });

    return response.status(200).json(result);
  }
}
