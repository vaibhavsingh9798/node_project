const db = require('../util/database');

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id = id,
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save(id=null) {
    if(id){
      console.log('edit part')
      return db.execute('UPDATE products SET id=?,title=?, price=?,description = ?,imageURL = ? WHERE products.id = ?',[id,this.title,this.price,this.description,this.imageUrl,id])
    }
    else
    return  db.execute('INSERT INTO products (title,price,description,imageURL) VALUES(?,?,?,?)',
      [this.title,this.price,this.description,this.imageUrl]
      );
   }

  static fetchAll() {
   return  db.execute('SELECT * FROM products')
  }

  static findById(id){
    return db.execute('SELECT * FROM products WHERE products.id = ?',[id])
  }
  static deleteproductbyID(id){
   return db.execute('DELETE FROM products WHERE products.id = ?',[id])
  }

};
