const express= require('express');
const reviewcontroller=require('../controllers/reviewcontroller.js')

const reviewrouter=express.Router();

reviewrouter.route('/')
    .get(reviewcontroller.getreview)
    .post(reviewcontroller.addreview)

    reviewrouter.route('/:id')
    .delete(reviewcontroller.deletereview)
    .put(reviewcontroller.replacereview)
 

module.exports= reviewrouter;