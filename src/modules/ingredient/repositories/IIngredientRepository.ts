import { Ingredient } from "@prisma/client";

import {
  ICreateIngredient,
  IListIngredients,
  IUpdateIngredient,
} from "../dtos/IIngredients";

interface IIngredientRepository {
  create(data: ICreateIngredient): Promise<Ingredient>;
  update(data: IUpdateIngredient): Promise<Ingredient>;
  findById(
    id: string,
    companyId: string
  ): Promise<
    | (Ingredient & {
        ingredientAllergic: {
          allergic: {
            id: string;
            name: string;
          };
        }[];
      })
    | null
  >;

  findMany(data: IListIngredients): Promise<
    [
      number,
      (Ingredient & {
        ingredientAllergic: {
          allergic: {
            id: string;
            name: string;
          };
        }[];
      })[]
    ]
  >;
}

export { IIngredientRepository };
