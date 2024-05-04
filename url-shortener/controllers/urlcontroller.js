const fspromises= require('fs/promises')
const urlmodel= require('../models/urlmodel')
const shortid = require('shortid')


const addurl= async(req,res)=>
{
   
        const body=req.body;

        const shortId=shortid()
        const data=await urlmodel.create({
            shortId: shortId,
            redirectedid:body.url,
            visitedHistory:[]
            



        })
        res.json({
            status:'success done ',
            data:{
                urls:data,
            }
        })
        
        
        
    
    
}


module.exports={
    addurl,
}
