"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetIngredientController = void 0;
var _tsyringe = require("tsyringe");
var _GetIngredientUseCase = require("./GetIngredientUseCase");
class GetIngredientController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const {
      companyId
    } = request.query;
    const getIngredientUseCase = _tsyringe.container.resolve(_GetIngredientUseCase.GetIngredientUseCase);
    const result = await getIngredientUseCase.execute({
      companyId: String(companyId),
      id
    });
    return response.status(200).json(result);
  }
}
exports.GetIngredientController = GetIngredientController;