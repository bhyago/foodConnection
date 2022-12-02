import { CreateFabricationController } from "@modules/fabrication/useCases/createFabrication/CreateFabricationController";
import { GetFabricationController } from "@modules/fabrication/useCases/getFabritation/GetFabricationController";
import { Router } from "express";

const fabricationRoutes = Router();

const createFabricationController = new CreateFabricationController();
const getFabricationController = new GetFabricationController();

fabricationRoutes.post("/", createFabricationController.handle);
fabricationRoutes.get("/:id", getFabricationController.handle);

export { fabricationRoutes };
