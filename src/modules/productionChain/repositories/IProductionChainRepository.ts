import { ICreateProductionChain } from "../dtos/IProductionChain";

interface IProductionChainRepository {
  create(data: ICreateProductionChain): Promise<any>;
}

export { IProductionChainRepository };
