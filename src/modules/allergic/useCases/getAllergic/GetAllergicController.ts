import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllergicUseCase } from "./GetAllergicUseCase";

export class GetAllergicController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getAllergicUseCase = container.resolve(GetAllergicUseCase);

    const result = await getAllergicUseCase.execute(id);

    return response.status(200).json(result);
  }
}
