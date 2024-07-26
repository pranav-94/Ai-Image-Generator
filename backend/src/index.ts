import express from 'express' 
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import userInfo from './zod'
import auth from './auth'
const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const JWT_KEY:any = process.env.JWT_KEY
console.log(JWT_KEY)

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.post('/signUp',async (req,res)=>{
    const userData = req.body

    const checkedData:any = userInfo.safeParse({
        username: userData.username,
        email: userData.email,
        password: userData.password
    })

    if(checkedData.success !== true){
        return res.status(400).json({
            msg: 'Input validation failed'
        })
    }

    const hashedPass = await bcrypt.hash(checkedData.data.password,10)

  const finalData = await prisma.signUp.create({
        data: {
            username: checkedData.data.username,
            email: checkedData.data.email ,
            password: hashedPass
        }
    })

    res.status(200).json({
         msg: 'done',
         data: finalData
    })
})

app.post('/signIn',async(req,res)=>{

    const verifyData = req.body 

    const verifyDb = await prisma.signUp.findFirst({
        where: {
            username: verifyData.username
        }
    })

    if(verifyDb === null){
        return res.status(400).json({
            msg: 'incorrect inputs'
        })
    }

    const verifyPassword = await bcrypt.compare(verifyData.password,verifyDb.password)

    if(!verifyPassword){
        return res.status(400).json({
            msg: 'incorrect password'
        })
    }

    const token = jwt.sign({username:verifyDb.username},JWT_KEY,{expiresIn:'1h'})

    res.status(200).json({
        msg: 'found',
        data: verifyDb,
        token: token
    })
})

app.get('/allData',auth,async(req,res)=>{

    const allData = await prisma.signUp.findMany()

    res.json({
        msg: 'success',
        data: allData
    })
})

app.post('/promptData',async(req,res)=>{
    const PData = req.body 

    const savePromptData = await prisma.promptData.create({
        data: {
            promptUser: PData.user,
            promptText: PData.Text,
        }
    })

    res.json(
        {
            msg: 'done',
            data: savePromptData
        }
    )
})


app.get('/userPrompts',async(req,res)=>{
    const data:any = req.query.user

    const userData = await prisma.promptData.findMany({
        where:{
            promptUser: data
        },
        orderBy:{
            id :'desc'
        }
    })

    res.send(userData)
})

app.delete('/deleteUser',async(req,res)=>{
    const data = req.body 

   const deletedRecord =  await prisma.signUp.delete({
       where:{
        username: data.username
       }
    })

    const deleteUserPrompts = await prisma.promptData.deleteMany({
        where:{
            promptUser: data.username
        }
    })

    const deleteUserTexts = await prisma.textData.deleteMany({
        where:{
            promptUser: data.username
        }
    })

    res.status(200).json({
        msg: 'done',
        data: deletedRecord
    })
})

app.get('/allPrompts',async(req,res)=>{
   const data =  await prisma.promptData.findMany({})

   res.send(data)
})

app.post('/textData',async(req,res)=>{
    const data = req.body 

    const checkCreate = await prisma.textData.create({
        data: {
            promptUser: data.username ,
            promptText: data.input,
            promptResult: data.output
        }
    })

    res.send(checkCreate)
    
})

app.get('/userTexts',async(req,res)=>{

    const data:any = req.query.user

    const userText = await prisma.textData.findMany({
        where :{
            promptUser: data
        }
    })

    res.send(userText)
})

// app.put('/upDateData',async(req,res)=>{
//     const data = req.body 

//     await prisma.signUp.update({
//         where:{
//             username: data.username
//         },
//         data:{
//             username: data.newUsername
//         }
//     })
// })


app.listen(3000)