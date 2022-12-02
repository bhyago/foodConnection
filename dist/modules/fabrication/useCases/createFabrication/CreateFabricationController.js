"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFabricationController = void 0;
var _tsyringe = require("tsyringe");
var _CreateFasbricationUseCase = require("./CreateFasbricationUseCase");
class CreateFabricationController {
  async handle(request, response) {
    const {
      batch,
      fabricationDate,
      productionChainId,
      validadeDate
    } = request.body;
    const {
      companyId
    } = request.query;
    const createFabricationUseCase = _tsyringe.container.resolve(_CreateFasbricationUseCase.CreateFabricationUseCase);
    const result = await createFabricationUseCase.execute({
      companyId: String(companyId),
      batch,
      fabricationDate,
      productionChainId,
      validadeDate
    });
    return response.status(201).json(result);
  }
}
exports.CreateFabricationController = CreateFabricationController;