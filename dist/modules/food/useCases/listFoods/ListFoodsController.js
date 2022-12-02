"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListFoodsController = void 0;
var _tsyringe = require("tsyringe");
var _ListFoodsUseCase = require("./ListFoodsUseCase");
class ListFoodsController {
  async handle(request, response) {
    const {
      companyId,
      limit,
      order,
      page,
      search,
      sortBy
    } = request.query;
    const listFoodsUseCase = _tsyringe.container.resolve(_ListFoodsUseCase.ListFoodsUseCase);
    const result = await listFoodsUseCase.execute({
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
exports.ListFoodsController = ListFoodsController;