import { Router } from "express";

import { companyRoutes } from "./company.routes";
import { foodRoutes } from "./foods.routes";
import { ingredientRoutes } from "./ingredients.routes";
import { providerRoutes } from "./providers.routes";

const router = Router();

router.use("/companies", companyRoutes);
router.use("/providers", providerRoutes);
router.use("/food", foodRoutes);
router.use("/ingredient", ingredientRoutes);

// router.use(authenticateRoutes);

export { router };
