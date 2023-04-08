const express = require('express')
const router = express.Router()

//we can use router.use() , router.get() , router.post()

router.get('/',(req,res,next) =>{
    res.send('<h1>This is Shop </h1>')
})

module.exports = router;
