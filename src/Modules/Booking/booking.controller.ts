import { Request, Response } from "express";
import catchAsync from "../../Utility/catchAsync";
import sendResponse from "../../Utility/sendResponse";
import httpStatus from "http-status";
import bookingService from "./booking.service";


//1. create one
const createOne = catchAsync(async (req: Request, res: Response) => {
  const data = await bookingService.createOne(req.body);
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: data,
    message: "Order Placed successfully",
  });
});



const bookingController = { createOne };

export default bookingController;
