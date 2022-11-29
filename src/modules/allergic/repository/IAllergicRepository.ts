import { Allergic } from "@prisma/client";

import { IListAllergic } from "../dtos/IAllergic";

interface IAllergicRepository {
  findById(id: string): Promise<Allergic | null>;
  findMany(data: IListAllergic): Promise<[number, Allergic[]]>;
}

export { IAllergicRepository };
