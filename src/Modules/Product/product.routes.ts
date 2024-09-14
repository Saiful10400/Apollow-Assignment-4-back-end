import { Router } from "express";

import zodValidation from "../../MiddleWare/zodValidation";
import productValidation from "./product.validation";
import productController from "./product.controller";


const router=Router()
// 1. create a product
router.post("/",zodValidation(productValidation.productSchemaZod),productController.createOne)

// 2. update a product
router.put("/:id",zodValidation(productValidation.updateProductSchemaZod),productController.updateOne)

// 3 get a product
router.get("/:id",productController.findOne)

// 4. get all product
router.get("/",productController.findAll)

// 5. delete a product
router.delete("/signup",productController.deleteOne)






// export the module.
const productRoutes=router
export default productRoutes