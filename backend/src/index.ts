import express from 'express' 
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.post('/signUp',async (req,res)=>{
    const userData = req.body

   await prisma.signUp.create({
        data: {
            username: userData.username,
            password: userData.password
        }
    })

    res.send('done')
})

app.post('/signIn',async(req,res)=>{

    const verifyData = req.body 

    const verifyDb = await prisma.signUp.findFirst({
        where: {
            username: verifyData.username,
            password: verifyData.password
        }
    })

    if(verifyDb === null){
        return res.status(400).json({
            msg: 'incorrect inputs'
        })
    }

    res.status(200).json({
        msg: 'found',
        data: verifyDb
    })
})

app.get('/allData',async(req,res)=>{

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
            promptText: PData.Text,
            promptUrl: PData.Url
        }
    })

    res.json(
        {
            msg: 'done',
            data: savePromptData
        }
    )
})

app.get('/allPosts',async(req,res)=>{
    const allPosts = await prisma.promptData.findMany()

    res.status(200).json({
        msg: 'done',
        data: allPosts
    })
})

app.listen(3000)