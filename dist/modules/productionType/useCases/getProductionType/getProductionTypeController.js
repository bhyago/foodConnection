"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetProductionTypeController = void 0;
var _tsyringe = require("tsyringe");
var _getProductionTypeUseCase = require("./getProductionTypeUseCase");
class GetProductionTypeController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const {
      companyId
    } = request.query;
    const getProductionTypeUseCase = _tsyringe.container.resolve(_getProductionTypeUseCase.GetProductionTypeUseCase);
    const result = await getProductionTypeUseCase.execute({
      companyId: String(companyId),
      id
    });
    return response.status(200).json(result);
  }
}
exports.GetProductionTypeController = GetProductionTypeController;