import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateFoodTBCAUseCase } from "./CreateFoodTBCAUseCase";

export class CreateFoodTBCAController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { foodId, unity, valueBy100g } = request.body;

    const { companyId } = request.query;

    const createFoodTBCAUseCase = container.resolve(CreateFoodTBCAUseCase);

    const result = await createFoodTBCAUseCase.execute({
      companyId: String(companyId),
      foodId,
      unity,
      valueBy100g,
    });

    return response.status(201).json(result);
  }
}
