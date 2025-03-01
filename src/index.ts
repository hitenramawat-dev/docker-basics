import { PrismaClient } from '@prisma/client'
import express from 'express'

const app = express()
const prismaClient = new PrismaClient()

app.get('/',async(req,res) => {

    const getData = await prismaClient.user.findMany()

    res.json({
        getData:getData
    })
})


app.post('/',async(req,res) => {
    const user =  await prismaClient.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })
    res.json({
        user:user
    })
})

 

app.listen(3000,() => {
    console.log('we Running at 3000');
})