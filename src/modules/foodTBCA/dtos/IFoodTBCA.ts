export interface ICreateFoodTBCA {
  companyId: string;
  foodId: string;
  unity: string;
  valueBy100g: number;
  componentTBCAId: string;
}

export interface IGetFoodTBCA {
  companyId: string;
  foodId: string;
}

export interface IUpdateFoodTBCA {
  companyId: string;
  id: string;
  foodId: string;
  unity: string;
  valueBy100g: number;
  componentTBCAId: string;
}
