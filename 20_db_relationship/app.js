const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users')
const productRoutes = require('./routes/product')
const  User = require('./models/user')
const Product = require('./models/product')
const sequelize = require('./util/database')
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use((req,res,next) =>{
    User.findByPk(1,{ include: [{ model: Product }]})
    .then(user =>{
     req.user=user;
     next();
    })
    .catch(err => console.log(err))
    
})

 app.use('/users',userRoutes)
 app.use('/products',productRoutes)
app.get('/',(req,res,next) =>{
    res.send('<h1>This is HomePage</h1>')
})

Product.belongsTo(User);
User.hasMany(Product);


sequelize.sync()
.then(() =>{
    app.listen(3001)
})
.catch(err => console.log(err))
//app.listen(3001)