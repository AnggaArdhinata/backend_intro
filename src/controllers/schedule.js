const models = require('../models/schedule')
const response = require('../helpers/response')
const schedule = {}

schedule.getAll = async (req, res) => {
    try {
        const data = await models.getData()
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

schedule.Create = async (req, res) => {
    try {
        const {date, cinema, location} = req.body
        const data = await models.addData({date, cinema, location})
        res.send({data})
    } catch (error) {
        res.send('Failed to Add Data')
    }
}

schedule.Update = async (req,res) => {
    try {
        const {schedule_id, date, cinema, location} = req.body
        const data = await models.updateData(schedule_id, date, cinema, location)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

schedule.Delete = async (req,res) => {
    try {
        const {id} = req.body
        const data = await models.deleteData(id)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

module.exports = schedule