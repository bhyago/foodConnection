import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { IGetFood, IResponseGetFood } from "@modules/food/dtos/IFood";
import { IFoodRepository } from "@modules/food/reposotories/IFoodRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class GetFoodsUseCase {
  constructor(
    @inject("FoodRepository")
    private foodRepository: IFoodRepository,

    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute({ companyId, id }: IGetFood): Promise<IResponseGetFood> {
    const companyExists = await this.companyRepository.findById(companyId);

    if (!companyExists) {
      throw new AppError("the informed company does not exist.");
    }

    const foodExits = await this.foodRepository.findById({
      companyId,
      id,
    });

    if (!foodExits) {
      throw new AppError("the reported food was not found.");
    }

    return {
      id: foodExits.id,
      description: foodExits.description,
      name: foodExits.name,
      type: {
        id: foodExits.id_foodtype,
        name: foodExits.foodtype.type,
      },
    };
  }
}
