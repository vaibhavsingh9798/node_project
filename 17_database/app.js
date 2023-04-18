const express = require('express');
const db = require('./util/database');
const app = express();


db.execute('SELECT * FROM products')
.then(result => console.log(result[0]))
.catch(err => console.log(err))

app.get('/home',(req,res) =>{
    res.status(200).send('Home Page')
})

 
app.listen(3000,() =>{
    console.log('server run on 3000')
})