"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListProductionTypesController = void 0;
var _tsyringe = require("tsyringe");
var _ListProductionTypesUseCase = require("./ListProductionTypesUseCase");
class ListProductionTypesController {
  async handle(request, response) {
    const {
      companyId,
      limit,
      order,
      page,
      search,
      sortBy
    } = request.query;
    const listProductionTypesUseCase = _tsyringe.container.resolve(_ListProductionTypesUseCase.ListProductionTypesUseCase);
    const result = await listProductionTypesUseCase.execute({
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
exports.ListProductionTypesController = ListProductionTypesController;