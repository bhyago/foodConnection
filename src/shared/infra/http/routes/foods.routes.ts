import { CreateFoodController } from "@modules/food/useCases/createFood/CreateFoodController";
import { DeleteFoodController } from "@modules/food/useCases/deleteFood/DeleteFoodController";
import { GetFoodController } from "@modules/food/useCases/getFood/GetFoodController";
import { ListFoodsController } from "@modules/food/useCases/listFoods/ListFoodsController";
import { UpdateFoodController } from "@modules/food/useCases/updateFood/UpdateFoodController";
import { Router } from "express";

const foodRoutes = Router();

const createFoodController = new CreateFoodController();
const listFoodsController = new ListFoodsController();
const getFoodController = new GetFoodController();
const updateFoodController = new UpdateFoodController();
const deleteFoodController = new DeleteFoodController();

foodRoutes.post("/", createFoodController.handle);
foodRoutes.get("/", listFoodsController.handle);
foodRoutes.get("/:id", getFoodController.handle);
foodRoutes.patch("/:id", updateFoodController.handle);
foodRoutes.delete("/:id", deleteFoodController.handle);

export { foodRoutes };
