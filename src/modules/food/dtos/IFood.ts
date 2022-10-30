export interface ICreateFood {
  id?: string;
  name: string;
  foodTypeId: string;
  description: string;
  companyId: string;
}

export interface IListFoods {
  companyId: string;
  page: number;
  order: string;
  limit: number;
  sortBy: string;
  search?: string;
}

export interface IResponseListFoods {
  data: {
    id: string;
    name: string;
    description: string | null;
    type: {
      id: string;
      name: string;
    };
  }[];
  total: number;
}

export interface IGetFood {
  companyId: string;
  id: string;
}

export interface IUpdateFood {
  id: string;
  name: string;
  foodTypeId: string;
  description: string;
  companyId: string;
}

export interface IDeleteFood {
  companyId: string;
  id: string;
}

export interface IResponseGetFood {
  id: string;
  name: string;
  description: string | null;
  type: {
    id: string;
    name: string;
  };
}

export interface IResponseUpdateFood {
  id: string;
  name: string;
  description: string | null;
  type: {
    id: string;
    name: string;
  };
}
