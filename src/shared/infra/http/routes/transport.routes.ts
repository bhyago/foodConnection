import { CreateTransportController } from "@modules/transport/useCases/createTransport/CreateTransportController";
import { GetTransportController } from "@modules/transport/useCases/getTransport/GetTransportController";
import { UpdateTransportController } from "@modules/transport/useCases/updateTransport/UpdateTrasportController";
import { Router } from "express";

const transportRoutes = Router();

const createTransportController = new CreateTransportController();
const getTransportController = new GetTransportController();
const updateTransportController = new UpdateTransportController();

transportRoutes.post("/", createTransportController.handle);
transportRoutes.get("/:fabricationId", getTransportController.handle);
transportRoutes.patch("/:fabricationId", updateTransportController.handle);

export { transportRoutes };
