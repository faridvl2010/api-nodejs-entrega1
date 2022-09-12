const express = require('express')
const mysql = require('mysql')
const myconnection = require('express-myconnection')
const app = express()
app.set('port', 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'favav2010',
    database: 'users'
}
app.use(myconnection(mysql, dbOptions, 'single'))
app.get('/', (req, res) => {
    res.send('Welcome to my APIRES')
})

app.listen(app.get('port'), () => {
    console.log('server running on port ', app.get('port'))
})