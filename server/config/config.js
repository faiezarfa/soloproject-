const mongoose =require("mongoose")

mongoose.connect(`mongodb://127.0.0.1:27017/booksclub`)
.then(()=>{
  console.log('connected on the database')
}).catch(()=>{
  console.log('not connected on the database')
})