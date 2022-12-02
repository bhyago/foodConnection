import { GetCompanyController } from "@modules/companyType/useCases/GetCompanyTypes/GetCompanyTypesController";
import { ListCompanyTypeController } from "@modules/companyType/useCases/listCompanyTypes/ListCompanyController";
import { Router } from "express";

const companyTypesRoutes = Router();

const listCompanyTypeController = new ListCompanyTypeController();
const getCompanyTypeController = new GetCompanyController();

companyTypesRoutes.get("/", listCompanyTypeController.handle);
companyTypesRoutes.get("/:id", getCompanyTypeController.handle);

export { companyTypesRoutes };
