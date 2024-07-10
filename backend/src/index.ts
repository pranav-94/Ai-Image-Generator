import express from 'express' 
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import multer from 'multer'
const prisma = new PrismaClient()
const app = express()

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

app.post('/promptData',upload.single('file'),async(req,res)=>{
    const PData = req.body 

    if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }

    const { originalname, mimetype, buffer } = req.file
    const savePromptData = await prisma.promptData.create({
        data: {
            promptUser: PData.user,
            promptText: PData.Text,
            promptUrl: buffer,
            mimeType: mimetype
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

    res.setHeader('Content-Type', 'image/jpeg');
    res.status(200).json({
        msg: 'done',
        data: allPosts
    })
})

app.get('/userPrompts',async(req,res)=>{
    const data = req.body 

    const userData = await prisma.promptData.findMany({
        where:{
            promptUser: data.user
        }
    })

    res.send(userData)
})

app.delete('/deleteUser',async(req,res)=>{
    const data = req.body 

   const deletedRecord =  await prisma.signUp.delete({
       where:{
        username: data.username,
        password: data.password
       }
    })

    res.status(200).json({
        msg: 'done',
        data: deletedRecord
    })
})

app.delete('/prompts',async(req,res)=>{
    await prisma.promptData.deleteMany({})
})

app.listen(3000)