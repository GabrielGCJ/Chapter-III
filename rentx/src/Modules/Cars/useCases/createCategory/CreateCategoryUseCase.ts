import { ICategoriesRepository } from "../../Repositories/ICategoriesRepository"

interface IRequest {
    name:string,
    description:string
}

class CreateCategoryUseCase {
   
    constructor ( private categoriesRepository: ICategoriesRepository ) {}

    execute({description, name}:IRequest): void{

        const categoryAllReadyExists = this.categoriesRepository.findByName(name)
    
        if(categoryAllReadyExists){
            throw new Error( "Categoria já existe!!!")
        }
    
        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }