import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateCompanyUseCase } from "./AuthenticateCompanyUseCase";

export class AuthenticateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateCompanyUseCase = container.resolve(
      AuthenticateCompanyUseCase
    );

    const token = await authenticateCompanyUseCase.execute({
      password,
      email,
    });

    return response.json(token);
  }
}
