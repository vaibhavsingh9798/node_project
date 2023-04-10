
const express = require('express')
const router = express.Router()
const contactusController = require('../controllers/contactus')
router.get('/contactus',contactusController.contactusPage)


router.get('/success',contactusController.successPage)

module.exports = router;