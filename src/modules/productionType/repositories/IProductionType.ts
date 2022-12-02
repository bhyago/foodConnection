import { ProductionType } from "@prisma/client";

export interface IListProductionType {
  companyId: string;
  page: number;
  order: string;
  limit: number;
  sortBy: string;
  search?: string;
}

interface IProductionTypeRepository {
  findById(id: string, companyId: string): Promise<ProductionType | null>;
  findMany(data: IListProductionType): Promise<[number, ProductionType[]]>;
}

export { IProductionTypeRepository };
