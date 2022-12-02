"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetProviderController = void 0;
var _tsyringe = require("tsyringe");
var _GetProviderUseCase = require("./GetProviderUseCase");
class GetProviderController {
  async handle(request, response) {
    const {
      providerId
    } = request.params;
    const {
      companyId
    } = request.query;
    const getProviderUseCase = _tsyringe.container.resolve(_GetProviderUseCase.GetProviderUseCase);
    const result = await getProviderUseCase.execute({
      companyId: String(companyId),
      providerId
    });
    return response.status(201).json(result);
  }
}
exports.GetProviderController = GetProviderController;