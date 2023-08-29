const controllers =require('../controllers/controllers')
console.log(controllers)

module.exports=(app)=>{
 app.get('/api/allbooks',controllers.findallbooks)
 app.post('/api/allbooks',controllers.addonebook)
 app.get('/api/allbooks/:id',controllers.findonebook)
 app.put('/api/allbooks/:id',controllers.fidoneandupdate)
 app.delete('/api/allbooks/:id',controllers.findoneanddelete)
}