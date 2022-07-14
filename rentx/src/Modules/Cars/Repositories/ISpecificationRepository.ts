import { Specification } from "../model/Specification"

interface ICreateSpecificationDTO{
    name: string,
    description: string
}

interface ISpecificotionsRepository {

    create({description, name} : ICreateSpecificationDTO): void
    findByName( name: string ): Specification;
}

export {ICreateSpecificationDTO,ISpecificotionsRepository}



