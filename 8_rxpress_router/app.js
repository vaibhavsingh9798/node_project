const express = require('express')
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')

const app = express()

// add middleware
app.use(adminRoute)
app.use(shopRoute)

app.listen(3000)

