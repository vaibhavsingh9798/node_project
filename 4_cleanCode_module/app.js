const http = require('http')
const routes = require('./routes')
const PORT = 3000

const server = http.createServer(routes)
               // 2 ,3 http.createServer(routes.handler)

server.listen(PORT,() =>{
    console.log(`server running on port ${PORT}`)
})

