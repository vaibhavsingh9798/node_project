const express = require('express')
const router = express.Router()

//  router.use()    // we can use

router.get('/add-product',(req,res,next) =>{
    console.log('1st middleware')
    res.send('<form action="product" method="post">Product :<input type="text" name="title" />Product Size :<input type="text" name="size"><button type="submit">Add Product</button></form>')
    next() // it is optional here

})

router.post('/product',(req,res) =>{
    console.log('2nd middleware')
//    console.log('req.body---',req.body)
//    console.log('Product',req.body.title)
//    console.log('Product Size',req.body.size)
   res.redirect('/add-product')
})

module.exports = router