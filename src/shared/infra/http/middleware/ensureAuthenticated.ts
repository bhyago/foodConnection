import auth from "@config/auth";
import { CompanyRepository } from "@modules/company/repositories/CompanyRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  const companyRepository = new CompanyRepository();

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: companyId } = verify(
      token,
      auth.secret_refresh_token
    ) as IPayload;

    const company = await companyRepository.findByCompanyIdAndRefreshToken(
      companyId,
      token
    );

    if (!company) {
      throw new AppError("Company does not exists!", 401);
    }

    request.user = {
      id: company.companyId,
    };

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}
