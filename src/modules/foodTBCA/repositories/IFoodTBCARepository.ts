import { FoodTBCA } from "@prisma/client";

import { ICreateFoodTBCA, IUpdateFoodTBCA } from "../dtos/IFoodTBCA";

interface IFoodTBCARepository {
  create(data: ICreateFoodTBCA): Promise<FoodTBCA>;
  findById(data: {
    companyId: string;
    foodId: string;
  }): Promise<FoodTBCA | null>;

  update(data: {
    foodId: string;
    unity: string;
    valueBy100g: number;
    id: string;
  }): Promise<FoodTBCA>;
}

export { IFoodTBCARepository };
