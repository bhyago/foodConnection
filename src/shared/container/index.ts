import { CompanyRepository } from "@modules/company/repositories/CompanyRepository";
import { ICompanyRepository } from "@modules/company/repositories/ICompanyRepository";
import { container } from "tsyringe";

// import "@shared/container/providers";

container.registerSingleton<ICompanyRepository>(
  "CompanyRepository",
  CompanyRepository
);
