const mongoose=require('mongoose')

const urlschema=mongoose.Schema(
    {
       shortId:{
        type: String,
        required:true,
        unique:true,
       },
       redirectedid:{
        type:String,
        required: true,

       },
       visitedHistory:[{timestamp:{ type:Number}}]
    },
    { timestamps:true}
);

const urlmodel =mongoose.model('url',urlschema);



module.exports=urlmodel;
