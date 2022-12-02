"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTransportController = void 0;
var _tsyringe = require("tsyringe");
var _CreateTransportUseCase = require("./CreateTransportUseCase");
class CreateTransportController {
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
    const createTransportUseCase = _tsyringe.container.resolve(_CreateTransportUseCase.CreateTransportUseCase);
    const result = await createTransportUseCase.execute({
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
exports.CreateTransportController = CreateTransportController;