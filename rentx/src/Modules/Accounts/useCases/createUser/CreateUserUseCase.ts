import { inject } from "tsyringe";
import { ICreateUserDTO } from "../../../DTOs/ICreateUserDTO";
import { IUsersRepository } from "../../Repositories/IUsersRepository";



class CreateUserUseCase {


    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}




    async execute({ name, username, email, password, driver_license }:ICreateUserDTO):Promise<void> {
        await this.usersRepository.create({
            name,
            username,
            email,
            password,
            driver_license 
        })
    }
}

export { CreateUserUseCase }