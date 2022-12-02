import { CreateProductionChainController } from "@modules/productionChain/useCases/createProductionChain/CreateProductionChainController";
import { GetProductionChainController } from "@modules/productionChain/useCases/getProductionChain/GetProductionChainController";
import { ListProductionChainController } from "@modules/productionChain/useCases/listProductionsChain/ListProductionChainController";
import { UpdateProductionChainController } from "@modules/productionChain/useCases/updateProductionChain/UpdateProductionChainController";
import { Router } from "express";

const productionChainRoutes = Router();

const createProductionChainController = new CreateProductionChainController();
const getProductionChainController = new GetProductionChainController();
const listProductionChainController = new ListProductionChainController();
const updateProductionChainController = new UpdateProductionChainController();

productionChainRoutes.post("/", createProductionChainController.handle);
productionChainRoutes.get("/", listProductionChainController.handle);
productionChainRoutes.patch("/", updateProductionChainController.handle);
productionChainRoutes.get("/:id", getProductionChainController.handle);

export { productionChainRoutes };
