import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { ICreateCompany } from "../../dtos/ICompany";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {}

  async execute(data: ICreateCompany): Promise<{ id: string }> {
    const emailAlreadyExists = await this.companyRepository.findByEmail(
      data.email
    );

    if (emailAlreadyExists) {
      throw new AppError("Email provided is already used.");
    }
    const passwordHash = await hash(data.password, 8);

    const response = await this.companyRepository.create({
      name: data.name,
      email: data.email,
      typeId: data.typeId,
      password: passwordHash,
      cnpj: data.cnpj,
      description: data.description,
      legalname: data.legalname,
      logo: data.logo,
      phone: data.phone,
      type: data.type,
      companyAddress: data.companyAddress,
    });

    return { id: response.id };
  }
}

export { CreateCompanyUseCase };
