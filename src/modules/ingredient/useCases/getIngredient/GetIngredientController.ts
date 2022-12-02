import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetIngredientUseCase } from "./GetIngredientUseCase";

export class GetIngredientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { companyId } = request.query;

    const getIngredientUseCase = container.resolve(GetIngredientUseCase);

    const result = await getIngredientUseCase.execute({
      companyId: String(companyId),
      id,
    });

    return response.status(200).json(result);
  }
}
