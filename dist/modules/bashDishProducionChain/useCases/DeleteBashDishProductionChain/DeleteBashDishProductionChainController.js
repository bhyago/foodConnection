"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteBashDishProductionChainController = void 0;
var _tsyringe = require("tsyringe");
var _DeleteBashDishProductionChainUseCase = require("./DeleteBashDishProductionChainUseCase");
class DeleteBashDishProductionChainController {
  async handle(request, response) {
    const {
      companyId
    } = request.query;
    const {
      id
    } = request.params;
    const deleteBashDishProductionChainUseCase = _tsyringe.container.resolve(_DeleteBashDishProductionChainUseCase.DeleteBashDishProductionChainUseCase);
    const result = await deleteBashDishProductionChainUseCase.execute({
      companyId: String(companyId),
      id
    });
    return response.status(204).json(result);
  }
}
exports.DeleteBashDishProductionChainController = DeleteBashDishProductionChainController;