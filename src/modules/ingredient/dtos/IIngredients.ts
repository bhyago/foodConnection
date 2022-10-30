export interface ICreateIngredient {
  name: string;
  description: string;
  companyId: string;
}

export interface IGetIngredient {
  id: string;
  companyId: string;
}

export interface IResponseIngredient {
  id: string;
  name: string;
  description: string | null;
  registerDate: string;
}

export interface IUpdateIngredient {
  id: string;
  companyId: string;
  name: string;
  description: string;
}

export interface IListIngredients {
  companyId: string;
  page: number;
  order: string;
  limit: number;
  sortBy: string;
  search?: string;
}
