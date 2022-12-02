"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDishController = void 0;
var _tsyringe = require("tsyringe");
var _GetDishUseCase = require("./GetDishUseCase");
class GetDishController {
  async handle(request, response) {
    const {
      companyId
    } = request.query;
    const {
      id
    } = request.body;
    const getDishUseCase = _tsyringe.container.resolve(_GetDishUseCase.GetDishUseCase);
    const result = await getDishUseCase.execute({
      companyId: String(companyId),
      id
    });
    return response.status(200).json(result);
  }
}
exports.GetDishController = GetDishController;