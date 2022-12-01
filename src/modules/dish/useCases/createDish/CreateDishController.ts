import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateDishUseCase } from "./CreateDishUseCase";

export class CreateDishController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { companyId } = request.query;
    const { description, name } = request.body;

    const createDishUseCase = container.resolve(CreateDishUseCase);

    const result = await createDishUseCase.execute({
      companyId: String(companyId),
      description,
      name,
    });

    return response.status(200).json(result);
  }
}
