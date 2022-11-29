import { IListAllergic } from "@modules/allergic/dtos/IAllergic";
import { IAllergicRepository } from "@modules/allergic/repository/IAllergicRepository";
import { Allergic } from "@prisma/client";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListAllergicUseCase {
  constructor(
    @inject("AllergicRepository")
    private AllergicRepository: IAllergicRepository
  ) {}

  async execute({
    limit,
    order,
    page,
    sortBy,
    search,
  }: IListAllergic): Promise<{
    data: Allergic[];
    total: number;
  }> {
    const allergic = await this.AllergicRepository.findMany({
      page,
      limit,
      order,
      sortBy,
      search,
    });

    return {
      data: allergic[1],
      total: allergic[0],
    };
  }
}
