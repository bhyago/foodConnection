import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetCompanyTypeUseCase } from "./GetCompanyTypesUseCase";

export class GetCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getCompanyTypeUseCase = container.resolve(GetCompanyTypeUseCase);

    const result = await getCompanyTypeUseCase.execute(id);

    return response.status(200).json(result);
  }
}
