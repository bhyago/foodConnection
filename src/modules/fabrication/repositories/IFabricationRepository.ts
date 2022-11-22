import { Fabrication } from "@prisma/client";

import { ICreateFabrication, IGetFabrication } from "../dtos/IFabrication";

interface IFabricationRepository {
  create(data: ICreateFabrication): Promise<Fabrication>;
  findById({
    companyId,
    id,
    productionChainId,
  }: IGetFabrication): Promise<Fabrication | null>;
}

export { IFabricationRepository };
