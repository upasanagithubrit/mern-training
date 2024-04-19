const express= require('express');
const productcontroller=require('../controllers/productcontroller.js')

const productrouter=express.Router();

productrouter.route('/')
    .get(productcontroller.getproduct)
    .post(productcontroller.addproduct)

productrouter.route('/:id')
   .delete(productcontroller.deleteproduct)
   .put(productcontroller.replaceproduct)


module.exports= productrouter;