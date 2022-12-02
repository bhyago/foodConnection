"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetBashDishProductionChainController = void 0;
var _tsyringe = require("tsyringe");
var _GetBashDishProductionChainUseCase = require("./GetBashDishProductionChainUseCase");
class GetBashDishProductionChainController {
  async handle(request, response) {
    const {
      companyId
    } = request.query;
    const {
      id
    } = request.params;
    const getBashDishProductionChainController = _tsyringe.container.resolve(_GetBashDishProductionChainUseCase.GetBashDishProductionChainUseCase);
    const result = await getBashDishProductionChainController.execute({
      companyId: String(companyId),
      id
    });
    return response.status(200).json(result);
  }
}
exports.GetBashDishProductionChainController = GetBashDishProductionChainController;