"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteDishController = void 0;
var _tsyringe = require("tsyringe");
var _DeleteDishUseCase = require("./DeleteDishUseCase");
class DeleteDishController {
  async handle(request, response) {
    const {
      companyId
    } = request.query;
    const {
      id
    } = request.body;
    const deleteDishUseCase = _tsyringe.container.resolve(_DeleteDishUseCase.DeleteDishUseCase);
    const result = await deleteDishUseCase.execute({
      companyId: String(companyId),
      id
    });
    return response.status(204).json(result);
  }
}
exports.DeleteDishController = DeleteDishController;