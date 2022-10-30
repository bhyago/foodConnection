interface IProvider {
  providerId?: string;
  name: string;
  cnpj: string;
  companyId: string;
  area: string;
  active: boolean;
}

interface IUpdateProvider extends IProvider {
  providerId: string;
}

interface IGetProvider {
  providerId: string;
  companyId: string;
}

interface IListProviders {
  companyId: string;
  limit: number;
  page: number;
  sortBy: string;
  order: string;
  search: string;
}
