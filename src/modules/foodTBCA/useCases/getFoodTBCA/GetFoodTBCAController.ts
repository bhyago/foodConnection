import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetFoodTBCAUseCase } from "./GetFoodTBCAUseCase";

export class GetFoodTBCAController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { foodId } = request.params;

    const { companyId } = request.query;

    const getFoodTBCAUseCase = container.resolve(GetFoodTBCAUseCase);

    const result = await getFoodTBCAUseCase.execute({
      companyId: String(companyId),
      foodId,
    });

    return response.status(200).json(result);
  }
}
