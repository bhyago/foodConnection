import { AuthenticateCompanyController } from "@modules/company/useCases/authenticateCompany/AuthenticateCompanyController";
import { RefreshTokenController } from "@modules/company/useCases/refreshToken/RefreshTokenController";
import { Router } from "express";

const authenticateRoutes = Router();

const authenticateCompanyController = new AuthenticateCompanyController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post("/refresh-token", refreshTokenController.handle);
authenticateRoutes.post("/sessions", authenticateCompanyController.handle);

export { authenticateRoutes };
