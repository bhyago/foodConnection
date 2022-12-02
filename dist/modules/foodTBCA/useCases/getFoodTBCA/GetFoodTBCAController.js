"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetFoodTBCAController = void 0;
var _tsyringe = require("tsyringe");
var _GetFoodTBCAUseCase = require("./GetFoodTBCAUseCase");
class GetFoodTBCAController {
  async handle(request, response) {
    const {
      foodId
    } = request.params;
    const {
      companyId
    } = request.query;
    const getFoodTBCAUseCase = _tsyringe.container.resolve(_GetFoodTBCAUseCase.GetFoodTBCAUseCase);
    const result = await getFoodTBCAUseCase.execute({
      companyId: String(companyId),
      foodId
    });
    return response.status(200).json(result);
  }
}
exports.GetFoodTBCAController = GetFoodTBCAController;