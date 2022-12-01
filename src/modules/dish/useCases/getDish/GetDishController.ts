import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetDishUseCase } from "./GetDishUseCase";

export class GetDishController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId } = request.query;
    const { id } = request.body;

    const getDishUseCase = container.resolve(GetDishUseCase);

    const result = await getDishUseCase.execute({
      companyId: String(companyId),
      id,
    });

    return response.status(200).json(result);
  }
}
