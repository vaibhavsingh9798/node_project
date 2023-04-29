 const Product = require('../models/product')

exports.getProducts = async (req,res,next) =>{
  let data = await Product.findAll()
  res.json(data)
 console.log('get')
}

exports.postProduct = async (req,res,next) =>{
    let {pname,price,description} = req.body
    console.log('post',pname,price,description)
    console.log('req.user...',req.user)

    //  let product = await req.user.createProduct({pname,price,description})
      let data = await Product.create({pname,price,description, user3Id:req.user.id})
      console.log('post prod...',data)
     res.json(data)
}

exports.putProduct= async (req,res,next) =>{ 
    let uid = req.params.id
    let {uname,price,description} = req.body
    let data = await Product.update({uname,price,description},{where:{id:uid}})
    res.json(data)
    console.log('put')
}

exports.deleteProduct = async (req,res,next) =>{
     let uid = req.params.id;
     let data = await Product.destroy({where:{id:uid}})
    console.log('delete')
    res.json(data)
}