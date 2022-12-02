"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateIngredientController = void 0;
var _tsyringe = require("tsyringe");
var _CreateIngredientUseCase = require("./CreateIngredientUseCase");
class CreateIngredientController {
  async handle(request, response) {
    const {
      vegan,
      description,
      name,
      allergicIds
    } = request.body;
    const {
      companyId
    } = request.query;
    const createIngredientUseCase = _tsyringe.container.resolve(_CreateIngredientUseCase.CreateIngredientUseCase);
    const result = await createIngredientUseCase.execute({
      companyId: String(companyId),
      description,
      name,
      vegan,
      allergicIds
    });
    return response.status(201).json(result);
  }
}
exports.CreateIngredientController = CreateIngredientController;