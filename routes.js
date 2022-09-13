const express = require('express')
const routes = express.Router()
//TRAER USUARIO
routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM users.new_table;', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})
//INSTERAR NUEVO 
routes.post('/', (req, res) => {
    console.log(req.body)
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO user set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send('user add')
        })
    })
})
//Actualizar usuario
routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('UPDATE user set ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('user updated!')
        })
    })
})
//ACTUALIZAR ESTADO de un atributo
routes.patch('/:id', (req, res) => {
    let id = Number(req.params.id)
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('UPTADE user set state ="?" WHERE id = ?', [req.body, id], (err, rows) => {
            if (err) return res.send(err)
            res.send('inactive user')
        })
    })
})


module.exports = routes