import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateIngredientUseCase } from "./UpdateIngredientUseCase";

export class UpdateIngredientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { companyId } = request.query;
    const { description, name } = request.body;

    const updateIngredientUseCase = container.resolve(UpdateIngredientUseCase);

    const result = await updateIngredientUseCase.execute({
      companyId: String(companyId),
      id,
      description,
      name,
    });

    return response.status(201).json(result);
  }
}