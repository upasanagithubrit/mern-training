const express= require('express');
const urlcontroller=require('../controllers/urlcontroller')

const urlrouter=express.Router();

urlrouter.route('/')
     .post(urlcontroller.addurl);


module.exports=urlrouter;
