import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IResponseUpdateFood, IUpdateFood } from "@modules/food/dtos/IFood";
import { IFoodRepository } from "@modules/food/reposotories/IFoodRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class UpdateFoodUseCase {
  constructor(
    @inject("FoodRepository")
    private foodRepository: IFoodRepository,

    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute({
    companyId,
    id,
    description,
    foodTypeId,
    name,
  }: IUpdateFood): Promise<IResponseUpdateFood> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const foodTypeExists = await this.foodRepository.findTypeById({
      foodTypeId,
    });

    if (!foodTypeExists) {
      throw new AppError("the type of food informed does not exist");
    }

    const foodExits = await this.foodRepository.findById({
      companyId,
      id,
    });

    if (!foodExits) {
      throw new AppError("the reported food was not found.");
    }

    const response = await this.foodRepository.update({
      companyId,
      description,
      foodTypeId,
      id,
      name,
    });

    return {
      id: response.id,
      description: response.description,
      name: response.name,
      type: {
        id: response.id_foodtype,
        name: response.foodtype.type,
      },
    };
  }
}
