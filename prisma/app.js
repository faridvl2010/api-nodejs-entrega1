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
    console.log(post)
}

main()
    .catch( (e)=>{
        throw e
    })
    .finally(async ()=>{
        await prisma.$disconnect()
    })