const book =require('../model/model')

//find all books

module.exports.findallbooks=(req,res)=>{
  book.find()
  .then((allbooks)=>{
    res.status(200).json({allbooks})
  }).catch((err)=>{
    res.status(400).json({message:"we cant find it",err})
  })
}

//add one book

module.exports.addonebook=(req,res)=>{
  book.create(req.body)
  .then(()=>{
    res.status(200).json("created")
    console.log("created one successfully")
  }).catch(()=>{
    res.status(400).json("not created")
    console.log("we can't add one sorry")
  })
}

//findonebook
module.exports.findonebook=(req,res)=>{
  book.findOne({_id:req.params.id})
  .then((onebook)=>{
    res.status(200).json({onebook})
  }).catch((err)=>{
    res.status(400).json({message:"not existthis book",err})
  })
}

//fidone and update
module.exports.fidoneandupdate=(req,res)=>{
  book.findOneAndUpdate({
    _id:req.params.id
  }, req.body , {new:true ,runValidators:true})
  .then((updated)=>{
    res.status(200).json({updated})
  }).catch((err)=>{
    res.status(400).json({message:"we can't update this",err})
  })
}
//find one and delete
module.exports.findoneanddelete=(req,res)=>{
  book.findByIdAndDelete({_id:req.params.id})
  .then((deleted)=>{
    res.status(200).json({deleted})
  }).catch((err)=>{
    res.status(400).json({message:"we can't delete this",err})
  })
}