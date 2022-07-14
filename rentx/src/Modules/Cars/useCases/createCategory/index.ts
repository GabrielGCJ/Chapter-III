import { CategoriesRepository } from "../../Repositories/implementations/CategoriesRepository";
import { CreateCategoryControler } from "./CreateCategoryControler";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

const createCategoryControler = new CreateCategoryControler(
    createCategoryUseCase
)

export { createCategoryControler }