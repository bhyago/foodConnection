"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransportRepository = void 0;
var _prisma = require("@shared/infra/prisma");
class TransportRepository {
  async create(data) {
    const result = await _prisma.prisma.transport.create({
      data: {
        destiny: data.destiny,
        endDateTime: data.endDateTime,
        origin: data.origin,
        startDateTime: data.startDateTime,
        fabricationId: data.fabricationId
      }
    });
    return result;
  }
  async findById(data) {
    const result = await _prisma.prisma.transport.findFirst({
      where: {
        fabricationId: data.fabricationId
      }
    });
    return result;
  }
  async update(data) {
    const result = await _prisma.prisma.transport.update({
      data: {
        destiny: data.destiny,
        endDateTime: data.endDateTime,
        fabricationId: data.fabricationId,
        origin: data.origin,
        startDateTime: data.startDateTime
      },
      where: {
        fabricationId: data.fabricationId
      }
    });
    return result;
  }
}
exports.TransportRepository = TransportRepository;