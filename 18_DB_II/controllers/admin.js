const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null,title, imageUrl, description, price);
  product.save()
  .then( () => {
   res.redirect('/');})
  .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  let editMode = req.query.edit;
  if(!editMode)
  return res.redirect('/')
  let prodId = req.params.productId;
  Product.findById(prodId)
  .then(([product]) =>{
    if(!product)
    return res.redirect('/')
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/edit-product',
    editing : editMode,
    product : product[0]
  });
  })
  .catch(err => console.log(err))
};
exports.postEditProduct = (req, res, next) => {
   let id = req.body.productId;
   const updatedTitle = req.body.title;
   const updatedPrice = req.body.price;
   const updatedImageUrl = req.body.imageUrl
   const updatedDescription = req.body.description;
  console.log('edit--',id,updatedTitle,updatedImageUrl,updatedDescription)  
   const updetedProduct = new Product(id,updatedTitle,updatedImageUrl,updatedDescription,updatedPrice)
   updetedProduct.save(id)
   .then(() =>{
    console.log('result part...')
    res.redirect('/admin/products')
   })
   .catch(err => console.log(err) ) 
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(([rows,fieldData]) =>{
    res.render('admin/products', {
      prods: rows,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => console.log(err))
};

 exports.deleteProduct = (req,res,next) =>{
    let prodId = req.params.productId;
    Product.deleteproductbyID(prodId)
    .then(() => res.redirect('/admin/products'))
    .catch(err => console.log(err))
    
 }
