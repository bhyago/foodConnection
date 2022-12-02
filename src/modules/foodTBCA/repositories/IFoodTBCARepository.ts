import { FoodTBCA } from "@prisma/client";

import { ICreateFoodTBCA } from "../dtos/IFoodTBCA";

interface IFoodTBCARepository {
  create(data: ICreateFoodTBCA): Promise<FoodTBCA>;

  findByFoodId(data: {
    companyId: string;
    foodId: string;
  }): Promise<FoodTBCA[]>;

  findById(data: {
    companyId: string;
    foodId: string;
    id: string;
  }): Promise<FoodTBCA | null>;

  update(data: {
    foodId: string;
    unity: string;
    valueBy100g: number;
    id: string;
    componentTBCAId: string;
  }): Promise<FoodTBCA>;
}

export { IFoodTBCARepository };
