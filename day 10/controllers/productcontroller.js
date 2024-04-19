const fsPromises=require('fs/promises');

/////////////// structure get request////////////////

const getallproducts=async(req,res)=>
{
    const data = await fsPromises.readFile('./data.json', 'utf8')
    const obj = JSON.parse(data);
    res.json(
        {
            status: 'success',
            results: obj.length,
            data: {
                products: obj,
            }
        })

}


////////////////strucure post requst/////////////////
const addproduct=async (req, res) => {
    const data = req.body;
    if(!data.price || !data.title)
    {
        res.json({
            status:'fail',
            data:{
                product:'could not add'


            }
            

        })
    }
    else{

      

    const db = await fsPromises.readFile("./data.json", 'utf8')
    const arr = JSON.parse(db);
    const len = arr.length;
    const newproduct=data;

    if (len == 0) {
        newproduct.id = 1;
        
        console.log(arr);
      
    }
    else {
      
        newproduct.id=(arr[len-1].id)+1;
        
    }
    arr.push(newproduct)
    fsPromises.writeFile('./data.json', JSON.stringify(arr));// data is stored in data.json
    
    res.json({
        status:'success',
        results:1,
        data:{
            newproduct:newproduct,
        }

    })

}
    }



//////////////////structure put request/////////
const modifyproduct=async(req,res)=>
{
   const arr=JSON.parse(await fsPromises.readFile('./data.json','utf8'))
   
    // res.send("work in progress")  /// har eak request me response sirf eak baar send hoga 
   const newid=parseInt(req.params.id);
    const data=req.body
    data.id=newid
    // console.log(data);

    const newarr=arr.map((elem)=>
    {
        if(elem.id==newid) return data;
        else return elem;

    })
    fsPromises.writeFile('./data.json',JSON.stringify(newarr))

    res.json({
        status:'success',
        results:1,
        
            data: {
                newProduct:data,
            }
       

    })
    console.log(data);
    

}
    


const deleteproduct=async(req,res)=>{
    const reqid=parseInt(req.params.id)
    const arr=JSON.parse(await fsPromises.readFile("./data.json","utf-8"))
    const newarr=arr.filter((elem)=>{
        if(elem.id===reqid) return false;
        else return true;
    })
    fsPromises.writeFile("./data.json",JSON.stringify(newarr));
    res.json({
        status:'success',
        data:{
            newProduct:null
        }
    })
}




module.exports={
    getallproducts,
    addproduct,
    modifyproduct,
    deleteproduct,


}