const express = require('express')
const mysql = require('mysql')
const myconnection = require('express-myconnection')
const app = express()
const routes = require('./routes')
app.set('port', 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'users'
}
app.use(myconnection(mysql, dbOptions, 'single'))
//route
app.get('/', (req, res) => {
    res.send('Welcome to my APIREST')
})
app.use('/api',routes)
//Runnig
app.listen(app.get('port'), () => {
    console.log('server running on port ', app.get('port'))
})