import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProvidersUseCase } from "./ListProvidersUserCase";

export class ListProvidersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId, limit, order, page, search, sortBy } = request.query;

    const listProvidersUseCase = container.resolve(ListProvidersUseCase);

    const result = await listProvidersUseCase.execute({
      companyId: String(companyId),
      limit: Number(limit),
      order: String(order),
      page: Number(page),
      search: String(search),
      sortBy: String(sortBy),
    });

    return response.status(201).json(result);
  }
}
