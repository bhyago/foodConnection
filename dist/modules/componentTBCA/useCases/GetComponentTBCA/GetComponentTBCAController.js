"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetComponentTBCAController = void 0;
var _tsyringe = require("tsyringe");
var _GetComponentTBCAUseCase = require("./GetComponentTBCAUseCase");
class GetComponentTBCAController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const getComponentTBCAUseCase = _tsyringe.container.resolve(_GetComponentTBCAUseCase.GetComponentTBCAUseCase);
    const result = await getComponentTBCAUseCase.execute(id);
    return response.status(200).json(result);
  }
}
exports.GetComponentTBCAController = GetComponentTBCAController;