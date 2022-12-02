"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateBashDishProductionChainController = void 0;
var _tsyringe = require("tsyringe");
var _CreateBashDishProductionChainUseCase = require("./CreateBashDishProductionChainUseCase");
class CreateBashDishProductionChainController {
  async handle(request, response) {
    const {
      companyId
    } = request.query;
    const {
      dishId,
      productionChainId
    } = request.body;
    const createBashDishProductionChainUseCase = _tsyringe.container.resolve(_CreateBashDishProductionChainUseCase.CreateBashDishProductionChainUseCase);
    const result = await createBashDishProductionChainUseCase.execute({
      companyId: String(companyId),
      dishId,
      productionChainId
    });
    return response.status(201).json(result);
  }
}
exports.CreateBashDishProductionChainController = CreateBashDishProductionChainController;