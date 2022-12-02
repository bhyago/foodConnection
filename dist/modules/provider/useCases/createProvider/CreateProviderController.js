"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProviderController = void 0;
var _tsyringe = require("tsyringe");
var _CreateProviderUseCase = require("./CreateProviderUseCase");
class CreateProviderController {
  async handle(request, response) {
    const {
      active,
      area,
      cnpj,
      name
    } = request.body;
    const {
      companyId
    } = request.query;
    const createProviderUseCase = _tsyringe.container.resolve(_CreateProviderUseCase.CreateProviderUseCase);
    const result = await createProviderUseCase.execute({
      companyId: String(companyId),
      active,
      area,
      cnpj,
      name
    });
    return response.status(201).json(result);
  }
}
exports.CreateProviderController = CreateProviderController;