import { Ingredient } from "@prisma/client";

import {
  ICreateIngredient,
  IListIngredients,
  IUpdateIngredient,
} from "../dtos/IIngredients";

interface IIngredientRepository {
  create(data: ICreateIngredient): Promise<Ingredient>;
  update(data: IUpdateIngredient): Promise<Ingredient>;
  findById(id: string, companyId: string): Promise<Ingredient | null>;
  findMany(data: IListIngredients): Promise<[number, Ingredient[]]>;
}

export { IIngredientRepository };
