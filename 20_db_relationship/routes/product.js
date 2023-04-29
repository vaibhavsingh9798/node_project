const express = require('express')
const productController = require('../controllers/product')

const router = express.Router()

router.get('/list',productController.getProducts)

router.post('/product',productController.postProduct)

router.put('/product/:id',productController.putProduct)

router.delete('/product/:id',productController.deleteProduct)

module.exports = router;