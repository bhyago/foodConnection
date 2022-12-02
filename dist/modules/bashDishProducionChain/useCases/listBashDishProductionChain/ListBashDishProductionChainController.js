"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListBashDishProductionChainController = void 0;
var _tsyringe = require("tsyringe");
var _ListBashDishProductionChainUseCase = require("./ListBashDishProductionChainUseCase");
class ListBashDishProductionChainController {
  async handle(request, response) {
    const {
      companyId,
      limit,
      order,
      page,
      search,
      sortBy
    } = request.query;
    const listBashDishProductionChainUseCase = _tsyringe.container.resolve(_ListBashDishProductionChainUseCase.ListBashDishProductionChainUseCase);
    const result = await listBashDishProductionChainUseCase.execute({
      limit: Number(limit),
      order: String(order),
      page: Number(page),
      search: String(search),
      sortBy: String(sortBy),
      companyId: String(companyId)
    });
    return response.status(200).json(result);
  }
}
exports.ListBashDishProductionChainController = ListBashDishProductionChainController;