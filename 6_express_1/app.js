const http = require('http')
const express = require('express')

const app = express();

app.use((req,res,next) =>{
    console.log('1st middlewate url',req.url)  
    next()
})
app.use((req,res,next) =>{
    console.log('2nd middleawre',req.method)
     res.setHeader('Content-Type','text/html')
    res.send('<h1>This is express page</h1>')
    next()
})

let server = http.createServer(app)

server.listen(3000)

