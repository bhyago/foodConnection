import { Food, FoodType } from "@prisma/client";

import { ICreateFood, IListFoods, IUpdateFood } from "../dtos/IFood";

interface IFoodRepository {
  create(data: ICreateFood): Promise<Food>;
  findByName(data: { name: string; companyId: string }): Promise<Food | null>;
  findById(data: { id: string; companyId: string }): Promise<
    | (Food & {
        foodtype: FoodType;
      })
    | null
  >;

  findMany(data: IListFoods): Promise<
    [
      number,
      (Food & {
        foodtype: FoodType;
      })[]
    ]
  >;

  findTypeById(data: { foodTypeId: string }): Promise<FoodType | null>;

  update(data: IUpdateFood): Promise<
    Food & {
      foodtype: FoodType;
    }
  >;
  delete(data: { id: string; companyId: string }): Promise<void>;
}

export { IFoodRepository };
