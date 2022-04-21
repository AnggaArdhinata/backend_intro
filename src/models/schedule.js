const db = require('../configs/db')
const models = {}

models.getData = function () {
    return new Promise ((resolve, reject) => {
      db.query('SELECT * FROM public.schedule ORDER BY schedule_id ASC')
      .then(data => {
         resolve(data.rows)
      }) .catch((ers) => {
         reject(ers)
      })
    })
}

models.addData = function ({date, cinema, location}) {
   return new Promise ((resolve, reject) => {
     db.query(
        'INSERT INTO public.schedule (date, cinema, location) VALUES($1, $2, $3)',
        [
            date, cinema, location
         ])
     .then(() => {
        resolve('Successfully Insert New Schedule')
     }) 
     .catch((ers) => {
        reject(ers)
     })
   })
}

models.updateData = function ({schedule_id, date, cinema, location}) {
   return new Promise ((resolve, reject) => {
     db.query('UPDATE public.schedule SET date= $2, cinema= $3, location= $4 WHERE schedule_id= $1',
     [schedule_id, date, cinema, location])
     .then(() => {
        resolve('Update Schedule successfully')
     }) .catch((ers) => {
        reject(ers)
     })
   })
}

models.deleteData = function (id) {
   return new Promise ((resolve, reject) => {
     db.query('DELETE FROM public.schedule WHERE schedule_id= $1', [id])
     
     .then(() => {
        resolve('Delete Schedule success')
     }) .catch((ers) => {
        reject(ers)
     })
   })
}

module.exports = models