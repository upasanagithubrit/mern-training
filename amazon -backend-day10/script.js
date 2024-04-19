const express= require('express')
const test=require('./models/productsmodel.js')
const productRouter=require('./routes/productroute.js')
const userRouter=require('./routes/userroute.js')

const app=express();
app.use(express.json()) ////jo bhi request aayegi usse json me karke attach kar deg expresss me ///
app.use('/api/products',productRouter);
app.use('/api/users',userRouter)


const mongoose=require('mongoose');
const url='mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.csvjhhd.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'

const username='upasnachoudhary216'
const dbname='Amazon-backend'
const dbpassword='Mongo216'


let dblink=url.replace('$_PASSWORD_$',dbpassword)
dblink=dblink.replace('$_DB_NAME_$',dbname);
dblink=dblink.replace('$_USERNAME_$',username);

// console.log(dblink);
mongoose.connect(dblink)
  .then(() => console.log('..............database Connected!...........'));

app.listen(2002,()=>

    console.log('..........app started............')

); 