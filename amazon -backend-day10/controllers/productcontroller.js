const fspromises= require('fs/promises')
const productmodel= require('../models/productsmodel')

const getproduct= async(req,res)=>
{
    const data=await productmodel.find();
    // console.log(typeOf(data));
    console.log(req.url);
    res.json({
        status:'success',
        result:0,
        data:{
            products:data,
        }
    })
}


const addproduct= async(req,res)=>
{
    try{
        const {_id,...data}=await productmodel.create(req.body)
        console.log(data)
        res.json({
            status:'success',
            data:{
                products:data,
            }
        })
    }
    catch(err){
        console.log('line 32 productocntroller error........')
        res.json({
            status:[403],
            data:{
                products:err,
            }
            
        })
        
    }
  
}

const replaceproduct= async(req,res)=>
{
    try{
        const reqid=req.params.id;
        const data={...req.body,reqid}
        const result=await productmodel.findOneAndReplace({_id: reqid},data)
        res.json({
            status:'success',
            data:{
                products:result,
            }
        })
    }
    catch(err){
        console.log(err)
        res.json({
            status:'fail replace',
            data:{
                products:null,
            }
        })
    }
    }
   

const deleteproduct= async(req,res)=>
{
   try{
    const reqid=req.params.id;
    const data={...req.body,reqid}
    const result=await productmodel.deleteOne({_id: reqid},data)
    res.json({
        status:'success deleted',
        data:{
            products:null,
        }
    })
}
   catch(err){

    console.log(err);
    res.json({
        status:'fail delete',
        data:{
            product:null,
        }
    })
   }

}
module.exports={
    getproduct,
    addproduct,
    deleteproduct,
    replaceproduct,
}