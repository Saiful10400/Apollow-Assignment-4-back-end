import { z } from "zod";

const signup=z.object({
    name:z.string({message:"name mustbe a string."}),
    photoUrl:z.string({message:"photoUrl mustbe a string."}),
    phone:z.string().regex(/^\d+$/, {message:"Phone number must contain only digits"}),
    role:z.enum(["user","admin"]), // include an error message.
    bloodGroup:z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],{message:"you have to provide vaild blood group."}), // include an error message.
    address:z.string(),
    password:z.string()
})

const login=z.object({
    phone:z.string().regex(/^\d+$/, {message:"Phone number must contain only digits"}),
    password:z.string()
})






const authenticationValidationSchema={signup,login}

export default authenticationValidationSchema