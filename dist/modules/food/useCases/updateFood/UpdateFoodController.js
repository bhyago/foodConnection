"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateFoodController = void 0;
var _tsyringe = require("tsyringe");
var _UpdateFoodUseCase = require("./UpdateFoodUseCase");
class UpdateFoodController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const {
      companyId
    } = request.query;
    const {
      description,
      foodTypeId,
      name
    } = request.body;
    const updateFoodUseCase = _tsyringe.container.resolve(_UpdateFoodUseCase.UpdateFoodUseCase);
    await updateFoodUseCase.execute({
      companyId: String(companyId),
      id,
      description,
      foodTypeId,
      name
    });
    return response.status(201).end();
  }
}
exports.UpdateFoodController = UpdateFoodController;