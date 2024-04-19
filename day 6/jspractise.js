// const arr=[10,20,30]

// const ans=arr.map((a)=>
// {
//     console.log(a);
//     return a*a
// })

// const ans=arr.map(a=>a**2)

// console.log(ans);

// map makes a new array and return it and does not effect given array
// filter make change in the givn array

// const ans=arr.push(99)
// console.log(ans)

// const ans=arr.filter((a)=>
// {
//     if(a>20) return true;
//     else return false
// })
// console.log(arr)
// console.log(ans)


// const arr=[
//     'delhi','mumbai','kolkata','chennai','pune','russia','usa']

// const ans= arr.filter((s)=>
// {
//     if(s.includes('i'))
//        return true;
//      else false;

// })    
// console.log(ans)


// const arr=['delhi,india','mumbai,india','pune,India','bonjung,china']

// const ans=arr.filter((a)=>
// {
//     const ns=a.toLowerCase()
//     if(ns.includes('india'))
//     {
//         return true;
//     }
//     else{
//         return false
//     }

// })
//  console.log(ans)


//reduce -- help to convert array into object and vice versa

const arr=[10,22,34,50]
const ans=arr.reduce((total,curr,c,d)=>
{
    console.log(total,curr,c,d)
    return total+curr 

})