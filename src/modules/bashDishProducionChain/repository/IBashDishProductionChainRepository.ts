import { BashDishProductionChain } from "@prisma/client";

import { IListBashDishProductionChain } from "../dtos/IBashDishProductionChain";

export interface IBashDishProductionChainRepository {
  create(
    data: Omit<BashDishProductionChain, "id" | "active">
  ): Promise<BashDishProductionChain>;
  update(
    data: Omit<BashDishProductionChain, "active">
  ): Promise<BashDishProductionChain>;
  delete(data: {
    id: string;
    companyId: string;
  }): Promise<BashDishProductionChain>;
  findById(data: {
    id: string;
    companyId: string;
  }): Promise<BashDishProductionChain | null>;
  findMany(
    data: IListBashDishProductionChain
  ): Promise<[number, BashDishProductionChain[]]>;
}
