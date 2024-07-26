import { Request,Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken'
const JWT_KEY:any = process.env.JWT_KEY

const auth =(req:Request,res:Response,next:NextFunction)=>{
   const authHeader = req.headers.authorization
   const token = authHeader 

   if(!token){
      return res.json({msg:"token required"})
   }

   const verify = jwt.verify(token,JWT_KEY,(error:any)=>{
      if(error){
         return res.json({msg: 'wrong token'})
      }
   })
   next()
}

export default auth