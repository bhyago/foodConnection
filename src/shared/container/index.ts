import { CompanyRepository } from "@modules/company/repositories/CompanyRepository";
import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { FoodRepository } from "@modules/food/reposotories/FoodRepository";
import { IFoodRepository } from "@modules/food/reposotories/IFoodRepository";
import { IProviderRepository } from "@modules/provider/repositories/IProviderRepository";
import { ProviderRepository } from "@modules/provider/repositories/ProviderRepository";
import { container } from "tsyringe";

// import "@shared/container/providers";

container.registerSingleton<ICompanyRepository>(
  "CompanyRepository",
  CompanyRepository
);

container.registerSingleton<IProviderRepository>(
  "ProviderRepository",
  ProviderRepository
);

container.registerSingleton<IFoodRepository>("FoodRepository", FoodRepository);
