"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFoodTBCAController = void 0;
var _tsyringe = require("tsyringe");
var _CreateFoodTBCAUseCase = require("./CreateFoodTBCAUseCase");
class CreateFoodTBCAController {
  async handle(request, response) {
    const {
      foodId,
      unity,
      valueBy100g,
      componentTBCAId
    } = request.body;
    const {
      companyId
    } = request.query;
    const createFoodTBCAUseCase = _tsyringe.container.resolve(_CreateFoodTBCAUseCase.CreateFoodTBCAUseCase);
    const result = await createFoodTBCAUseCase.execute({
      companyId: String(companyId),
      foodId,
      unity,
      valueBy100g,
      componentTBCAId
    });
    return response.status(201).json(result);
  }
}
exports.CreateFoodTBCAController = CreateFoodTBCAController;