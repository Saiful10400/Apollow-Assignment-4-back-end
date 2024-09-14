import { Request, Response } from "express";
import catchAsync from "../../Utility/catchAsync";
import sendResponse from "../../Utility/sendResponse";
import httpStatus from "http-status";

//1. create a create a product.
const createAProduct = catchAsync(async (req: Request, res: Response) => {

  
});


const productController={createAProduct}

export default productController