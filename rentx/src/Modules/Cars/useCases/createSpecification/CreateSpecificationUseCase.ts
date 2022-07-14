import { ISpecificotionsRepository } from "../../Repositories/ISpecificationRepository";

interface IRequest{
    name : string;
    description: string
}

class CreateSpecificationUseCase {
    constructor( private specificationRepository: ISpecificotionsRepository){}
    execute({ name, description }: IRequest):void {
      const specificatinAllReadyExists = this.specificationRepository.findByName(name)

      if(specificatinAllReadyExists){throw new Error("Especificação já existe!")}


        this.specificationRepository.create({
            name,
            description
        })
    }
}

export { CreateSpecificationUseCase } 