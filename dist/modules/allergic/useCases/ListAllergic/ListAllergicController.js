"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListAllergicController = void 0;
var _tsyringe = require("tsyringe");
var _ListAllergicUseCase = require("./ListAllergicUseCase");
class ListAllergicController {
  async handle(request, response) {
    const {
      limit,
      order,
      page,
      search,
      sortBy
    } = request.query;
    const listAllergicUseCase = _tsyringe.container.resolve(_ListAllergicUseCase.ListAllergicUseCase);
    const result = await listAllergicUseCase.execute({
      limit: Number(limit),
      order: String(order),
      page: Number(page),
      search: String(search),
      sortBy: String(sortBy)
    });
    return response.status(200).json(result);
  }
}
exports.ListAllergicController = ListAllergicController;