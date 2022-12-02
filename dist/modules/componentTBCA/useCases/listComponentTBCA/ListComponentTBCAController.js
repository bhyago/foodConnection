"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListComponentTBCAController = void 0;
var _tsyringe = require("tsyringe");
var _ListComponentTBCAUseCase = require("./ListComponentTBCAUseCase");
class ListComponentTBCAController {
  async handle(request, response) {
    const {
      limit,
      order,
      page,
      search,
      sortBy
    } = request.query;
    const listComponentTBCAUseCase = _tsyringe.container.resolve(_ListComponentTBCAUseCase.ListComponentTBCAUseCase);
    const result = await listComponentTBCAUseCase.execute({
      limit: Number(limit),
      order: String(order),
      page: Number(page),
      search: String(search),
      sortBy: String(sortBy)
    });
    return response.status(200).json(result);
  }
}
exports.ListComponentTBCAController = ListComponentTBCAController;