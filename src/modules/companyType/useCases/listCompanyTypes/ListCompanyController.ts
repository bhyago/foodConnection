import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCompanyTypeAUseCase } from "./ListCompanyTypeUseCase";

export class ListCompanyTypeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { limit, order, page, search, sortBy } = request.query;

    const listCompanyTypeAUseCase = container.resolve(ListCompanyTypeAUseCase);

    const result = await listCompanyTypeAUseCase.execute({
      limit: Number(limit),
      order: String(order),
      page: Number(page),
      search: String(search),
      sortBy: String(sortBy),
    });

    return response.status(200).json(result);
  }
}
