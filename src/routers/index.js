const express = require('express')
const routers = express.Router()

const movies = require('./movies')
const booking = require('./booking')
const schedule = require('./schedule')


routers.use('/booking', booking)
routers.use('/movies', movies)
routers.use('/schedule', schedule)

module.exports = routers