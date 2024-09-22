import { model, Schema } from "mongoose";
import Tbooking from "./booking.interface";



const productSchema = new Schema<Tbooking>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    payment:{type:String,required:false,default:"cod"},
    booking: [
      {
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        count: { type: Number, required: true },
      }
    ]
  });



export const bookingModel = model<Tbooking>("Booking", productSchema);
