import { GetAllergicController } from "@modules/allergic/useCases/getAllergic/GetAllergicController";
import { ListAllergicController } from "@modules/allergic/useCases/ListAllergic/ListAllergicController";
import { Router } from "express";

const allergicRoutes = Router();

const listAllergicController = new ListAllergicController();
const getAllergicController = new GetAllergicController();

allergicRoutes.get("/", listAllergicController.handle);
allergicRoutes.get("/:id", getAllergicController.handle);

export { allergicRoutes };
