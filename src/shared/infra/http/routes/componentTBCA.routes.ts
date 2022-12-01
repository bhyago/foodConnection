import { GetComponentTBCAController } from "@modules/componentTBCA/useCases/GetComponentTBCA/GetComponentTBCAController";
import { ListComponentTBCAController } from "@modules/componentTBCA/useCases/listComponentTBCA/ListComponentTBCAController";
import { Router } from "express";

const componentTBCARoutes = Router();

const listComponentTBCAController = new ListComponentTBCAController();
const getComponentTBCAController = new GetComponentTBCAController();

componentTBCARoutes.get("/", listComponentTBCAController.handle);
componentTBCARoutes.get("/:id", getComponentTBCAController.handle);

export { componentTBCARoutes };
