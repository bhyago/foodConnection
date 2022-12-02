"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateCompanyController = void 0;
var _tsyringe = require("tsyringe");
var _AuthenticateCompanyUseCase = require("./AuthenticateCompanyUseCase");
class AuthenticateCompanyController {
  async handle(request, response) {
    const {
      password,
      email
    } = request.body;
    const authenticateCompanyUseCase = _tsyringe.container.resolve(_AuthenticateCompanyUseCase.AuthenticateCompanyUseCase);
    const token = await authenticateCompanyUseCase.execute({
      password,
      email
    });
    return response.json(token);
  }
}
exports.AuthenticateCompanyController = AuthenticateCompanyController;