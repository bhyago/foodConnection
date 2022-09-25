interface ICreateCompany {
  companyId: string;
  name: string;
  legalname: string;
  description: string;
  logo: string;
  cnpj: string;
  type: string;
  password: string;
  email: string;
  phone: string;
  companyAddress: {
    zipcode: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
}
