import { CreateProviderController } from "@modules/provider/useCases/createProvider/CreateProviderController";
import { GetProviderController } from "@modules/provider/useCases/getProvider/GetProviderController";
import { ListProvidersController } from "@modules/provider/useCases/listProviders/ListProvidersController";
import { UpdateProviderController } from "@modules/provider/useCases/updateProvider/UpdateProviderController";
import { Router } from "express";

const providerRoutes = Router();

const createProviderController = new CreateProviderController();
const listProvidersController = new ListProvidersController();
const getProviderController = new GetProviderController();
const updateProviderController = new UpdateProviderController();

providerRoutes.post("/", createProviderController.handle);
providerRoutes.get("/", listProvidersController.handle);
providerRoutes.get("/:id", getProviderController.handle);
providerRoutes.patch("/:providerId", updateProviderController.handle);
// providerRoutes.delete("/:id", createCompanyController.handle);

export { providerRoutes };
