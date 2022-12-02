"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateIngredientController = void 0;
var _tsyringe = require("tsyringe");
var _UpdateIngredientUseCase = require("./UpdateIngredientUseCase");
class UpdateIngredientController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const {
      companyId
    } = request.query;
    const {
      vegan,
      description,
      name
    } = request.body;
    const updateIngredientUseCase = _tsyringe.container.resolve(_UpdateIngredientUseCase.UpdateIngredientUseCase);
    const result = await updateIngredientUseCase.execute({
      companyId: String(companyId),
      id,
      description,
      name,
      vegan
    });
    return response.status(201).json(result);
  }
}
exports.UpdateIngredientController = UpdateIngredientController;