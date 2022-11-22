import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateIngredientUseCase } from "./CreateIngredientUseCase";

export class CreateIngredientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, name, allergicIds } = request.body;

    const { companyId } = request.query;

    const createIngredientUseCase = container.resolve(CreateIngredientUseCase);

    const result = await createIngredientUseCase.execute({
      companyId: String(companyId),
      description,
      name,
      allergicIds,
    });

    return response.status(201).json(result);
  }
}
