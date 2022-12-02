import { ComponentTBCA } from "@prisma/client";

import { IListComponentTBCA } from "../dtos/IComponentTBCA";

export interface IComponentTBCARepository {
  findById(id: string): Promise<ComponentTBCA | null>;
  findMany(data: IListComponentTBCA): Promise<[number, ComponentTBCA[]]>;
}
