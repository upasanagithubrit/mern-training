const fspromises= require('fs/promises')
const reviewmodel= require('../models/reviewmodel')
const usermodel= require('../models/usermodel')


const getreview= async(req,res)=>
{
    const data=await reviewmodel.find();
   
    console.log(req.url);
    res.json({
        status:'success',
        result:0,
        data:{
            reviews:data,
        }
    })
}

const addreview= async(req,res)=>
{
    try{
        const data=req.body
        const reqid=data.id;
        if(usermodel.find(reqid) )
        {
            const {_id,...data}=await reviewmodel.create(req.body)

            res.json({
                status:'review success',
                data:{
                    user:data,
                }
            })
        }
     else
        {
            res.json({
                status:'failed',
                data:{
                    user:"not a valid user",
                }
            })

        }
        
    }
    catch(err){
        console.log('line 32 troller error........')
        res.json({
            status:[403],
            data:{
                products:err,
            }
            
        })
        
    }
  
}

const replacereview= async(req,res)=>
{
    try{
        const reqid=req.params.id;
        const data={...req.body,reqid}
        const result=await reviewmodel.findOneAndReplace({_id: reqid},data)
        res.json({
            status:'replace review success',
            data:{
                reviews:result,
            }
        })
    }
    catch(err){
        console.log(err)
        res.json({
            status:'fail replace',
            data:{
                reviews:err,
            }
        })
    }
    }
   

const deletereview= async(req,res)=>
{
   try{
    const reqid=req.params.id;
    const data={...req.body,reqid}
    const result=await reviewmodel.deleteOne({_id: reqid},data)
    res.json({
        status:'success deleted review',
        data:{
            reviews:null,
        }
    })
}
   catch(err){

    console.log(err);
    res.json({
        status:'fail delete',
        data:{
            review:null,
        }
    })
   }

}



module.exports={
    getreview,
   addreview,
   replacereview,
  deletereview,
}