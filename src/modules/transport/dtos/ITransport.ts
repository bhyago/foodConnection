export interface ICreateTransport {
  companyId: string;
  fabricationId: string;
  originAddress: {
    street: string;
    number: string;
    complement: string;
    zipCode: string;
    city: string;
    state: string;
    neighborhood: string;
  };
  destinyAddress: {
    street: string;
    number: string;
    complement: string;
    zipCode: string;
    city: string;
    state: string;
    neighborhood: string;
  };
  startDateTime: Date;
  endDateTime: Date;
}

export interface IGetTransport {
  companyId: string;
  fabricationId: string;
}

export interface IUpdateTransport {
  companyId: string;
  fabricationId: string;
  originAddress: {
    street: string;
    number: string;
    complement: string;
    zipCode: string;
    city: string;
    state: string;
    neighborhood: string;
  };
  destinyAddress: {
    street: string;
    number: string;
    complement: string;
    zipCode: string;
    city: string;
    state: string;
    neighborhood: string;
  };
  startDateTime: Date;
  endDateTime: Date;
}
