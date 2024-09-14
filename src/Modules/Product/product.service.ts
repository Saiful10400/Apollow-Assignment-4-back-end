import httpStatus from "http-status";
import appError from "../../Errors/appError";
import Tproducts from "./product.interface";
import { productModel } from "./product.model";



// 1. signup.
const createOne = async (payload: Tproducts) => {
  const result=await productModel.create(payload)
  return result
};

//2. update one.
const updateOne=async({id,payload}:{id:string,payload:Partial<Tproducts>})=>{
    const result=await productModel.findByIdAndUpdate(id,payload,{new:true})
    return result
}

// 3. delete one.
const deleteOne=async(id:string)=>{
    const result=await productModel.findByIdAndUpdate(id,{isDeleted:true})
    return result
}

// 4. find all.
const findAll=async()=>{
    const result= await productModel.find()
    return result

}

//5. find one.
const findOne=async(id:string)=>{
    const result=await productModel.findById(id)
    return result
}

const productsService={createOne,updateOne,deleteOne,findAll}

export default productsService;
