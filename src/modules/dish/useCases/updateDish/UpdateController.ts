import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateDishUseCase } from "./UpdateUseCase";

export class UpdateDishController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId } = request.query;
    const { description, id, name } = request.body;

    const updateDishUseCase = container.resolve(UpdateDishUseCase);

    const result = await updateDishUseCase.execute({
      companyId: String(companyId),
      description,
      id,
      name,
    });

    return response.status(201).json(result);
  }
}
