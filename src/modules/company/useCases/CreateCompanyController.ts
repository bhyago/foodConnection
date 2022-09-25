import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

class CreateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      legalname,
      description,
      logo,
      cnpj,
      type,
      password,
      email,
      phone,
      companyAddress,
    } = request.body;

    const { companyId } = request.query;

    const createCarUseCase = container.resolve(CreateCompanyUseCase);

    const car = await createCarUseCase.execute({
      companyId: String(companyId),
      name,
      legalname,
      description,
      logo,
      cnpj,
      type,
      password,
      email,
      phone,
      companyAddress: {
        zipcode: companyAddress.zipcode,
        street: companyAddress.street,
        number: companyAddress.number,
        complement: companyAddress.complement,
        neighborhood: companyAddress.neighborhood,
        city: companyAddress.city,
        state: companyAddress.state,
      },
    });

    return response.status(201).json(car);
  }
}

export { CreateCompanyController };
