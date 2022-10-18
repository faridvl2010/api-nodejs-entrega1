const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

async function main(){
    const post = await prisma.post.create({
        data:{
            title: 'Titulo 1',
            content: ''
        }
    })
}

main()
    .catch( (e)=>{
        throw e
    })
    .finally(async ()=>{
        await prisma.$disconnect()
    })