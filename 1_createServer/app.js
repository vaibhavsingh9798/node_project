const http = require('http')

const server = http.createServer(function(req,res){
    console.log('My name is Vaibhav Kumar')
})

server.listen(4000)