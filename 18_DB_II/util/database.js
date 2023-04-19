const mysql = require('mysql2')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'test',
    password:'Vaibhav@123'
})

module.exports = db.promise();