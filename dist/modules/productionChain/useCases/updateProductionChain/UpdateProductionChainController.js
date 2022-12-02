"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateProductionChainController = void 0;
var _tsyringe = require("tsyringe");
var _UpdateProductionChainUseCase = require("./UpdateProductionChainUseCase");
class UpdateProductionChainController {
  async handle(request, response) {
    const {
      id,
      description,
      name,
      endDateTime,
      foodId,
      ingredientIds,
      productionTypeId,
      providerIds,
      quantity,
      startDateTime
    } = request.body;
    const {
      companyId
    } = request.query;
    const updateProductionChainUseCase = _tsyringe.container.resolve(_UpdateProductionChainUseCase.UpdateProductionChainUseCase);
    const result = await updateProductionChainUseCase.execute({
      companyId: String(companyId),
      id,
      description,
      name,
      endDateTime,
      foodId,
      ingredientIds,
      productionTypeId,
      providerIds,
      quantity,
      startDateTime
    });
    return response.status(201).json(result);
  }
}
exports.UpdateProductionChainController = UpdateProductionChainController;