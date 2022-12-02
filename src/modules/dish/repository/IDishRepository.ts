import { Dish } from "@prisma/client";

import { IListDish } from "../dtos/IDish";

export interface IDishRepository {
  create(data: Omit<Dish, "id">): Promise<Dish>;
  update(data: Omit<Dish, "active">): Promise<Dish>;
  delete(data: { id: string; companyId: string }): Promise<Dish>;
  findById(data: { id: string; companyId: string }): Promise<Dish | null>;
  findMany(data: IListDish): Promise<[number, Dish[]]>;
}
