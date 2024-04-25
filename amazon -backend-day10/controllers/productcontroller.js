const fspromises= require('fs/promises')
const productmodel= require('../models/productsmodel')

const getproduct= async(req,res)=>
{
    // const q=req.query; //////// query to read filters if any fropm backend
    // console.log(q);        ////terminal pe print hoga
    
    // // const data=await productmodel.find(q);     ///////////postman pe show hoga 


    // let query = productmodel.find(q)


    // query= query.sort('price'); //////////////sort the data according to parameters-- price
    // const data = await(query); 
    
    // // console.log(typeOf(data));

    // console.log(req.url);


    const {sort='price',page=1, pagesize=3 ,field='price',...q}= req.query  // pagesize aur page ham post man se bhi de sakte hai ? mark laga ke
    //// like this -----http://localhost:2002/api/products?page=1&pagesize=2
    //-price--- price ke alava jo bachega vo fiedld me aa jayega 
    const sortstr= sort.split(',').join(' ');

    let query=productmodel.find(q)
    query = query.sort(sortstr);

    const skip= pagesize*(page-1);    // kaha se data aayega eak page pe aur akitna data aayega depend on pagesize
    // const limit=3;

    query = query.skip(skip).limit(pagesize);

    query = query.select(field)  // jitna chaiye sirf vo hi aayega 0.postman pe 
    const products =await(query);

   const totalresults = await productmodel.countDocuments();

    res.json({
        status:'success',
        result:products.length,
        totalresults,
        pagesize:pagesize,
        page:page, 
        data:{
            products,
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