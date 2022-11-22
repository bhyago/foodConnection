export interface IResponseListProductionTypes {
  data: {
    id: string;
    name: string;
  }[];
  total: number;
}

export interface IListProductionType {
  companyId: string;
  page: number;
  order: string;
  limit: number;
  sortBy: string;
  search?: string;
}

export interface IGetProductionType {
  companyId: string;
  id: string;
}

export interface IResponseGetProductionType {
  id: string;
  name: string;
}
