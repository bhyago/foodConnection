import { CreateFoodTBCAController } from "@modules/foodTBCA/useCases/createFoodTBCA/CreateFoodTBCAController";
import { GetFoodTBCAController } from "@modules/foodTBCA/useCases/getFoodTBCA/GetFoodTBCAController";
import { UpdateFoodTBCAController } from "@modules/foodTBCA/useCases/updateFoodTBCA/UpdateFoodTBCAController";
import { Router } from "express";

const foodTBCARoutes = Router();

const createFoodController = new CreateFoodTBCAController();
const getFoodTBCAController = new GetFoodTBCAController();
const updateFoodTBCAController = new UpdateFoodTBCAController();

foodTBCARoutes.post("/", createFoodController.handle);
foodTBCARoutes.get("/:foodId", getFoodTBCAController.handle);
foodTBCARoutes.patch("/", updateFoodTBCAController.handle);

export { foodTBCARoutes };
