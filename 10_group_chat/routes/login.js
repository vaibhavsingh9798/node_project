const express = require('express')
const router = express.Router()
const localStorage = require('local-storage')

router.get('/login',(req,res,next) =>{
    res.send('<form action="/login" method="post"><input type="text" name="username"><button type="submit">Add</button></form>')
})

router.post('/login',(req,res,next) =>{
    console.log('body',req.body)
    let user = req.body.username
    console.log('body.user',user)
    localStorage.set('username',user)
        res.redirect('/')
    
})

module.exports = router;