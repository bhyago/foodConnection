import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetComponentTBCAUseCase } from "./GetComponentTBCAUseCase";

export class GetComponentTBCAController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getComponentTBCAUseCase = container.resolve(GetComponentTBCAUseCase);

    const result = await getComponentTBCAUseCase.execute(id);

    return response.status(200).json(result);
  }
}
