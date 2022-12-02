"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateBashDishProductionChainController = void 0;
var _tsyringe = require("tsyringe");
var _UpdateUpdateBashDishProductionChainUseCase = require("./UpdateUpdateBashDishProductionChainUseCase");
class UpdateBashDishProductionChainController {
  async handle(request, response) {
    const {
      companyId,
      dishId,
      id,
      productionChainId
    } = request.body;
    const updateBashDishProductionChainUseCase = _tsyringe.container.resolve(_UpdateUpdateBashDishProductionChainUseCase.UpdateBashDishProductionChainUseCase);
    const result = await updateBashDishProductionChainUseCase.execute({
      companyId,
      dishId,
      id,
      productionChainId
    });
    return response.status(200).json(result);
  }
}
exports.UpdateBashDishProductionChainController = UpdateBashDishProductionChainController;