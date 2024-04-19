const express= require('express')

const app=express()        //  express ki functionality ke use karne ke liya 
app.get('/home',(req,res)=>
{
    res.send("get command")
})
app.post('/home',(req,res)=>
{
    res.send("post command")
})

app.put('/home',(req,res)=>
{
    res.send("put command")
})

app.patch('/home',(req,res)=>
{
    res.send("patch command")
})


app.listen(2024)