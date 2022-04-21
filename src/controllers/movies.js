const models = require('../models/movies')
const response = require('../helpers/response')
const movies = {}

movies.getByName = async (req, res) => {
    try {
        const data = await models.getDataName()
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

movies.getAll = async (req, res) => {
    try {
        const data = await models.getData()
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

movies.Create = async (req, res) => {
    try {
        const {name, year, category, price} = req.body
        const data = await models.addData({name, year, category, price})
        res.send({data})
    } catch (error) {
        res.send('Failed to Add Data')
    }
}

movies.Update = async (req,res) => {
    try {
        const {id, name, year, category, price} = req.body
        const data = await models.updateData(id, name, year, category, price)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

movies.Delete = async (req,res) => {
    try {
        const {id} = req.body
        const data = await models.deleteData(id)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

module.exports = movies