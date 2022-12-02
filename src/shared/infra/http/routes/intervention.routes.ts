import { CreateInterventionController } from "@modules/intervention/useCases/createIntervention/CreateInterventionController";
import { GetInterventionController } from "@modules/intervention/useCases/getIntervention/GetInterventionController";
import { ListInterventionController } from "@modules/intervention/useCases/listInterventions/ListInterventionController";
import { UpdateInterventionController } from "@modules/intervention/useCases/updateIntervention/UpdateInterventionController";
import { Router } from "express";

const interventionRoutes = Router();

const listInterventionController = new ListInterventionController();
const createInterventionController = new CreateInterventionController();
const getInterventionController = new GetInterventionController();
const updateInterventionController = new UpdateInterventionController();

interventionRoutes.get("/", listInterventionController.handle);
interventionRoutes.get("/:id", getInterventionController.handle);
interventionRoutes.post("/", createInterventionController.handle);
interventionRoutes.patch("/", updateInterventionController.handle);

export { interventionRoutes };
