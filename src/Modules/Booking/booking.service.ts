import mongoose from "mongoose";
import Tbooking from "./booking.interface";
import { bookingModel } from "./booking.model";
import { productModel } from "../Product/product.model";

// 1. create one.
const createOne = async (payload: Tbooking) => {
  // update product .
  const bulkOpt = payload.booking.map((item) => ({
    updateOne: {
      filter: { _id: new mongoose.Types.ObjectId(item.product) },
      update: { $inc: { quantity: -item.count } },
    },
  }));

  const updateProductResult = await productModel.bulkWrite(bulkOpt);
  const bookingCreateResult = await bookingModel.create(payload);
  return { updateProductResult, bookingCreateResult };
};

const bookingService = { createOne };

export default bookingService;
