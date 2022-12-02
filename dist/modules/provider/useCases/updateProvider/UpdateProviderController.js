"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateProviderController = void 0;
var _tsyringe = require("tsyringe");
var _UpdateProviderUseCase = require("./UpdateProviderUseCase");
class UpdateProviderController {
  async handle(request, response) {
    const {
      active,
      area,
      cnpj,
      name
    } = request.body;
    const {
      providerId
    } = request.params;
    const {
      companyId
    } = request.query;
    const updateProviderUseCase = _tsyringe.container.resolve(_UpdateProviderUseCase.UpdateProviderUseCase);
    console.log(providerId);
    const result = await updateProviderUseCase.execute({
      companyId: String(companyId),
      providerId,
      active,
      area,
      cnpj,
      name
    });
    return response.status(201).json(result);
  }
}
exports.UpdateProviderController = UpdateProviderController;