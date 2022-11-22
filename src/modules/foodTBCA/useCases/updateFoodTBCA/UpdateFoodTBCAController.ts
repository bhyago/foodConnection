import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateFoodTBCAUseCase } from "./UpdateFoodTBCAUseCase";

export class UpdateFoodTBCAController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { foodId, unity, valueBy100g } = request.body;

    const { companyId } = request.query;

    const updateFoodTBCAUseCase = container.resolve(UpdateFoodTBCAUseCase);

    const result = await updateFoodTBCAUseCase.execute({
      companyId: String(companyId),
      foodId,
      unity,
      valueBy100g,
    });

    return response.status(201).json(result);
  }
}
