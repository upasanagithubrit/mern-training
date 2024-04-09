let arr=[12,34,56,78]

// let printpreety= (elem)=>
// {
//     console.log(':' , elem);
// }

// let printpreety= (elem,b)=>
// {
//     console.log(':' , elem,b);
// }

// let printpreety= (elem,b,c)=>
// {
//     console.log(':' , elem,b,c);
// }
// let print=(arr) =>
// {
//     // for(let i of arr)
//     //     console.log(i)

//     arr.forEach(printpreety);
// }

// print(arr);


// set interval and set time out
// setTimeout(() => {
//     console.log("Hello world!");
//   }, 1000);
  
//   // Set an interval to execute a function every 1 second
//   setInterval(() => {
//     console.log("Hello world!");
//   }, 1000);


// const b=document.getElementById('bt');
// bt.addEventListener("click",console.log("btn clicked"));


console.log("start")

// const res= fetch("https://jsonplaceholder.typicode.com/users")
// console.log(res);

// res.then(()=>
// {
//     console.log("fetched")

// });


// const req = fetch("https://jsonplaceholder.typicode.com/users")
// const res =req.then(res=> res.json())
// res.then((data) => console.log(data))

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(
//            res => res.json()
// .then(
//         (data)=>
//         console.log(data)
//     ))


    
fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))
.catch((err)=>
{
    console.log("error")
})
            




console.log("end");















