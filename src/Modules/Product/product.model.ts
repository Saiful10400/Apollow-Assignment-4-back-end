import { model, Schema } from "mongoose";
import Tproducts from "./product.interface";


const productSchema = new Schema<Tproducts>({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
 price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});



export const productModel = model<Tproducts>("Product", productSchema);
