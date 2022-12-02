"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetFoodController = void 0;
var _tsyringe = require("tsyringe");
var _GetFoodUseCase = require("./GetFoodUseCase");
class GetFoodController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const {
      companyId
    } = request.query;
    const getFoodUseCase = _tsyringe.container.resolve(_GetFoodUseCase.GetFoodsUseCase);
    const result = await getFoodUseCase.execute({
      companyId: String(companyId),
      id
    });
    return response.status(200).json(result);
  }
}
exports.GetFoodController = GetFoodController;