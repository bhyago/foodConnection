"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFoodController = void 0;
var _tsyringe = require("tsyringe");
var _CreateFoodUseCase = require("./CreateFoodUseCase");
class CreateFoodController {
  async handle(request, response) {
    const {
      description,
      foodTypeId,
      name,
      id
    } = request.body;
    const {
      companyId
    } = request.query;
    const createFoodUseCase = _tsyringe.container.resolve(_CreateFoodUseCase.CreateFoodUseCase);
    const result = await createFoodUseCase.execute({
      companyId: String(companyId),
      description,
      foodTypeId,
      name,
      id
    });
    return response.status(201).json(result);
  }
}
exports.CreateFoodController = CreateFoodController;