import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteFoodUseCase } from "./DeleteFoodUseCase";

export class DeleteFoodController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { companyId } = request.query;

    const deleteFoodUseCase = container.resolve(DeleteFoodUseCase);

    await deleteFoodUseCase.execute({
      companyId: String(companyId),
      id,
    });

    return response.status(204).end();
  }
}
