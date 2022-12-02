import { Provider } from "@prisma/client";

export interface IProviderRepository {
  create(data: IProvider): Promise<Provider>;
  update(data: IUpdateProvider): Promise<Provider>;
  findByCnpj(cnpj: string, companyId: string): Promise<Provider | null>;
  findById(providerId: string, companyId: string): Promise<Provider | null>;
  listProviders({
    companyId,
    limit,
    page,
    sortBy,
    order,
    search,
  }: IListProviders): Promise<[number, Provider[]]>;
}
