import { Router } from "express";

import { allergicRoutes } from "./allergic.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { companyRoutes } from "./company.routes";
import { fabricationRoutes } from "./fabrication.routes";
import { foodRoutes } from "./foods.routes";
import { foodTBCARoutes } from "./foodTBCA.routes";
import { ingredientRoutes } from "./ingredients.routes";
import { interventionRoutes } from "./intervention.routes";
import { productionChainRoutes } from "./productionChain.routes";
import { productionTypeRoutes } from "./productionType.routes";
import { providerRoutes } from "./providers.routes";

const routes = Router();

routes.use("/companies", companyRoutes);
routes.use("/providers", providerRoutes);
routes.use("/food", foodRoutes);
routes.use("/ingredient", ingredientRoutes);
routes.use("/productionchain", productionChainRoutes);
routes.use("/productiontype", productionTypeRoutes);
routes.use("/food/tbca", foodTBCARoutes);
routes.use("/fabrications", fabricationRoutes);
routes.use("/interventions", interventionRoutes);
routes.use("/allergic", allergicRoutes);

routes.use(authenticateRoutes);

export { routes };
