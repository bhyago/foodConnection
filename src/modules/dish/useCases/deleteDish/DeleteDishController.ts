import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteDishUseCase } from "./DeleteDishUseCase";

export class DeleteDishController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId } = request.query;
    const { id } = request.body;

    const deleteDishUseCase = container.resolve(DeleteDishUseCase);

    const result = await deleteDishUseCase.execute({
      companyId: String(companyId),
      id,
    });

    return response.status(200).json(result);
  }
}
