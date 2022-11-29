export interface ICreateIngredient {
  name: string;
  description: string;
  companyId: string;
  vegan: boolean;
  allergicIds: string[];
}

export interface IGetIngredient {
  id: string;
  companyId: string;
}

export interface IResponseIngredient {
  id: string;
  name: string;
  vegan: boolean;
  description: string | null;
  allergic:
    | {
        id: string;
        name: string;
      }[]
    | null;
  registerDate: string;
  updatedDate?: string;
}

export interface IUpdateIngredient {
  id: string;
  companyId: string;
  name: string;
  description: string;
  vegan: boolean;
}

export interface IListIngredients {
  companyId: string;
  page: number;
  order: string;
  limit: number;
  sortBy: string;
  search?: string;
}
