import { Router } from "express";
import bookingController from "./booking.controller";



const router=Router()
// 1. create a product
router.post("/",bookingController.createOne)


// export the module.
const bookingRoutes=router
export default bookingRoutes