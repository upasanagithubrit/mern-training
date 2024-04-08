//   const obj={
//     "name":"upasana",
//     "lastname":"chaudhary"
// }

// console.log(obj)
// document.write(JSON .stringify(obj))

// const obj={
//     "name":"upasana",
//     "lastname":"chaudhary"
// }

// obj.age=20;
// console.log(obj);

// let arr = [1,2,34]
// arr=[3,4,5]
// arr[1]=20
// arr[10]=25

// arr.push(10)

// console.log(arr)
// console.log(typeof(arr))
 // document.write(JSON.stringify(arr))


//  let arr = [1,2,34]
//  const obj={
//     "name":"upasana",
//      "lastname":"chaudhary"
//  }

//  console.log(Array.isArray(obj))
//  console.log(Array.isArray(arr))

//  let check=(obj)=>
//  {
//     return !(Array.isArray(obj))
//  }

//  console.log(check([1,2,3]));
//  console.log(check(obj))



// const arr=["name",2]
// const obj={
//     "name":"upasana",
//     "age":2
// }


    //  forof loop
// for(let i of arr)
// {
//     console.log(i)
// }

// for(let i of obj)      // not iteratable
// {
//     console.log(i)
// }


    //  forin loop
// for(let i in arr)
// {
//     console.log(i)
// }

// for(let i in obj)
// {
//     console.log(i ,obj[i])
// }


    //   DOM practise
    // console.log(window.document)

    // let res=document.getElementsByClassName("parent")
    // console.log(res)

    // let res=document.querySelectorAll('div>h3')
    // console.log(res)
    // console.log(document)


    // const res=document.getElementById('1p').innerHTML="hello world";
    // res.outerHTML="helloworld"

    // res['ip']="hello"
//   console.log(res);

// const ne=document.createElement("h3")  //.innerHTML="Dynamic";
// ne.innerText="dynamic";
// console.log(ne)
// document.body.appendChild(ne)

// let res=document.getElementsByTagName('h3');
// res[0].setAttribute('id','i7h3')

// let h=document.getElementById('ih3')
// h.remove();

// html line 21

// const res=document.querySelector('div')
// console.log(res)

// res.remove();
// can remove second child
// const child=document.querySelector('p:nth-of-type(2)')

// res.removeChild(child);


// events in js
// let getinfo=(e) =>
// {
    
//     // const child=document.querySelector('p')
//     // child.innerHTML="my name is upasana"
    
//     // const res=document.querySelector('div')
//     // res.prepend("upasana")
//    console.log(e)
//    e.target.setAttribute('style','color:red')
//    e.target.style.color='red';
//    e.target.style.float='right';
// }


//higher order function

let sum = (a,b,print) =>
{
    const ans=a+b;
    print(ans);
}

let print=(x) =>
{
    console.log(x);
}

sum(2,3,print)





                                                                                                             

                                                

     

