// const ReactDOM=require('react/client');   

// import ReactDOM from'react-dom/client';
// import React from 'react';
// const parent= document.getElementById('root')
// const root=ReactDOM.createRoot(parent);



////////////////////function component////////////////////////////


// const heading=React.createElement('h1',{},"hello from react");   //method 1
// const heading= <h1>hello from react dusri line se</h1>           //method 2
// const Heading=()=>                                                  //method 3
// {
//    return <h1>hello from react dusri line se again</h1>
// }

// console.log(Heading());   ///////////gives react object

// // root.render(Heading()); // method 1
// root.render(<Heading/>)    //method 2-- use camel case always start with capital letter otherwise give error or not work


//////////////////////////////////again work///////////////////////

// import ReactDOM from'react-dom/client';
// import React from 'react';

// const parent= document.getElementById('root')
// const root=ReactDOM.createRoot(parent);

// const Card=(x)=>
// {
//     console.log('props',x);
//     return(
//     <div>
//         <h1>{x.title}</h1>
//         <p> {x.price}</p>
//     </div>)
// }


// const arr=[
//     {
//         title:"laptop",
//         price:"42000"
//     },
//     {
//         title:"mobile",
//         price:"4200"
//     },
//     {
//         title:"washing machine",
//         price:"30000"
//     }

// ]

// const App=()=>                                                  
// {
//    return (
//     <div>
//         <h1> hello from react</h1>
//         {/* {Card(                    //function calling and neeche jsx hai 
//             {
//                 title:'laptop',
//                 price:'42999'
//             }
//         )}   */}
           
            
//         <Card title='laptop' price='42999'/>  
//         <Card title='mobile' price='35000'/>                     
//     </div>
//    )


//     return(
//         <div>
//             {
//                 arr.map((elem)=>
//                 (<Card id={elem.title} title={elem.title} price={elem.price} />)
            
//             )
//             }
//         </div>
//     )
// }

// console.log(App());   ///////////gives react object



////////////////////////////again work/////////////////

import ReactDOM from'react-dom/client';
import React from 'react';
import Homepage from './src/pages/homepage.js';
const parent= document.getElementById('root')
const root=ReactDOM.createRoot(parent);
const App=()=>
{

}
root.render(<App/>)  


