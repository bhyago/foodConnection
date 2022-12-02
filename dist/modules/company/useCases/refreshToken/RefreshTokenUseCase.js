"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshTokenUseCase = void 0;
var _auth = _interopRequireDefault(require("@config/auth"));
var _ICompanyRepository = require("@modules/company/repositories/ICompanyRepository");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _jsonwebtoken = require("jsonwebtoken");
var _tsyringe = require("tsyringe");
var _AppError = require("@shared/errors/AppError");
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let RefreshTokenUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("CompanyRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICompanyRepository.ICompanyRepository === "undefined" ? Object : _ICompanyRepository.ICompanyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class RefreshTokenUseCase {
  constructor(companyRepository) {
    this.companyRepository = companyRepository;
  }
  async execute(token) {
    // verify token
    const {
      sub,
      email
    } = (0, _jsonwebtoken.verify)(token, _auth.default.secret_refresh_token);
    const companyId = sub;
    const companyToken = await this.companyRepository.findByCompanyIdAndRefreshToken(companyId, token);
    if (!companyToken) throw new _AppError.AppError("Refresh token does not exist");
    await this.companyRepository.deleteRefreshTokenById(companyToken.id);
    const refreshToken = (0, _jsonwebtoken.sign)({
      email
    }, _auth.default.secret_refresh_token, {
      subject: sub,
      expiresIn: _auth.default.expires_in_refresh_token
    });
    const expiresDate = (0, _dayjs.default)().add(_auth.default.expires_refresh_token_days, "days").toDate();
    await this.companyRepository.createToken({
      companyId,
      expiresDate,
      refreshToken
    });
    const newToken = (0, _jsonwebtoken.sign)({}, _auth.default.secret_token, {
      subject: companyId,
      expiresIn: _auth.default.expires_in_token
    });
    return {
      token: newToken,
      refreshToken
    };
  }
}) || _class) || _class) || _class) || _class);
exports.RefreshTokenUseCase = RefreshTokenUseCase;