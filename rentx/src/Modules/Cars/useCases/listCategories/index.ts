import { CategoriesRepository } from "../../Repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";



const categoriesRepository = null

const listCategoriesUseCase = new ListCategoriesUseCase(CategoriesRepository)

const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
)

export { listCategoriesController }