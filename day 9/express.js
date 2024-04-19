const express = require('express')
const fsPromises = require('fs/promises')
const app = express();
app.use(express.json());/// express ko batana padega body chaiye 


////////////////////////get without any query/////////////////////////
//////////////////api created in localhost///////////////////////
app.get('/api/products', async (req, res) => {
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

});


////////////////////////post --- res.json incomplete//////////////send data to backend////////////////

app.post('/api/products', async (req, res) => {
    const data = req.body;
    if(!data.price || !data.title)
    {
        res.json({
            status:'success',
            data:{
                products:error,

            }

        })
    }
    else{

        // data.id = 121;
    // console.log(data)
    // res.send('work in progress')


    const db = await fsPromises.readFile("./data.json", 'utf8')
    const arr = JSON.parse(db);
    const len = arr.length;
    const newproduct=data;

    if (len == 0) {
        newproduct.id = 1;
        // console.log(arr);
        // arr.push(newproduct);
        console.log(arr);
        // fsPromises.writeFile('./data.json', JSON.stringify(arr));// data is stored in data.json
    }
    else {
        // const newproduct=data;
        newproduct.id=(arr[len-1].id)+1;
        // arr.push(newproduct)
        // fsPromises.writeFile('./data.json', JSON.stringify(arr));// data is stored in data.json


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
    

})


//////////////////////////////put data request/////////////////
app.put('/api/products/:id',async(req,res)=>
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
    

})



///////////////////////////////delete request////////////////
app.delete('/api/products/:id',async(req,res)=>{
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
})
app.listen(3000);