const fs = require('fs')
const { buffer } = require('stream/consumers');

const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;
    let fileData='empty'
   if(url == '/'){
    if(fs.existsSync('message.txt')){
       fileData = fs.readFileSync('message.txt', 'utf-8')
    }
      res.write('<html>')
      res.write('<head><title>Enter Message</title></head>')
      res.write(`<body><h6>${fileData}</h6><form action="/message" method="post"><input type="text" name="message" ><button type="submit">Enter message</button></input></form> </body>`)
      res.write('</body>')
      res.write('</html>')
      res.end()
    
      
   }
   if(url == '/message' && method == 'POST'){
     let body = []
      req.on('data',(chunk) =>{
        body.push(chunk)
        console.log(chunk)
      })
      req.on('end',() =>{
          let bodyParser = Buffer.concat(body).toString()
          let message = bodyParser.split('=')[0]
           console.log(message)
           fs.writeFile('message.txt',message,(err)=>{
              res.statusCode = 302
              res.setHeader('Location','/')
              res.end()
           }) 
         
      })
    
   }  
}

// 1st
module.exports = requestHandler;

// 2nd  send mutiple function 
//module.exports = {handler:requestHandler,info:'send from routes'}

// 3rd 
// exports.handler = requestHandler


// debugging step 
// 1) add configration with file name Ex. App.js
// 2) then put debugger in code front of line
// 3) then launch
// 4) you can midify varible inside debug console and check diffrent-2 scnerio