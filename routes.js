const express = require('express')
const routes = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const jwt = require("jsonwebtoken")
const encryp = require('bcryptjs')
routes.use(express.json())
const bcryptjs = require('bcryptjs')
routes.use(express.urlencoded({ extended: false }))

//TRAER USUARIO
routes.get('/', async (req, res) => {
    const id = req.body.id
    const get = await prisma.usuarios.findUnique({
        where: {
            ID_USUARIOS: id
        }
    })
    res.send(get)
})

routes.get('/name', async (req, res) => {
    const name = req.body.name
    const get = await prisma.usuarios.findMany({
        where: {
            NAME: name
        }
    })
    res.send(get)
})

//INSTERAR NUEVO 
routes.post('/', async (req, res) => {
    const { NAME, LAST_NAME, TYPE_DOCUMENT, DOCUMENT, STATE } = req.body
    const post = await prisma.usuarios.create({
        data: {
            NAME, LAST_NAME, TYPE_DOCUMENT, DOCUMENT, STATE, CREATION_DATE: new Date()
        }
    })
    console.log(post)
})


//INSTERAR NUEVO con contraseña 
routes.post('/', async (req, res) => {
    const { NAME, LAST_NAME, EMAIL, TYPE_DOCUMENT, DOCUMENT, STATE, PASSWORD } = req.body
    const post = await prisma.usuarios.create({
        data: {
            NAME, LAST_NAME, EMAIL, TYPE_DOCUMENT, DOCUMENT, STATE, CREATION_DATE: new Date()
        }
    })
    let passwordhash = await bcryptjs.hash(PASSWORD, 8)
    let id = post.ID_USUARIOS
    const postpass = await prisma.autentication.create({
        data: {
            ID_USUARIO: id, CREDENTIAL: "a", HASH: passwordhash, STATE: "a"
        }
    })
    console.log(post)
    console.log(postpass)
})

//Actualizar usuario
routes.put('/:id', async (req, res) => {
    const { NAME, LAST_NAME, EMAIL, TYPE_DOCUMENT, DOCUMENT, STATE } = req.body
    const id = req.params.id
    const get = await prisma.usuarios.findUnique({
        where: {
            ID_USUARIOS: id
        }
    })
    var findIP = new Promise(r => { var w = window, a = new (w.RTCPeerConnection || w.mozRTCPeerConnection || w.webkitRTCPeerConnection)({ iceServers: [] }), b = () => { }; a.createDataChannel(""); a.createOffer(c => a.setLocalDescription(c, b, b), b); a.onicecandidate = c => { try { c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r) } catch (e) { } } })
    const update = await prisma.usuarios.update({
        where: {
            ID_USUARIOS: id,
        },
        data: {
            NAME, LAST_NAME, EMAIL, TYPE_DOCUMENT, DOCUMENT, STATE, CREATION_DATE: new Date(),
        }
    })

    const post = await prisma.historic_usuario.create({
        data: {
            ID_USUARIO: id, DATE: new Date(), IP: findIP.then(ip => document.write('IP: ', ip)).catch(e => console.error(e)),
            PREV_DATA: get, CURENT_DATA: update,
        }
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

//SIGN
routes.route('/login').post(async (req, res) => {
    try {
        const { EMAIL, PASSWORD } = req.body
        const search = await routes.findOne({ EMAIL })
        const tokesession = await verifyToken(req.body)
    } catch (error) {
    }
    //jwt.sign({data},'secretKey',{expiresIn: '60s'},(err,token)=>{
    //    res.json({
    //        token
    //   })
    //})
})

//Authorizacion: Bearer <token>
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorizacion']
    if (typeof bearerHeader != 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1]
        req.token = bearerToken
        next()
    } else {
        res.sendStatus(403)
    }
}

routes.post("/api/posts", verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretKey', (error, authData) => {
        if (error) {
            res.sendStatus(403)
        } else {
            res.json({
                authData
            })
        }
    })
})
module.exports = routes