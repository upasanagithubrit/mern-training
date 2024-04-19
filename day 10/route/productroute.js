const express = require('express')

const productcontroller = require('../controllers/productcontroller.js')

const productrouter = express.Router();

productrouter.route('/')
    .get(productcontroller.getallproducts)
    .post(productcontroller.addproduct)
productrouter.route('/:id')
        .put( productcontroller.modifyproduct)
        .delete(productcontroller.deleteproduct)

module.exports = productrouter;

