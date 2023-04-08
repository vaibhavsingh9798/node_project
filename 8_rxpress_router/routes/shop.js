const express = require('express')
const router = express.Router()

//we can use router.use() , router.get() , router.post()

// It is run always not a good practice
// router.use('/',(req,res,next) =>{
//     res.send('<h1>This is Shop1 </h1>')
// })

router.get('/',(req,res,next) =>{
    res.send('<h1>This is Shop2 </h1>')
})

module.exports = router
