"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListProvidersController = void 0;
var _tsyringe = require("tsyringe");
var _ListProvidersUserCase = require("./ListProvidersUserCase");
class ListProvidersController {
  async handle(request, response) {
    const {
      companyId,
      limit,
      order,
      page,
      search,
      sortBy
    } = request.query;
    const listProvidersUseCase = _tsyringe.container.resolve(_ListProvidersUserCase.ListProvidersUseCase);
    const result = await listProvidersUseCase.execute({
      companyId: String(companyId),
      limit: Number(limit),
      order: String(order),
      page: Number(page),
      search: String(search),
      sortBy: String(sortBy)
    });
    return response.status(201).json(result);
  }
}
exports.ListProvidersController = ListProvidersController;