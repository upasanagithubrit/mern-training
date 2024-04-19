const express=require('express')

const usercontroller=require('../controllers/usercontroller.js')

const userrouter=express.Router();

userrouter.route('/')
    .get(usercontroller.getuser)
    .post(usercontroller.postuser)
    .put(usercontroller.putuser)
    .delete(usercontroller.deleteuser)



module.exports=userrouter;

