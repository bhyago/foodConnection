import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetFoodsUseCase } from "./GetFoodUseCase";

export class GetFoodController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { companyId } = request.query;

    const getFoodUseCase = container.resolve(GetFoodsUseCase);

    const result = await getFoodUseCase.execute({
      companyId: String(companyId),
      id,
    });

    return response.status(200).json(result);
  }
}
