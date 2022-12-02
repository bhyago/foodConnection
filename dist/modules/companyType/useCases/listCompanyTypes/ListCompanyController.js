"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCompanyTypeController = void 0;
var _tsyringe = require("tsyringe");
var _ListCompanyTypeUseCase = require("./ListCompanyTypeUseCase");
class ListCompanyTypeController {
  async handle(request, response) {
    const {
      limit,
      order,
      page,
      search,
      sortBy
    } = request.query;
    const listCompanyTypeAUseCase = _tsyringe.container.resolve(_ListCompanyTypeUseCase.ListCompanyTypeAUseCase);
    const result = await listCompanyTypeAUseCase.execute({
      limit: Number(limit),
      order: String(order),
      page: Number(page),
      search: String(search),
      sortBy: String(sortBy)
    });
    return response.status(200).json(result);
  }
}
exports.ListCompanyTypeController = ListCompanyTypeController;