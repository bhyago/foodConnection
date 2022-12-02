"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllergicController = void 0;
var _tsyringe = require("tsyringe");
var _GetAllergicUseCase = require("./GetAllergicUseCase");
class GetAllergicController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const getAllergicUseCase = _tsyringe.container.resolve(_GetAllergicUseCase.GetAllergicUseCase);
    const result = await getAllergicUseCase.execute(id);
    return response.status(200).json(result);
  }
}
exports.GetAllergicController = GetAllergicController;