import { container } from "tsyringe";

import { ICategoriesRepository } from "../../Modules/Cars/Repositories/ICategoriesRepository"
import { CategoriesRepository } from "../../Modules/Cars/Repositories/implementations/CategoriesRepository"


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)