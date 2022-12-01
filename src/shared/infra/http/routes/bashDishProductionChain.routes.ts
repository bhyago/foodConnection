import { CreateBashDishProductionChainController } from "@modules/bashDishProducionChain/useCases/createBashDishProductionChain/CreateBashDishProductionChainController";
import { DeleteBashDishProductionChainController } from "@modules/bashDishProducionChain/useCases/DeleteBashDishProductionChain/DeleteBashDishProductionChainController";
import { GetBashDishProductionChainController } from "@modules/bashDishProducionChain/useCases/getBashDishProductionChain/GetBashDishProductionChainController";
import { ListBashDishProductionChainController } from "@modules/bashDishProducionChain/useCases/listBashDishProductionChain/ListBashDishProductionChainController";
import { UpdateBashDishProductionChainController } from "@modules/bashDishProducionChain/useCases/updateUpdateBashDishProductionChain/UpdateUpdateBashDishProductionChainController";
import { Router } from "express";

const bashDishProductionChainRoutes = Router();

const createDishController = new CreateBashDishProductionChainController();
const listDishController = new ListBashDishProductionChainController();
const deleteDishController = new DeleteBashDishProductionChainController();
const updateDishController = new UpdateBashDishProductionChainController();
const getDishController = new GetBashDishProductionChainController();

bashDishProductionChainRoutes.post("/", createDishController.handle);
bashDishProductionChainRoutes.get("/", listDishController.handle);
bashDishProductionChainRoutes.delete("/:id", deleteDishController.handle);
bashDishProductionChainRoutes.patch("/:id", updateDishController.handle);
bashDishProductionChainRoutes.get("/:id", getDishController.handle);

export { bashDishProductionChainRoutes };
