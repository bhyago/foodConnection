import { CreateDishController } from "@modules/dish/useCases/createDish/CreateDishController";
import { DeleteDishController } from "@modules/dish/useCases/deleteDish/DeleteDishController";
import { GetDishController } from "@modules/dish/useCases/getDish/GetDishController";
import { ListDishController } from "@modules/dish/useCases/listDish/ListDishController";
import { UpdateDishController } from "@modules/dish/useCases/updateDish/UpdateController";
import { Router } from "express";

const dishRoutes = Router();

const createDishController = new CreateDishController();
const listDishController = new ListDishController();
const deleteDishController = new DeleteDishController();
const updateDishController = new UpdateDishController();
const getDishController = new GetDishController();

dishRoutes.post("/", createDishController.handle);
dishRoutes.get("/", listDishController.handle);
dishRoutes.delete("/:id", deleteDishController.handle);
dishRoutes.patch("/:id", updateDishController.handle);
dishRoutes.get("/:id", getDishController.handle);

export { dishRoutes };
