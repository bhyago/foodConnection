import { IComponentTBCARepository } from "@modules/componentTBCA/repositories/IComponentTBCARepository";
import { ComponentTBCA } from "@prisma/client";
import { inject, injectable } from "tsyringe";

@injectable()
export class GetComponentTBCAUseCase {
  constructor(
    @inject("ComponentTBCARepository")
    private ComponentTBCARepository: IComponentTBCARepository
  ) {}

  async execute(id: string): Promise<ComponentTBCA | null> {
    const response = await this.ComponentTBCARepository.findById(id);

    return response;
  }
}
