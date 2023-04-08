const fs = require('fs')
const express = require('express')
const router = express.Router()
const localStorage = require('local-storage')


router.get('/',(req,res,next) =>{
     fs.readFile('message.txt','utf-8',(err,data) =>{
        res.send(`<form action="/" method="post"><h3>${data}</h3><input type="text" name="msg"/><button type="submit">Add</button></form>`)
     })
   
})
router.post('/',(req,res,next) =>{
    
    let message = req.body.msg;
    let username = localStorage.get('username')
    let info = `${username}: ${message}`
    fs.appendFile('message.txt',info,()=>{
        res.redirect('/')
    })

})

module.exports = router;