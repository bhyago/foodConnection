import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";


interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({username, password}: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryMan.findFirst({
      where: {
        username
      }
    })    

    if (!deliveryman) {
      throw new Error("Username or password invalid!")
    }

    const passwordMatch = await compare(password, deliveryman.password)

    if (!passwordMatch) {
      throw new Error("Username or passoword invalid!")
    }

    const token = sign({ username }, "89a2917f0f6e8775fb40e4009bbbdce1d", {
      subject: deliveryman.id,
      expiresIn: "1d"
    })

    return token


  }


}