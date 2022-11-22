export interface ICreateFoodTBCA {
  companyId: string;
  foodId: string;
  unity: string;
  valueBy100g: number;
}

export interface IGetFoodTBCA {
  companyId: string;
  foodId: string;
}

export interface IUpdateFoodTBCA {
  companyId: string;
  foodId: string;
  unity: string;
  valueBy100g: number;
}
