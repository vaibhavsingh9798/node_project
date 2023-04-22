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
  console.log('create method')
  Product.create({
    title:title,
    price:price,
    imageUrl:imageUrl,
    description:description
  })
  .then( () => {
   res.redirect('/');})
  .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  let editMode = req.query.edit;
  if(!editMode)
  return res.redirect('/')
  let prodId = req.params.productId;
  console.log('getEdit',editMode,prodId) 
  Product.findByPk(prodId)
  .then(product =>{
    if(!product)
    return res.redirect('/')
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/edit-product',
    editing : editMode,
    product : product
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
   if(!id){
    Product.create({
      title:updatedTitle,
      price:updatedPrice,
      imageUrl:updatedImageUrl,
      description:updatedDescription
    })
    .then( () => {
     console.log('Created.....')
     res.redirect('/');
    })
    .catch(err => console.log(err));
   }else{
   Product.findByPk(id)
   .then(product =>{
     product.title = updatedTitle
     product.price = updatedPrice
     product.imageUrl = updatedImageUrl
     product.description = updatedDescription
        return  product.save()
   })
   .then(result  => {
    return res.redirect('/');
    console.log('Updated....')}
    )
   .catch(err => console.log(err))
  
}
}

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(products =>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => console.log(err) )
};



 exports.deleteProduct = (req,res,next) =>{
    let prodId = req.params.productId;
    Product.destroy({where:{id:prodId}})
    .then(() => res.redirect('/admin/products'))
    .catch(err => console.log(err))
    
 }
