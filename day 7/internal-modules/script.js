// const fs=require('node:fs')
// const fs=require('fs')
// const data= fs.readFileSync('./script2.txt',{encoding:'utf8'});  // by utf it changes into string

// console.log(data)  // return buffer
// console.log(data.toString());   // return string



//write filesystem
// const fs=require('fs')
// fs.writeFileSync('./logs.txt','this is new file created by writefilrsync command');



// console.log("start")
// const fs=require('fs')
// const data= fs.readFileSync('./script2.txt',{encoding:'utf8'});
// console.log(data)
// console.log("end") 
////////////////////////////////////////////sync call api////////////////////////////////

//promise api
// const fspromise=require('fs/promises')
// const pr=fspromise.readFile('./script2.txt',{encoding:'utf8'});
// pr.then((res)=>
// {
//     console.log(res);
// })


/////////////////////////////////////////promise call api/////////////////////////////////////

//callback api

// const fscallback=require('fs');
// fscallback.readFile('./script2.txt',{encoding:'utf8'},(err,data)=>
// {
//     console.log(data)

// });

///////////////////////////////////////////////callback api/////////////////////////////////


//////////////////////////////////////server bana rahe hai/////////////////////////////////


const http = require('http');
const fs=require('fs')

const data=fs.readFileSync('./data.json','utf8')
// console.log(typeof(data))
const dataobj=JSON.parse(data);
const product= dataobj.products;


const htmlTemplete = `
<!DOCTYPE HTML>
<html lang='en'>
    <head>
    <style>
        .product-card
        {
           width:400px;
           height:300px;
            margin:20px auto;
            border: 3px double blue;
            border-radius:8px;
            padding:16px;
            background-color:orange;
            box-shadow:2px 8px 5px red;
            transition: background-color 0.5s ease
            transition-property: scale;
            transition-duration: 1.5s;
            

            
        }

        .product-card:hover {
            background-color: yellow;
            -webkit-transform: scale(1.2); 
            
          }
          * {
          box-sizing: border-box;
         
      }
      body {
          font-family: 'Montserrat', sans-serif;
          line-height: 1.6;
          margin: 0;
          min-height: 100vh;
          background-color:aqua;
        
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      
      
      h2,
      h3,
      a {
          color: #34495e;
      }
      
      a {
          text-decoration: none;
      }
      
      
      
      .logo {
          margin: 0;
          font-size: 1.45em;
      }
      
      .main-nav {
          margin-top: 5px;
      
      }
      .logo a,
      .main-nav a {
          padding: 10px 15px;
          text-transform: uppercase;
          text-align: center;
          display: block;
      }
      
      .main-nav a {
          color: #34495e;
          font-size: .99em;
      }
      
      .main-nav a:hover {
          color: #718daa;
      }
      
      
      
      .header {
          padding-top: .5em;
          padding-bottom: .5em;
          border: 1px solid #a2a2a2;
          background-color: tomato;
          -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
          -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
          box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
      }
      
      
      /* ================================= 
        Media Queries
      ==================================== */
      
      
      
      
      @media (min-width: 769px) {
          .header,
          .main-nav {
              display: flex;
          }
          .header {
              flex-direction: column;
              align-items: center;
              .header{
              width: 80%;
              margin: 0 auto;
              max-width: 1150px;
          }
          }
      
      }
      
      @media (min-width: 1025px) {
          .header {
              flex-direction: row;
              justify-content: space-between;
          }
      
      }
      
      footer {
        text-align: center;
        padding: 3px;
        background-color: tomato;
        color: white;
      }

      main{
        display:flex;
        flex-wrap:wrap;
        flex-direction:row;
      }
        </style>
    </head>
    <body>
    <header class="header">
    <h1 class="logo"><a href="#">NODE JS</a></h1>
  <ul class="main-nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">products</a></li>
      <li><a href="#">about</a></li>
      <li><a href="#">Contact</a></li>
  </ul>
</header> 
<main>
        Product_card
 </main>       
        <footer>
  <p>Author: Upasana Chaudhary<br>
  <a href="mailto:mern-tarining-program@gmail.com">mern-tarining-program@gmail.com</a></p>
</footer>
    </body>
</html>`
const CardTemplete=`
<div class='product-card'>
<h1>Brand:brand</h1>
    
<h3>Title:title</h3>


    <p>Description:info</p>
</div>
`;







const allCard=product.map((elem)=>
{
    let newcard=CardTemplete;
    newcard=newcard.replace('brand',elem.brand)
    newcard=newcard.replace('title',elem.title)
    
    newcard=newcard.replace('info',elem.description)
     return newcard;
})




// const allCard=card1+card2;
const page = htmlTemplete.replace(' Product_card',allCard);
// const card2=CardTemplete
// .replace('title','SAMSUNG')
// .replace('info','SAMSUNG')



const app = http.createServer((req, res) => {
    console.log('request recieved');
    console.log(req.url);
    res.writeHead(200, { 'content-type': 'text/html', })
    res.end(page);
});


app.listen(2400, () => {
    console.log('................server started..................')
});