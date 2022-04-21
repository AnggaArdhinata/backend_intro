const db = require('../configs/db')
const models = {}

models.getDataName = (name) => {
   return new Promise((resolve, reject) => {
       db.query('SELECT * FROM public.movies WHERE name like= $1',[
           name
       ])
           .then((data) => {
               resolve(data.rows)
           })
           .catch((ers) => {
               reject(ers)
           })
   })
}

models.getData = function () {
    return new Promise ((resolve, reject) => {
      db.query('SELECT * FROM public.movie ORDER BY movie_id ASC')
      .then(data => {
         resolve(data.rows)
      }) .catch((ers) => {
         reject(ers)
      })
    })
}

models.addData = function ({name, year, category, price}) {
   return new Promise ((resolve, reject) => {
     db.query(
        'INSERT INTO public.movie (name, year, category, price) VALUES($1, $2, $3, $4)',
        [
           name,
           year,
           category,
           price
         ])
     .then(() => {
        resolve('Successfully Insert New Data')
     }) 
     .catch((ers) => {
        reject(ers)
     })
   })
}

models.updateData = function ({id, name, year, category, price}) {
   return new Promise ((resolve, reject) => {
     db.query('UPDATE public.movie SET name= $2, year= $3, category= $4, price= $5 WHERE movie_id= $1',
     [id, name, year, category, price])
     .then(() => {
        resolve('Update data successfully')
     }) .catch((ers) => {
        reject(ers)
     })
   })
}

models.deleteData = function (id) {
   return new Promise ((resolve, reject) => {
     db.query('DELETE FROM public.movie WHERE movie_id= $1', [id])
     
     .then(() => {
        resolve('Delete data success')
     }) .catch((ers) => {
        reject(ers)
     })
   })
}

module.exports = models