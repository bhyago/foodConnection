"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetProductionChainController = void 0;
var _tsyringe = require("tsyringe");
var _GetProductionChainUseCase = require("./GetProductionChainUseCase");
class GetProductionChainController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const {
      companyId
    } = request.query;
    const getProductionChainUseCase = _tsyringe.container.resolve(_GetProductionChainUseCase.GetProductionChainUseCase);
    const result = await getProductionChainUseCase.execute({
      companyId: String(companyId),
      id
    });
    return response.status(200).json(result);
  }
}
exports.GetProductionChainController = GetProductionChainController;