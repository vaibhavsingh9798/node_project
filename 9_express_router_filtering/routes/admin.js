const express = require('express')
const router = express.Router()

router.get('/add-product',(req,res,next) =>{
    console.log('1st middleware')
    res.send('<form action="/admin/add-product" method="post">Product :<input type="text" name="title" />Product Size :<input type="text" name="size"><button type="submit">Add Product</button></form>')
    next() // it is optional here
})

router.post('/add-product',(req,res,next) =>{
    console.log('2nd middleware')
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;