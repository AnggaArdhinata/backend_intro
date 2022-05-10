require('dotenv').config()
const express = require('express')
const route = require('./src/routers')
const db = require('./src/configs/db')
const cors = require('cors')

const server = express()

// eslint-disable-next-line no-undef
const {APP_PORT} = process.env

server.use(express.urlencoded({extended: false}))
server.use(express.json())
server.use(cors())
server.use('/public', express.static('public'))
server.use('/api/v1',route)

db.connect().then (() => {
    console.log('Data base connected')

    server.listen(APP_PORT, () => {
        console.log(`Service run on port: ${APP_PORT}`)
    })
}).catch(er => {
    console.log(er);
})



