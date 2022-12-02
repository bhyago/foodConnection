export interface ICreateIntervention {
  companyId: string;
  productionChainId: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
}

export interface IUpdateIntervention {
  companyId: string;
  id: string;
  productionChainId: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
}

export interface IGetIntervention {
  companyId: string;
  id: string;
  productionChainId: string;
}

export interface IListIntervention {
  companyId: string;
  productionChainId: string;
  page: number;
  order: string;
  limit: number;
  sortBy: string;
  search?: string;
}
