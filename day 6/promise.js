// console.log("start")
// setTimeout(()=>
// {
//     console.log("timeinterval")
// },1000)

// console.log("end")

// let createorder = (x , fn)=>
// {

//     console.log(x)
//     setTimeout(() => {
//         fn('123216')
//     }, 1000);
// }

// let makepayment =(orderid)=>

// {
//     console.log(orderid)
// }

// createorder('soap',makepayment);


//promise

// let p1=new Promise((resolve,reject)=>
// {
//     if(true)
//     {
//       setTimeout(()=>
//       {
//         resolve()
//     },4000)
// }
//     else{
//         reject()
//     }

// })

// console.log(p1)




// let p2=new Promise((resolve,reject)=>
// {
//     setTimeout(()=>
//     {
//         reject("notdone")
//     },0);
// });


// setTimeout(()=>
// {
//     console.log("timeout..")

// },0)
// // console.log(p2)

// p2.then((res)=>
// {
//     console.log(res)

// })
// .catch((err)=>
// {
//     console.log(err)

// })


// setTimeout(function abc()
// {
//     console.log("i am one")
// },0)
// const pr=new Promise((res,rej)=>
// {
//     setTimeout(()=>
// {
//     res('done')
// },0)
// });

// pr.then(function b(res)
// {
//     console.log(res)
// })

// setTimeout(function xyz()
// {
//     console.log("i am two")
// },0)


//promise practise
console.log("start")

let callapi = async()=>
{
    const pr=new Promise((res,rej)=>
{
  console.log("promise stated")
  setTimeout(()=>
  {
    console.log("timeout 1...")
  },10000)
})
console.log("promiese completed")

const pr2= await new Promise((res,rej)=>
{
  console.log(" new promise stated")
  setTimeout(()=>
  {
    console.log("timeout 2...")
  },10000)
})
console.log("promise 2 copleted")

  
}
callapi();






