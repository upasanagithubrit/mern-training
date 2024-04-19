const fspromises= require('fs/promises')
const usermodel= require('../models/usermodel')

const getuser= async(req,res)=>
{
    const data=await usermodel.find();
    // console.log(typeOf(data));
    console.log(req.url);
    res.json({
        status:'success',
        result:0,
        data:{
            users:data,
        }
    })
}


const adduser= async(req,res)=>
{
    try{
        const {_id,...data}=await usermodel.create(req.body)
        console.log(data)
        res.json({
            status:' adduser success',
            data:{
                users:data,
            }
        })
    }
    catch(err){
        console.log('line 32 userocntroller error........')
        res.json({
            status:[403],
            data:{
                users:err,
            }
            
        })
        
    }
  
}

const replaceuser= async(req,res)=>
{
    try{
        const reqid=req.params.id;
        const data={...req.body,reqid}
        const result=await usermodel.findOneAndReplace({_id: reqid},data)
        res.json({
            status:'replace success',
            data:{
                users:result,
            }
        })
    }
    catch(err){
        console.log(err)
        res.json({
            status:'fail replace',
            data:{
                users:err,
            }
        })
    }
    }
   

const deleteuser= async(req,res)=>
{
   try{
    const reqid=req.params.id;
    const data={...req.body,reqid}
    const result=await usermodel.deleteOne({_id: reqid},data)
    res.json({
        status:'success deleted user',
        data:{
            users:null,
        }
    })
}
   catch(err){

    console.log(err);
    res.json({
        status:'fail delete',
        data:{
            user:null,
        }
    })
   }

}
module.exports={
    getuser,
    adduser,
    deleteuser,
    replaceuser,
}