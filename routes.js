const express = require('express')
const routes = express.Router()
routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM users.new_table;', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    console.log(req.body)
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO users.new_table set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('user added!')
        })
    })
})

module.exports = routes