const db = require('../configs/db')
const models = {}

models.getData = function () {
    return new Promise ((resolve, reject) => {
      db.query('SELECT * FROM public.booking ORDER BY booking_id ASC')
      .then(data => {
         resolve(data.rows)
      }) .catch((ers) => {
         reject(ers)
      })
    })
}

models.addData = function ({booking_id, customer_name, booking_date, total_price, seat_number, amount}) {
   return new Promise ((resolve, reject) => {
     db.query('INSERT INTO public.booking (booking_id, customer_name, booking_date, total_price, seat_number, amount) VALUES($1, $2, $3, $4, $5, $6)',
        [booking_id, customer_name, booking_date, total_price, seat_number, amount])
     .then(() => {
        resolve('Successfully Booking Ticket')
     }) 
     .catch((ers) => {
        reject(ers)
     })
   })
}

models.updateData = function ({id, customer_name, booking_date, seat_number, amount}) {
   return new Promise ((resolve, reject) => {
     db.query('UPDATE public.booking SET customer_name= $2, booking_date= $3, seat_number= $4, amount= $5 WHERE booking_id= $1',
     [id, customer_name, booking_date, seat_number, amount])
     .then(() => {
        resolve('Update data successfully')
     }) .catch((ers) => {
        reject(ers)
     })
   })
}

models.deleteData = function (id) {
   return new Promise ((resolve, reject) => {
     db.query('DELETE FROM public.booking WHERE booking_id= $1', [id])
     
     .then(() => {
        resolve('Booking was canceled !')
     }) .catch((ers) => {
        reject(ers)
     })
   })
}

module.exports = models