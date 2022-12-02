"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCompanyController = void 0;
var _tsyringe = require("tsyringe");
var _CreateCompanyUseCase = require("./CreateCompanyUseCase");
class CreateCompanyController {
  async handle(request, response) {
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
      typeId,
      companyAddress
    } = request.body;
    const {
      companyId
    } = request.query;
    const createCarUseCase = _tsyringe.container.resolve(_CreateCompanyUseCase.CreateCompanyUseCase);
    const car = await createCarUseCase.execute({
      companyId: String(companyId),
      typeId,
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
        state: companyAddress.state
      }
    });
    return response.status(201).json(car);
  }
}
exports.CreateCompanyController = CreateCompanyController;