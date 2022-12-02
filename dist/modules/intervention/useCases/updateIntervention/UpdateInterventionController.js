"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateInterventionController = void 0;
var _tsyringe = require("tsyringe");
var _UpdateInterventionUseCase = require("./UpdateInterventionUseCase");
class UpdateInterventionController {
  async handle(request, response) {
    const {
      description,
      endDateTime,
      startDateTime,
      productionChainId,
      id
    } = request.body;
    const {
      companyId
    } = request.query;
    const updateInterventionUseCase = _tsyringe.container.resolve(_UpdateInterventionUseCase.UpdateInterventionUseCase);
    const result = await updateInterventionUseCase.execute({
      companyId: String(companyId),
      id,
      description,
      endDateTime,
      productionChainId,
      startDateTime
    });
    return response.status(201).json(result);
  }
}
exports.UpdateInterventionController = UpdateInterventionController;