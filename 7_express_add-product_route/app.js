const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.get('/',(req,res,next) =>{
   console.log('1st middleware')
   res.send('<form action="add-product" method="post">Product :<input type="text" name="title" />Product Size :<input type="text" name="size"><button type="submit">Add Product</button></form>')
   next() // it is optional here
})
app.post('/add-product',(req,res,next) =>{
   console.log('2nd middleware')
   console.log('req.body---',req.body)
   console.log('Product',req.body.title)
   console.log('Product Size',req.body.size)
   res.redirect('/')
})

app.listen(3000)