import { AllergicRepository } from "@modules/allergic/repository/AlergicRepository";
import { IAllergicRepository } from "@modules/allergic/repository/IAllergicRepository";
import { BashDishProductionChainRepository } from "@modules/bashDishProducionChain/repository/BashDishProductionChainRepository";
import { IBashDishProductionChainRepository } from "@modules/bashDishProducionChain/repository/IBashDishProductionChainRepository";
import { CompanyRepository } from "@modules/company/repositories/CompanyRepository";
import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { CompanyTypeRepository } from "@modules/companyType/repositories/CompanyTypeRepository";
import { ICompanyTypeRepository } from "@modules/companyType/repositories/ICompanyTypeRepository";
import { ComponentTBCARepository } from "@modules/componentTBCA/repositories/ComponentTBCARepository";
import { IComponentTBCARepository } from "@modules/componentTBCA/repositories/IComponentTBCARepository";
import { DishRepository } from "@modules/dish/repository/DishRepository";
import { IDishRepository } from "@modules/dish/repository/IDishRepository";
import { FoodRepository } from "@modules/food/reposotories/FoodRepository";
import { IFoodRepository } from "@modules/food/reposotories/IFoodRepository";
import { FoodTBCARepository } from "@modules/foodTBCA/repositories/FoodTBCARepositroy";
import { IFoodTBCARepository } from "@modules/foodTBCA/repositories/IFoodTBCARepository";
import { IIngredientRepository } from "@modules/ingredient/repositories/IIngredientRepository";
import { IngredientRepository } from "@modules/ingredient/repositories/IngredientRepository";
import { IProductionChainRepository } from "@modules/productionChain/repositories/IProductionChainRepository";
import { ProductionChainRepository } from "@modules/productionChain/repositories/ProductionChainRepository";
import { IProductionTypeRepository } from "@modules/productionType/repositories/IProductionType";
import { ProductionTypeRepository } from "@modules/productionType/repositories/ProductionTypeRepository";
import { IProviderRepository } from "@modules/provider/repositories/IProviderRepository";
import { ProviderRepository } from "@modules/provider/repositories/ProviderRepository";
import { ITransportRepository } from "@modules/transport/repositories/ITransportRepository";
import { TransportRepository } from "@modules/transport/repositories/TransportRepository";
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

container.registerSingleton<IIngredientRepository>(
  "IngredientRepository",
  IngredientRepository
);

container.registerSingleton<IProductionTypeRepository>(
  "ProductionTypeRepository",
  ProductionTypeRepository
);

container.registerSingleton<IFoodTBCARepository>(
  "FoodTBCARepository",
  FoodTBCARepository
);

container.registerSingleton<ITransportRepository>(
  "TransportRepository",
  TransportRepository
);

container.registerSingleton<IProductionChainRepository>(
  "ProductionChainRepository",
  ProductionChainRepository
);

container.registerSingleton<IAllergicRepository>(
  "AllergicRepository",
  AllergicRepository
);

container.registerSingleton<ICompanyTypeRepository>(
  "CompanyTypeRepository",
  CompanyTypeRepository
);

container.registerSingleton<IComponentTBCARepository>(
  "ComponentTBCARepository",
  ComponentTBCARepository
);

container.registerSingleton<IDishRepository>("DishRepository", DishRepository);

container.registerSingleton<IBashDishProductionChainRepository>(
  "BashDishProductionChainRepository",
  BashDishProductionChainRepository
);
