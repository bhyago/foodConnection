import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateFoodUseCase } from "./CreateFoodUseCase";

export class CreateFoodController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, foodTypeId, name, id } = request.body;

    const { companyId } = request.query;

    const createFoodUseCase = container.resolve(CreateFoodUseCase);

    const result = await createFoodUseCase.execute({
      companyId: String(companyId),
      description,
      foodTypeId,
      name,
      id,
    });

    return response.status(201).json(result);
  }
}
