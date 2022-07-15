import { Router } from "express";

// import { createSpecificationController } from "../Modules/Cars/useCases/createSpecification";
import { CreateSpecificationController } from "../Modules/Cars/useCases/createSpecification/createSpecificationController";


const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.post("/",createSpecificationController.handle)

export { specificationsRoutes }