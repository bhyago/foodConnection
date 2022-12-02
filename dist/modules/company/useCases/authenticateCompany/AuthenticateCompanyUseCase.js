"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateCompanyUseCase = void 0;
var _auth = _interopRequireDefault(require("@config/auth"));
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _bcrypt = require("bcrypt");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _jsonwebtoken = require("jsonwebtoken");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let AuthenticateCompanyUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class AuthenticateCompanyUseCase {
  constructor(companyRepository) {
    this.companyRepository = companyRepository;
  }
  async execute({
    email,
    password
  }) {
    const company = await this.companyRepository.findByEmail(email);
    if (!company) {
      throw new Error("Email or password incorrect!");
    }
    const passwordMatch = await (0, _bcrypt.compare)(password, company.password);
    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }
    const token = (0, _jsonwebtoken.sign)({}, _auth.default.secret_token, {
      subject: company.id,
      expiresIn: _auth.default.expires_in_token
    });
    const refreshToken = (0, _jsonwebtoken.sign)({
      email
    }, _auth.default.secret_refresh_token, {
      subject: company.id,
      expiresIn: _auth.default.expires_in_refresh_token
    });
    const refresh_token_expires_date = (0, _dayjs.default)().add(_auth.default.expires_refresh_token_days, "days").toDate();
    await this.companyRepository.createToken({
      companyId: company.id,
      refreshToken,
      expiresDate: refresh_token_expires_date
    });
    const tokenReturn = {
      company: {
        email: company.email,
        name: company.name
      },
      token,
      refreshToken
    };
    return tokenReturn;
  }
}) || _class) || _class) || _class) || _class);
exports.AuthenticateCompanyUseCase = AuthenticateCompanyUseCase;