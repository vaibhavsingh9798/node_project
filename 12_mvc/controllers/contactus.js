const path = require('path')
exports.contactusPage = (req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','contactus.html'))
  
}

exports.successPage = (req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','views','success.html'))
}