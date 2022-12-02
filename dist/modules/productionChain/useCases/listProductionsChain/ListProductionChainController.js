"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListProductionChainController = void 0;
var _tsyringe = require("tsyringe");
var _ListProductionChainUseCase = require("./ListProductionChainUseCase");
class ListProductionChainController {
  async handle(request, response) {
    const {
      companyId,
      limit,
      order,
      page,
      search,
      sortBy
    } = request.query;
    const listProductionChainUseCase = _tsyringe.container.resolve(_ListProductionChainUseCase.ListProductionChainUseCase);
    const result = await listProductionChainUseCase.execute({
      companyId: String(companyId),
      limit: Number(limit),
      order: String(order),
      page: Number(page),
      search: String(search),
      sortBy: String(sortBy)
    });
    return response.status(200).json(result);
  }
}
exports.ListProductionChainController = ListProductionChainController;