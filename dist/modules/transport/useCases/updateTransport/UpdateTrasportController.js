"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateTransportController = void 0;
var _tsyringe = require("tsyringe");
var _UpdateTransportUseCase = require("./UpdateTransportUseCase");
class UpdateTransportController {
  async handle(request, response) {
    const {
      destinyAddress,
      endDateTime,
      fabricationId,
      originAddress,
      startDateTime
    } = request.body;
    const {
      companyId
    } = request.query;
    const updateTransportUseCase = _tsyringe.container.resolve(_UpdateTransportUseCase.UpdateTransportUseCase);
    const result = await updateTransportUseCase.execute({
      companyId: String(companyId),
      destinyAddress,
      endDateTime,
      fabricationId,
      originAddress,
      startDateTime
    });
    return response.status(201).json(result);
  }
}
exports.UpdateTransportController = UpdateTransportController;