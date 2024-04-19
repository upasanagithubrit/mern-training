// const figlet= require('figlet')
// figlet('hello',(err,data)=>
// {
//     console.log(data)
// })



// fetch('https://api.github.com/users/deepak3440')
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>
// {
//     console.log("error")
// })


// new method
  let getapi= async()=>
{
    const pr= await fetch("https://api.github.com/users/upasanagithubrit")
    const data=await pr.json();
    console.log(data)

}
getapi();
