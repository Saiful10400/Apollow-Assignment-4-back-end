import { z } from "zod";

const productSchemaZod = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  brand: z.string().min(1, { message: "Brand is required" }),
  img: z.string().url({ message: "Invalid image URL" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  description: z.string().min(1, { message: "Description is required" }),
  quantity: z.number().int().min(0, { message: "Quantity must be a non-negative integer" }),
  rating: z.number().min(0, { message: "Rating must be between 0 and 5" }).max(5, { message: "Rating must be between 0 and 5" }),
});

// Update schema
const updateProductSchemaZod = z.object({
  name: z.string().min(1, { message: "Name is required" }).optional(),
  brand: z.string().min(1, { message: "Brand is required" }).optional(),
  img: z.string().url({ message: "Invalid image URL" }).optional(),
  price: z.number().positive({ message: "Price must be a positive number" }).optional(),
  description: z.string().min(1, { message: "Description is required" }).optional(),
  quantity: z.number().int().min(0, { message: "Quantity must be a non-negative integer" }).optional(),
  rating: z.number().min(0, { message: "Rating must be between 0 and 5" }).max(5, { message: "Rating must be between 0 and 5" }).optional(),
});

const productValidation={productSchemaZod,updateProductSchemaZod}
export default productValidation