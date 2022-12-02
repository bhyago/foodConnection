"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateFoodTBCAController = void 0;
var _tsyringe = require("tsyringe");
var _UpdateFoodTBCAUseCase = require("./UpdateFoodTBCAUseCase");
class UpdateFoodTBCAController {
  async handle(request, response) {
    const {
      id,
      foodId,
      unity,
      valueBy100g,
      componentTBCAId
    } = request.body;
    const {
      companyId
    } = request.query;
    const updateFoodTBCAUseCase = _tsyringe.container.resolve(_UpdateFoodTBCAUseCase.UpdateFoodTBCAUseCase);
    console.log(foodId);
    const result = await updateFoodTBCAUseCase.execute({
      companyId: String(companyId),
      foodId,
      unity,
      valueBy100g,
      componentTBCAId,
      id
    });
    return response.status(201).json(result);
  }
}
exports.UpdateFoodTBCAController = UpdateFoodTBCAController;