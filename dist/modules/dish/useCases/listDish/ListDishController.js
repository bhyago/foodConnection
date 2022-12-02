"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListDishController = void 0;
var _tsyringe = require("tsyringe");
var _ListDishUseCase = require("./ListDishUseCase");
class ListDishController {
  async handle(request, response) {
    const {
      companyId,
      limit,
      order,
      page,
      search,
      sortBy
    } = request.query;
    const listDishUseCase = _tsyringe.container.resolve(_ListDishUseCase.ListDishUseCase);
    const result = await listDishUseCase.execute({
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
exports.ListDishController = ListDishController;