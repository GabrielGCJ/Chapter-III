import { Router } from "express";
import { CreateUserController } from "../Modules/Accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router()

const createUserController = new CreateUserController()

usersRoutes.post("/", createUserController.handle)

export { usersRoutes }