const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id = id,
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
   console.log('save call')
    getProductsFromFile(products => {
      if(this.id){
        let  existingProductIndex = products.findIndex(prod => prod.id == this.id)
        if(existingProductIndex){
        const updatedProduct = [...products]
          updatedProduct[existingProductIndex] = this;
          console.log('updated',[...updatedProduct])
          fs.writeFile(p, JSON.stringify(updatedProduct), err => {
            console.log(err);
          });
        }
      }
      else{
        this.id = Math.random().toString();
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    }
    });
   
}

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id,cb){
     getProductsFromFile(products =>{
      let product = products.find(p => p.id == id)
      cb(product)
     });
    
  }
  static deleteproductbyID(id,cb){
   getProductsFromFile(products =>{
     const existingProductIndex = products.findIndex(prod => prod.id == id)
     if(existingProductIndex){
      let newProducts = products.filter(prod => prod.id !== id)
      console.log(newProducts.length)
      fs.writeFile(p,JSON.stringify(newProducts),(err)=>{
          if(err)
          console.log(err)
      })
     }
   })
  }

};
