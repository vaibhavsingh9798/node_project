const http = require('http')
const fs = require('fs');
const { buffer } = require('stream/consumers');
const PORT = 3000

const server = http.createServer((req,res) =>{
      const url = req.url;
      const method = req.method;
     if(url == '/'){
        let fileData = fs.readFileSync('message.txt', 'utf-8')
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write(`<body><h6>${fileData}</h6><form action="/message" method="post"><input type="text" name="message" ><button type="submit">Enter message</button></input></form> </body>`)
        res.write('</body>')
        res.write('</html>')
        
     }
     if(url == '/message' && method == 'POST'){
       let body = []
        req.on('data',(chunk) =>{
          body.push(chunk)
          console.log(chunk)
        })
        req.on('end',() =>{
            let bodyParser = Buffer.concat(body).toString()
            let message = bodyParser.split('=')[1]
             console.log(message)
             fs.writeFile('message.txt',message,(err)=>{
                res.statusCode = 302
                res.setHeader('Location','/')
                res.end()
             }) 
           
        })
      
     }  
})

server.listen(PORT,() =>{
    console.log(`server running on port ${PORT}`)
})

