export interface IListDish {
  companyId: string;
  page: number;
  order: string;
  limit: number;
  sortBy: string;
  search?: string;
}
