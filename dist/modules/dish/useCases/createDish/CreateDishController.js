"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateDishController = void 0;
var _tsyringe = require("tsyringe");
var _CreateDishUseCase = require("./CreateDishUseCase");
class CreateDishController {
  async handle(request, response) {
    const {
      companyId
    } = request.query;
    const {
      description,
      name
    } = request.body;
    const createDishUseCase = _tsyringe.container.resolve(_CreateDishUseCase.CreateDishUseCase);
    const result = await createDishUseCase.execute({
      companyId: String(companyId),
      description,
      name
    });
    return response.status(201).json(result);
  }
}
exports.CreateDishController = CreateDishController;