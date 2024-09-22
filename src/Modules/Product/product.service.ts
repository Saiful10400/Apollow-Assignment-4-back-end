
import Tproducts from "./product.interface";
import { productModel } from "./product.model";



// 1. create one.
const createOne = async (payload: Tproducts) => {
  const result=await productModel.create(payload)
  return result
};

//2. update one.
const updateOne=async(id:string,payload:Partial<Tproducts>)=>{
   
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
    const result= await productModel.find({isDeleted:false}).select("-isDeleted")
    return result

}

//5. find one.
const findOne=async(id:string)=>{
    const result=await productModel.findById(id)
    return result
}

const productsService={createOne,updateOne,deleteOne,findAll,findOne}

export default productsService;
