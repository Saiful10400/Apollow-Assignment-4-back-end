import { Model } from "mongoose"

export interface Tuser{
    name: string,
    password:string,
    phone:string,
    photoUrl:string,
    bloodGroup:'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-',
    role: "user" | "admin"|"super-admin",
    address:string
}

export interface UserModel extends Model<Tuser>{
    isUserExixtById(id:string):Promise<Tuser>
}

export interface TuserLogin{
    email:string,
    password:string
}