const {PrismaClient} = require('@prisma/client')
const express = require("express")
const jwt  = require("jsonwebtoken")

const prisma = new PrismaClient()

async function main(){
    const app =express()
    const post = await prisma.usuarios.create({
        data:{
            NAME: "Farid",
            LAST_NAME: "Valiente",
            EMAIL: "Farid.Valiente@uptc.edu.co",
            TYPE_DOCUMENT: "ti",
            DOCUMENT: "1010152996",
            STATE: "a",
            CREATION_DATE: new Date("2021-12-31 23:59:59")
        }
    })
    /** sign asincrono */
    jwt.sign({data},'secretKey',(err,token)=>{
        res.json({
            token
        })
    })
    console.log(post)
}
//authorizacion: Bearer <token>
function verifyToken(req,res,next){
    const bearerHeader= req.headers['authorizacion']
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken  = bearerHeader.split(" ")[1]
        req.token = bearerToken
        next()
    }else{
        res.sendStatus(403)
    }
}
main()
    .catch( (e)=>{
        throw e
    })
    .finally(async ()=>{
        await prisma.$disconnect()
    })