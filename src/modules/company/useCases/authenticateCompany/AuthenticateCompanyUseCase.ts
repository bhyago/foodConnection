import auth from "@config/auth";
import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { compare } from "bcrypt";
import dayjs from "dayjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  company: {
    name: string;
    email: string;
  };
  token: string;
  refreshToken: string;
}
@injectable()
export class AuthenticateCompanyUseCase {
  constructor(
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const company = await this.companyRepository.findByEmail(email);

    if (!company) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, company.password);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }

    const token = sign({}, auth.secret_token, {
      subject: company.id,
      expiresIn: auth.expires_in_token,
    });

    const refreshToken = sign({ email }, auth.secret_refresh_token, {
      subject: company.id,
      expiresIn: auth.expires_in_refresh_token,
    });

    const refresh_token_expires_date = dayjs()
      .add(auth.expires_refresh_token_days, "days")
      .toDate();

    await this.companyRepository.createToken({
      companyId: company.id,
      refreshToken,
      expiresDate: refresh_token_expires_date,
    });

    const tokenReturn: IResponse = {
      company: {
        email: company.email,
        name: company.name,
      },
      token,
      refreshToken,
    };
    return tokenReturn;
  }
}
