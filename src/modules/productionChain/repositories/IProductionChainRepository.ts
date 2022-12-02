import { ProductionChain } from "@prisma/client";

import {
  ICreateProductionChain,
  IGetProductionChain,
  IListProductionChain,
  IUpdateProductionChain,
} from "../dtos/IProductionChain";

interface IProductionChainRepository {
  create(
    data: Omit<ICreateProductionChain, "ingredientIds" | "providerIds">
  ): Promise<ProductionChain>;

  findById({ id, companyId }: IGetProductionChain): Promise<any>;

  listMany(data: IListProductionChain): Promise<[number, ProductionChain[]]>;

  update(data: IUpdateProductionChain): Promise<ProductionChain>;
}

export { IProductionChainRepository };
