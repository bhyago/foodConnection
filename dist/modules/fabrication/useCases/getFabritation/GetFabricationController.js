"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetFabricationController = void 0;
var _tsyringe = require("tsyringe");
var _GetFabricationUseCase = require("./GetFabricationUseCase");
class GetFabricationController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const {
      companyId,
      productionChainId
    } = request.query;
    const getFabricationUseCase = _tsyringe.container.resolve(_GetFabricationUseCase.GetFabricationUseCase);
    const result = await getFabricationUseCase.execute({
      companyId: String(companyId),
      id,
      productionChainId: String(productionChainId)
    });
    return response.status(200).json(result);
  }
}
exports.GetFabricationController = GetFabricationController;