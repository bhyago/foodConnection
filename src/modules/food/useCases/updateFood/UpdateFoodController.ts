import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateFoodUseCase } from "./UpdateFoodUseCase";

export class UpdateFoodController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { companyId } = request.query;
    const { description, foodTypeId, name } = request.body;

    const updateFoodUseCase = container.resolve(UpdateFoodUseCase);

    await updateFoodUseCase.execute({
      companyId: String(companyId),
      id,
      description,
      foodTypeId,
      name,
    });

    return response.status(201).end();
  }
}
