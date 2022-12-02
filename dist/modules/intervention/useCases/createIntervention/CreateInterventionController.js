"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateInterventionController = void 0;
var _tsyringe = require("tsyringe");
var _CreateInterventionUseCase = require("./CreateInterventionUseCase");
class CreateInterventionController {
  async handle(request, response) {
    const {
      description,
      endDateTime,
      startDateTime,
      productionChainId
    } = request.body;
    const {
      companyId
    } = request.query;
    const createInterventionUseCase = _tsyringe.container.resolve(_CreateInterventionUseCase.CreateInterventionUseCase);
    const result = await createInterventionUseCase.execute({
      companyId: String(companyId),
      description,
      endDateTime,
      productionChainId,
      startDateTime
    });
    return response.status(201).json(result);
  }
}
exports.CreateInterventionController = CreateInterventionController;