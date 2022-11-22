import { GetProductionTypeController } from "@modules/productionType/useCases/getProductionType/getProductionTypeController";
import { ListProductionTypesController } from "@modules/productionType/useCases/listProductionType/ListProductionTypesController";
import { Router } from "express";

const productionTypeRoutes = Router();

const listProductionTypesController = new ListProductionTypesController();
const getProductionTypeController = new GetProductionTypeController();

productionTypeRoutes.get("/", listProductionTypesController.handle);
productionTypeRoutes.get("/:id", getProductionTypeController.handle);

export { productionTypeRoutes };
