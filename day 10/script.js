const { time } = require('console');
const express = require('express')
const fsPromises = require('fs/promises')
// const productcontroller=require('./controllers/productcontroller.js');
// const usercontroller=require('./controllers/usercontroller.js')
const productroute=require('./route/productroute.js')
const userroute=require('./route/userroute.js')
const app = express();
app.use(express.json());/// express ko batana padega body chaiye 

////////////middleware-app.use///////////////

app.use((req,res,next)=>
{
    console.log("middleware 1")
    next();

})


///////////////////log file create by this/////////////////
app.use((req,res,next)=>
{
    const time=new Date().toLocaleString();
    fsPromises.appendFile('./log.txt',req.url +'\t' +time + '\n');
    
    next(); 
})

/////////////////router   --HANDLER AND ALTERNATE OF APP.ROUTE////////////////////////
// const productrouter=express.Router()
// const userrouter=express.Router()

// app.use('/api/products',productrouter)
// app.use('/api/users',userrouter)

//by export///
app.use('/api/products',productroute)
app.use('/api/users',userroute)



// productrouter.route('/')
//     .get(productcontroller.getallproducts )
//     .post(productcontroller.addproduct)

// productrouter.route('/:id')
//     .put( productcontroller.modifyproduct)
//     .delete(productcontroller.deleteproduct)

// userrouter.route('/')
//     .get(usercontroller.getuser)
//     .post(usercontroller.postuser)
//     .put(usercontroller.putuser)
//     .delete(usercontroller.deleteuser)



///////route --/api/product ko bar bar likhe ne bache  ke liye ////////////////
// app.route('/api/products')
//    .get(productcontroller.getallproducts )
//    .post(productcontroller.addproduct)


// app.route('/api/products/:id')
//    .put( productcontroller.modifyproduct)
//    .delete(productcontroller.deleteproduct)

// app.route('/api/users')
//    .get(usercontroller.getuser)
//    .post(usercontroller.postuser)
//    .put(usercontroller.putuser)
//    .delete(usercontroller.deleteuser)






////////////////////////get without any query/////////////////////////
//////////////////api created in localhost///////////////////////

// app.get('/api/products', async (req, res) => {
//     const data = await fsPromises.readFile('./data.json', 'utf8')
//     const obj = JSON.parse(data);
//     res.json(
//         {
//             status: 'success',
//             results: obj.length,
//             data: {
//                 products: obj,
//             }
//         })

// });



///////////////////exported get request bu controller//////////

// app.get('/api/products', productcontroller.getallproducts );



////////////////////////post//////////////send data to backend////////////////

// app.post('/api/products', async (req, res) => {
//     const data = req.body;
//     if(!data.price || !data.title)
//     {
//         res.json({
//             status:'fail',
//             data:{


//             }
            

//         })
//     }
//     else{

//         // data.id = 121;
//     // console.log(data)
//     // res.send('work in progress')


//     const db = await fsPromises.readFile("./data.json", 'utf8')
//     const arr = JSON.parse(db);
//     const len = arr.length;
//     const newproduct=data;

//     if (len == 0) {
//         newproduct.id = 1;
//         // console.log(arr);
//         // arr.push(data);
//         console.log(arr);
//         // fsPromises.writeFile('./data.json', JSON.stringify(arr));// data is stored in data.json
//     }
//     else {
//         // const newproduct=data;
//         newproduct.id=(arr[len-1].id)+1;
//         // arr.push(newproduct)
//         // fsPromises.writeFile('./data.json', JSON.stringify(arr));// data is stored in data.json


//     }
//     arr.push(newproduct)
//     fsPromises.writeFile('./data.json', JSON.stringify(arr));// data is stored in data.json
    
//     res.json({
//         status:'success',
//         results:1,
//         data:{
//             newproduct:newproduct,
//         }

//     })

        
//     }
    

// })


///////////////////exported get request bu controller//////////
// app.post('/api/products',productcontroller.addproduct )




//////////////////////////////put data request/////////////////
// app.put('/api/products/:id',async(req,res)=>
// {
//    const arr=JSON.parse(await fsPromises.readFile('./data.json','utf8'))
   
//     // res.send("work in progress")  /// har eak request me response sirf eak baar send hoga 
//    const newid=parseInt(req.params.id);
//     const data=req.body
//     data.id=newid
//     // console.log(data);

//     const newarr=arr.map((elem)=>
//     {
//         if(elem.id==newid) return data;
//         else return elem;

//     })
//     fsPromises.writeFile('./data.json',JSON.stringify(newarr))

//     res.json({
//         status:'success',
//         results:1,
        
//             data: {
//                 newProduct:data,
//             }
       

//     })
//     console.log(data);
    

// })



/////////////////exported from put request by controller///////////
// app.put('/api/products/:id', productcontroller.modifyproduct);



///////////////////////////////delete request////////////////
// app.delete('/api/products/:id',async(req,res)=>{
//     const reqid=parseInt(req.params.id)
//     const arr=JSON.parse(await fsPromises.readFile("./data.json","utf-8"))
//     const newarr=arr.filter((elem)=>{
//         if(elem.id===reqid) return false;
//         else return true;
//     })
//     fsPromises.writeFile("./data.json",JSON.stringify(newarr));
//     res.json({
//         status:'success',
//         data:{
//             newProduct:null
//         }
//     })
// })



///////////////exported from delete request by controller//////////////////

// app.delete('/api/products/:id',productcontroller.deleteproduct)





/////////////////////users.////////////////////////////////////

////////////////// for users when users doo somthing it will get stored in log file  ////////////////////
// app.get('/api/users', (req,res)=>
// {
//     res.status(501)
//     res.json({
//         status:"fail",
//         data:{
//             msg: 'route is not implemented yet get'
//         }

//     })
// })


// app.post('/api/users', (req,res)=>
// {
//     res.status(501)
//     res.json({
//         status:"fail",
//         data:{
//             msg: 'route is not implemented yet post'
//         }

//     })
// })


// app.put('/api/users', (req,res)=>
// {
//     res.status(501)
//     res.json({
//         status:"fail",
//         data:{
//             msg: 'route is not implemented yet put'
//         }

//     })
// })


// app.delete('/api/users', (req,res)=>
// {
//     res.status(501)
//     res.json({
//         status:"fail",
//         data:{
//             msg: 'route is not implemented yet delete'
//         }

//     })
// })


/////exported by controller/////////
// app.get('/api/users',usercontroller.getuser);

// app.post('/api/users',usercontroller.postuser);

// app.put('/api/users',usercontroller.putuser);

// app.delete('/api/users',usercontroller.deleteuser);


app.listen(3100);