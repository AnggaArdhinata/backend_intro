const express = require('express')
const routers = express.Router()
const ctrl = require('../controllers/movies')
const validate = require('../middleware/validate')
const upload = require('../middleware/upload')

routers.get('/', ctrl.getAll)
routers.post('/', validate, upload.single('images'), ctrl.Create)
routers.put('/:id', validate, ctrl.Update) // untuk req.params
routers.delete('/', validate, ctrl.Delete)



module.exports = routers