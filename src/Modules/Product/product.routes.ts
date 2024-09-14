import { Router } from "express";

import zodValidation from "../../MiddleWare/zodValidation";
import productValidation from "./product.validation";


const router=Router()
// 1. create a product.
router.post("/signup",zodValidation(productValidation.productSchemaZod))






// export the module.
const productRoutes=router
export default productRoutes