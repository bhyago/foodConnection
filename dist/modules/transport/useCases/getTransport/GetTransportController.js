"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetTransportController = void 0;
var _tsyringe = require("tsyringe");
var _GetTransportUseCase = require("./GetTransportUseCase");
class GetTransportController {
  async handle(request, response) {
    const {
      companyId
    } = request.query;
    const {
      fabricationId
    } = request.params;
    const getTransportUseCase = _tsyringe.container.resolve(_GetTransportUseCase.GetTransportUseCase);
    const result = await getTransportUseCase.execute({
      companyId: String(companyId),
      fabricationId
    });
    return response.status(201).json(result);
  }
}
exports.GetTransportController = GetTransportController;