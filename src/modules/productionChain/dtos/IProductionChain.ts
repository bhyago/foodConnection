export interface ICreateProductionChain {
  productionTypeId: string;
  name: string;
  foodId: string;
  companyId: string;
  ingredientIds: string[];
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  providerIds: string[];
  quantity: number;
}

export interface IGetProductionChain {
  id: string;
  companyId: string;
}

export interface IListProductionChain {
  companyId: string;
  page: number;
  order: string;
  limit: number;
  sortBy: string;
  search?: string;
}

export interface IUpdateProductionChain {
  id: string;
  productionTypeId: string;
  name: string;
  foodId: string;
  companyId: string;
  ingredientIds: string[];
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  providerIds: string[];
  quantity: number;
}

// interventions: {
// productionChainId:
//   description: string;
//   startDateTime: Date;
//   endDateTime: Date;
// }[];

// trasport {
//   fabricationId:
//   origem:
//   destino:
//   rota:
//   startDateTime: Date;
//   endDateTime: Date;
// }

// gluten
// lactose
// crustaceos
// huevos
// pescado
// peixe
// amendoim
// soja
// leite manifero
// amendoa
// avelã
// castanha de caju
// castanha do pará
// mancadamia
// nozes
// pinoli
// latex natural
// gluten

// sem crud
// alergicos:
// id:
// name:
