import { Intervention } from "@prisma/client";

import {
  ICreateIntervention,
  IGetIntervention,
  IListIntervention,
  IUpdateIntervention,
} from "../dtos/IIntervention";

export interface IInterventionChainRepository {
  create(data: ICreateIntervention): Promise<Intervention>;
  update(data: IUpdateIntervention): Promise<Intervention>;
  listById(data: IGetIntervention): Promise<Intervention | null>;
  listMany(data: IListIntervention): Promise<[number, Intervention[]]>;
}
