import auth from "@config/auth";
import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import dayjs from "dayjs";
import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
  email: string;
}

interface ITokenResponse {
  token: string;
  refreshToken: string;
}

@injectable()
export class RefreshTokenUseCase {
  constructor(
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}
  async execute(token: string): Promise<ITokenResponse> {
    // verify token
    const { sub, email } = verify(token, auth.secret_refresh_token) as IPayload;

    const companyId = sub;

    const companyToken =
      await this.companyRepository.findByCompanyIdAndRefreshToken(
        companyId,
        token
      );

    if (!companyToken) throw new AppError("Refresh token does not exist");

    await this.companyRepository.deleteRefreshTokenById(companyToken.id);

    const refreshToken = sign({ email }, auth.secret_refresh_token, {
      subject: sub,
      expiresIn: auth.expires_in_refresh_token,
    });

    const expiresDate = dayjs()
      .add(auth.expires_refresh_token_days, "days")
      .toDate();

    await this.companyRepository.createToken({
      companyId,
      expiresDate,
      refreshToken,
    });

    const newToken = sign({}, auth.secret_token, {
      subject: companyId,
      expiresIn: auth.expires_in_token,
    });

    return {
      token: newToken,
      refreshToken,
    };
  }
}
