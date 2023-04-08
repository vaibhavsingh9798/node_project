const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/',(req,res,next) =>{
  res.sendFile(path.join(__dirname,'../','view','home.html')) 
})

router.get('/contactus',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','view','contactus.html')) 
  })
  router.get('/success',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'../','view','success.html')) 
  })

module.exports = router;
