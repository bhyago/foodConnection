"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAuthenticated = ensureAuthenticated;
var _auth = _interopRequireDefault(require("@config/auth"));
var _CompanyRepository = require("@modules/company/repositories/CompanyRepository");
var _jsonwebtoken = require("jsonwebtoken");
var _AppError = require("@shared/errors/AppError");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;
  const companyRepository = new _CompanyRepository.CompanyRepository();
  if (!authHeader) {
    throw new Error("Token missing");
  }
  const [, token] = authHeader.split(" ");
  try {
    const {
      sub: companyId
    } = (0, _jsonwebtoken.verify)(token, _auth.default.secret_refresh_token);
    const company = await companyRepository.findByCompanyIdAndRefreshToken(companyId, token);
    if (!company) {
      throw new _AppError.AppError("Company does not exists!", 401);
    }
    request.user = {
      id: company.companyId
    };
    next();
  } catch {
    throw new _AppError.AppError("Invalid token!", 401);
  }
}