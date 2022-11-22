import { Transport } from "@prisma/client";

import { prisma } from "@shared/infra/prisma";

import { ITransportRepository } from "./ITransportRepository";

export class TransportRepository implements ITransportRepository {
  async create(data: {
    companyId: string;
    fabricationId: string;
    origin: string;
    destiny: string;
    startDateTime: Date;
    endDateTime: Date;
  }): Promise<Transport> {
    const result = await prisma.transport.create({
      data: {
        destiny: data.destiny,
        endDateTime: data.endDateTime,
        origin: data.origin,
        startDateTime: data.startDateTime,
        fabricationId: data.fabricationId,
      },
    });

    return result;
  }

  async findById(data: {
    companyId: string;
    fabricationId: string;
  }): Promise<Transport | null> {
    const result = await prisma.transport.findFirst({
      where: {
        fabricationId: data.fabricationId,
      },
    });

    return result;
  }

  async update(data: {
    id: string;
    companyId: string;
    fabricationId: string;
    origin: string;
    destiny: string;
    startDateTime: Date;
    endDateTime: Date;
  }): Promise<Transport> {
    const result = await prisma.transport.update({
      data: {
        destiny: data.destiny,
        endDateTime: data.endDateTime,
        fabricationId: data.fabricationId,
        origin: data.origin,
        startDateTime: data.startDateTime,
      },
      where: {
        fabricationId: data.fabricationId,
      },
    });

    return result;
  }
}
