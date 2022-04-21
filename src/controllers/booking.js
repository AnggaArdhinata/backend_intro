const models = require('../models/booking')
const response = require('../helpers/response')
const booking = {}

booking.getAll = async (req, res) => {
    try {
        const data = await models.getData()
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

booking.Create = async (req, res) => {
    try {
        const {booking_id, customer_name, booking_date, total_price, seat_number, amount} = req.body
        const data = await models.addData({booking_id, customer_name, booking_date, total_price, seat_number, amount})
        res.send({data})
    } catch (error) {
        res.send('Booking Failed')
    }
}

booking.Update = async (req,res) => {
    try {
        const {id, customer_name, booking_date, seat_number, amount} = req.body
        const data = await models.updateData(id, customer_name, booking_date, seat_number, amount)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

booking.Delete = async (req,res) => {
    try {
        const {id} = req.body
        const data = await models.deleteData(id)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

module.exports = booking