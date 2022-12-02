"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCompanyController = void 0;
var _tsyringe = require("tsyringe");
var _GetCompanyTypesUseCase = require("./GetCompanyTypesUseCase");
class GetCompanyController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const getCompanyTypeUseCase = _tsyringe.container.resolve(_GetCompanyTypesUseCase.GetCompanyTypeUseCase);
    const result = await getCompanyTypeUseCase.execute(id);
    return response.status(200).json(result);
  }
}
exports.GetCompanyController = GetCompanyController;