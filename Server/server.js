const express = require('express')
const app = express()
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
app.use(express.json())

const routes = require('./routes')
app.set('port', 3000)



//route
app.get('/', (req, res) => {
    res.send('Welcome to my APIREST')
})

app.use('/api', routes)

//Runnig
app.listen(app.get('port'), () => {
    console.log('server running on port ', app.get('port'))
}) 