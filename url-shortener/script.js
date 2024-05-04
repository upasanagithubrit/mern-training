const express=require('express');
const urlrouter=require('./routes/urlroute');
const mongoose= require('mongoose')
const app=express();
app.use(express.json());

app.use('/api/url' ,urlrouter)



const link='mongodb+srv://upasnachoudhary216:$_password_$@cluster0.csvjhhd.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'

const password='Mongo216'
const dbname='url-shortener'
let dblink=link.replace('$_password_$',password)
dblink=dblink.replace('$_DB_NAME_$',dbname)

mongoose.connect(dblink)
.then(()=> console.log(".................database connected................"));

app.listen(2000,()=>
{
    console.log("...........app started.........");

})