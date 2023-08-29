const express = require("express")
const cors=require("cors")
const PORT =5000
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
//require the config file
require("./config/config")
require('./routes/routes')(app)

app.listen(PORT,()=>{
  console.log(`connected on the port${PORT}`)
})