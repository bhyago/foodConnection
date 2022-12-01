import { IListComponentTBCA } from "@modules/componentTBCA/dtos/IComponentTBCA";
import { IComponentTBCARepository } from "@modules/componentTBCA/repositories/IComponentTBCA";
import { ComponentTBCA } from "@prisma/client";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListComponentTBCAUseCase {
  constructor(
    @inject("ComponentTBCARepository")
    private ComponentTBCARepository: IComponentTBCARepository
  ) {}

  async execute({
    page,
    limit,
    order,
    sortBy,
    search,
  }: IListComponentTBCA): Promise<{
    data: ComponentTBCA[];
    total: number;
  }> {
    const companyTypes = await this.ComponentTBCARepository.findMany({
      page,
      limit,
      order,
      sortBy,
      search,
    });

    return {
      data: companyTypes[1],
      total: companyTypes[0],
    };
  }
}
