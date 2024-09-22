import express from "express"
import { Request,Response } from "express"
import routes from "./routes"
import cookieParser from "cookie-parser"
import cors from "cors"
import globalErrorHandler from "./MiddleWare/globalErrorHandler"

// declare app variable.
const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: ['http://localhost:5173',"https://apollow-assignment-4-front-end.vercel.app"], credentials: true }));
app.use("/api",routes)

app.use(globalErrorHandler)
// handle invalid route.
app.use((req:Request,res:Response)=>{
res.status(404).json({
    success:false,
    message:"Api route is invalid."
})
})



// export app.
export default app