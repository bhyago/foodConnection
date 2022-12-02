"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateDishController = void 0;
var _tsyringe = require("tsyringe");
var _UpdateUseCase = require("./UpdateUseCase");
class UpdateDishController {
  async handle(request, response) {
    const {
      companyId
    } = request.query;
    const {
      description,
      id,
      name
    } = request.body;
    const updateDishUseCase = _tsyringe.container.resolve(_UpdateUseCase.UpdateDishUseCase);
    const result = await updateDishUseCase.execute({
      companyId: String(companyId),
      description,
      id,
      name
    });
    return response.status(201).json(result);
  }
}
exports.UpdateDishController = UpdateDishController;