"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProductionChainController = void 0;
var _tsyringe = require("tsyringe");
var _CreateProductionChainUseCase = require("./CreateProductionChainUseCase");
class CreateProductionChainController {
  async handle(request, response) {
    const {
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
    const createProductionChainUseCase = _tsyringe.container.resolve(_CreateProductionChainUseCase.CreateProductionChainUseCase);
    const result = await createProductionChainUseCase.execute({
      companyId: String(companyId),
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
exports.CreateProductionChainController = CreateProductionChainController;