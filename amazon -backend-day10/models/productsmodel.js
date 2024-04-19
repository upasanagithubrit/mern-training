const mongoose=require('mongoose')

const productschema=mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true,

    },
   
    price:{
        type:Number,
        required:true,

    },
    description:String,
    images:[String],
    createdAt:{
        type:Date,
        default:new Date(),
    },
    updatedAt:{
        type:Date,
        default:new Date(),
    }


})

const productmodel =mongoose.model('products',productschema);

// const testproduct=new productmodel({
//     title:'chips',
//     price:1000,
// });

  //to save in db
// testproduct.save().then((res)=>
// {
//     console.log(res);
// })

module.exports=productmodel;