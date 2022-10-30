import { DeleteFoodController } from "@modules/food/useCases/deleteFood/DeleteFoodController";
import { CreateIngredientController } from "@modules/ingredient/useCases/createIngredient/CreateIngredientController";
import { GetIngredientController } from "@modules/ingredient/useCases/getIngredient/GetIngredientController";
import { ListIngredientsController } from "@modules/ingredient/useCases/listIngredients/ListIngredientsController";
import { UpdateIngredientController } from "@modules/ingredient/useCases/updateIngredient/UpdateIngredientController";
import { Router } from "express";

const ingredientRoutes = Router();

const createIngredientController = new CreateIngredientController();
const listIngredientsController = new ListIngredientsController();
const getIngredientController = new GetIngredientController();
const updateIngredientController = new UpdateIngredientController();
const deleteFoodController = new DeleteFoodController();

ingredientRoutes.post("/", createIngredientController.handle);
ingredientRoutes.get("/", listIngredientsController.handle);
ingredientRoutes.get("/:id", getIngredientController.handle);
ingredientRoutes.patch("/:id", updateIngredientController.handle);
ingredientRoutes.delete("/:id", deleteFoodController.handle);

export { ingredientRoutes };
