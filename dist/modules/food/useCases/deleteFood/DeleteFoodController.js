"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteFoodController = void 0;
var _tsyringe = require("tsyringe");
var _DeleteFoodUseCase = require("./DeleteFoodUseCase");
class DeleteFoodController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const {
      companyId
    } = request.query;
    const deleteFoodUseCase = _tsyringe.container.resolve(_DeleteFoodUseCase.DeleteFoodUseCase);
    await deleteFoodUseCase.execute({
      companyId: String(companyId),
      id
    });
    return response.status(204).end();
  }
}
exports.DeleteFoodController = DeleteFoodController;