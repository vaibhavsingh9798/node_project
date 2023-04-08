const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const pageRoute = require('./routes/page')
const app = express();

app.use(pageRoute)
app.use(express.static(path.join(__dirname,'public')))
app.use((req,res,next) =>{
    res.status(404).sendFile(path.join(__dirname,'view','404.html'))
})
app.listen(3000)