import { Transport } from "@prisma/client";

export interface ITransportRepository {
  create(data: {
    companyId: string;
    fabricationId: string;
    origin: string;
    destiny: string | undefined;
    startDateTime: Date;
    endDateTime: Date;
  }): Promise<Transport>;

  findById(data: {
    companyId: string;
    fabricationId: string;
  }): Promise<Transport | null>;

  update(data: {
    companyId: string;
    fabricationId: string;
    origin: string | undefined;
    destiny: string | undefined;
    startDateTime: Date;
    endDateTime: Date;
  }): Promise<Transport>;
}
