const path = require('path')
const fs = require('fs')

let p = path.join(__dirname,'../','data','product.json')

 const getProductFromFile = cb => {
    fs.readFile(p,(err,dataItem) =>{
        if(err)
        cb (['dummy'])
        else
        cb (JSON.parse(dataItem))
    })
 }

module.exports = class Product{

    constructor(t){
        this.title = t
    }

    save(){
    //   fs.readFile(p,(err,dataContent) =>{
    //     let dataSet = []
    //      if(!err){
    //       dataSet = JSON.parse(dataContent)
    //       console.log('1',dataSet)
    //      }
     getProductFromFile(dataSet =>{
        dataSet.push(this)
         fs.writeFile(p,JSON.stringify(dataSet),(err) =>{
            if(err)
            console.log('something wrong ....')
          })
     })
         
    //   })
      

    }

    static fetchAll(cb){
      getProductFromFile(cb)
    }
}

// module.exports = Product;  