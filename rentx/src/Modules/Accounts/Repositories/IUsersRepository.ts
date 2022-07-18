import { ICreateUserDTO } from "../DTOs/ICreateUserDTO"
import { User } from "../Entities/User"


interface IUsersRepository {
    create(data:ICreateUserDTO ):Promise<void>
    findByEmail(email:string):Promise <User>
}

export { IUsersRepository }