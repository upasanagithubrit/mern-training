const mongoose=require('mongoose')

const reviewschema=mongoose.Schema({
   userId:{
        type:String,
    },
   
    rating:{
        type:Number,
        unique:true,

    },
    review:{
        type:String,    
    },

    
    reviewedAt:{
        type:Date,
        default:new Date(),
    },
    updatedatedAt:{
        type:Date,
        default:new Date(),
    },
})

const reviewmodel =mongoose.model('reviews',reviewschema);



module.exports=reviewmodel;