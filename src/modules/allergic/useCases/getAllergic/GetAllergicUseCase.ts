import { IAllergicRepository } from "@modules/allergic/repository/IAllergicRepository";
import { Allergic } from "@prisma/client";
import { inject, injectable } from "tsyringe";

@injectable()
export class GetAllergicUseCase {
  constructor(
    @inject("AllergicRepository")
    private AllergicRepository: IAllergicRepository
  ) {}

  async execute(id: string): Promise<Allergic | null> {
    const response = await this.AllergicRepository.findById(id);

    return response;
  }
}
