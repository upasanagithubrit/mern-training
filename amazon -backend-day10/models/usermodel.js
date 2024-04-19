const mongoose=require('mongoose')

const userschema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
   
    email:{
        type:String,
        unique:true,

    },
    description:String,
    
    createdAt:{
        type:Date,
        default:new Date(),
    },
    updatedAt:{
        type:Date,
        default:new Date(),
    },
    phoneno:{
        type:Number,
        required:true,
        unique:true,
    }



})

const usermodel =mongoose.model('users',userschema);



module.exports=usermodel;