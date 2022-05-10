const express = require('express')
const routers = express.Router()

const movies = require('./movies')
const booking = require('./booking')
const schedule = require('./schedule')
const users = require('./users')
const auth = require('./auth')


routers.use('/booking', booking)
routers.use('/movies', movies)
routers.use('/schedule', schedule)
routers.use('/users', users)
routers.use('/auth', auth)

module.exports = routers