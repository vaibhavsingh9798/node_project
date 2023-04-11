 const path = require('path')
 const fs = require('fs')
 module.exports = class Cart{

    static addProduct(id,prductPrice){
        console.log('id-producrprice',id,prductPrice)
        let p = path.join(__dirname,'../','data','cart.json')
        fs.readFile(p,(err,dataContent)=>{
            let cartData = {products:[],totalPrice:0}
            if(!err){
                cartData = JSON.parse(dataContent);
            }
            let updatedProduct 
           const existingProductIndex = cartData.products.findIndex(p => p.id == id)
           const existingProduct = cartData.products[existingProductIndex]
           if(existingProduct){
            updatedProduct = {...existingProduct}
            updatedProduct.qty = updatedProduct.qty + 1
            cartData.products[existingProductIndex] = updatedProduct
           }
           else{
            console.log('new product...')
            updatedProduct = {id:id,qty:1}
            cartData.products = [...cartData.products,updatedProduct]

           }
           cartData.totalPrice = cartData.totalPrice + +prductPrice;
            console.log('cartData',cartData)
           fs.writeFile(p,JSON.stringify(cartData),(err) =>{
            if(!err)
            console.log('created ')
           })
        })
    }
 }