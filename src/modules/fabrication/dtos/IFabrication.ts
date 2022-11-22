export interface ICreateFabrication {
  companyId: string;
  productionChainId: string;
  batch: string;
  fabricationDate: string;
  validadeDate: string;
}

export interface IGetFabrication {
  id: string;
  productionChainId: string | undefined;
  companyId: string;
}
