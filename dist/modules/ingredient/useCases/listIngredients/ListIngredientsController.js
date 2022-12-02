"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListIngredientsController = void 0;
var _tsyringe = require("tsyringe");
var _ListIngredientsUseCase = require("./ListIngredientsUseCase");
class ListIngredientsController {
  async handle(request, response) {
    const {
      companyId,
      limit,
      order,
      page,
      search,
      sortBy
    } = request.query;
    const listIngredientsUseCase = _tsyringe.container.resolve(_ListIngredientsUseCase.ListIngredientsUseCase);
    const result = await listIngredientsUseCase.execute({
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
exports.ListIngredientsController = ListIngredientsController;