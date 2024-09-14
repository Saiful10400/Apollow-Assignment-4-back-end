import { Request, Response } from "express";
import catchAsync from "../../Utility/catchAsync";
import sendResponse from "../../Utility/sendResponse";
import httpStatus from "http-status";
import productsService from "./product.service";

//1. create one
const createOne = catchAsync(async (req: Request, res: Response) => {
  const data = await productsService.createOne(req.body);

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: data,
    message: "product created successfully",
  });
});

//2. udpate one.

const updateOne = catchAsync(async (req: Request, res: Response) => {
    const data = await productsService.updateOne((req.query.id) as string,req.body);
  
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: data,
      message: "product updated successfully",
    });
  });

  //3. delete one.
  const deleteOne=catchAsync(async (req: Request, res: Response) => {
    const data = await productsService.deleteOne((req.query.id) as string);
  
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: data,
      message: "product updated successfully",
    });
  });

  //4. get one.
 const findOne=catchAsync(async (req: Request, res: Response) => {
    const data = await productsService.findOne((req.query.id) as string);
  
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: data,
      message: "product fetched successfully",
    });
  });

  //5. get all.
 const getAll=catchAsync(async (req: Request, res: Response) => {
    const data = await productsService.findOne((req.query.id) as string);
  
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: data,
      message: "products fetched successfully",
    });
  });

const productController = { createOne,updateOne,deleteOne,findOne,getAll };

export default productController;
