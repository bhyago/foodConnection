"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetInterventionController = void 0;
var _tsyringe = require("tsyringe");
var _GetInterventionsUseCase = require("./GetInterventionsUseCase");
class GetInterventionController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const {
      companyId,
      productionChainId
    } = request.query;
    const getInterventionUseCase = _tsyringe.container.resolve(_GetInterventionsUseCase.GetInterventionUseCase);
    const result = await getInterventionUseCase.execute({
      companyId: String(companyId),
      productionChainId: String(productionChainId),
      id
    });
    return response.status(200).json(result);
  }
}
exports.GetInterventionController = GetInterventionController;