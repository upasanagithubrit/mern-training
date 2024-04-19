const express= require('express');
const usercontroller=require('../controllers/usercontroller.js')

const userrouter=express.Router();

userrouter.route('/')
    .get(usercontroller.getuser)
    .post(usercontroller.adduser)

userrouter.route('/:id')
   .delete(usercontroller.deleteuser)
   .put(usercontroller.replaceuser)


module.exports= userrouter;