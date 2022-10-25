const express = require('express')
const routes = express.Router()
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
routes.use(express.json())

//TRAER USUARIO
routes.get('/', async (req, res) => {
    const {NAME} = req.body
    const get = await prisma.usuarios.get({
        data:{
            NAME
        }
    })
    res.send(get)
})

//INSTERAR NUEVO 
routes.post('/', async (req, res) => {
    const{NAME, LAST_NAME, TYPE_DOCUMENT, DOCUMENT, STATE} = req.body
    const post = await prisma.usuarios.create({
        data:{
            NAME, LAST_NAME, TYPE_DOCUMENT, DOCUMENT, STATE, CREATION_DATE: new Date()
        }
    })
    console.log(post)
})
//Actualizar usuario de active a inactive
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
        conn.query('UPDATE user set estado ="i" WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('update inactive user')
        })
    })
})


module.exports = routes