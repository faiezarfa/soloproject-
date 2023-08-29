const mongoose =require("mongoose")

const bookSchema=new mongoose.Schema({
  title:{
    type:String,
    required:[true,"the title shoul exist"]
  },
  author:{
    type:String,
    required:[true,"the author name should exist"]

  },
   pages:{
    type:Number,
    required:[true,"the number of page is required"]
   }

},{timestamps:true})
const book=mongoose.model('book',bookSchema)
module.exports=book;