export interface ICreateProductionChain {
  productionTypeId: string;
  foodId: string;
  companyId: string;
  IngredientIds: number[];
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  providerIds: number[];
}

// interventions: {
//   interventionsTypeId: number;
//   description: string;
//   startDateTime: Date;
//   endDateTime: Date;
// }[];


foodCompositionTBCA

id
description
componeteId
unidade
Valor por 100g
referecia
