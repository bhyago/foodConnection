"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListInterventionController = void 0;
var _tsyringe = require("tsyringe");
var _ListInterventionUseCase = require("./ListInterventionUseCase");
class ListInterventionController {
  async handle(request, response) {
    const {
      companyId,
      limit,
      order,
      page,
      search,
      sortBy,
      productionChainId
    } = request.query;
    const listInterventionUseCase = _tsyringe.container.resolve(_ListInterventionUseCase.ListInterventionUseCase);
    const result = await listInterventionUseCase.execute({
      companyId: String(companyId),
      productionChainId: String(productionChainId),
      limit: Number(limit),
      order: String(order),
      page: Number(page),
      search: String(search),
      sortBy: String(sortBy)
    });
    return response.status(200).json(result);
  }
}
exports.ListInterventionController = ListInterventionController;