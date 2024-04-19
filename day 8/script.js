const http = require('http');
const fs=require('fs')

const data=fs.readFileSync('./data.json','utf8')
// console.log(typeof(data))
const dataobj=JSON.parse(data);
const item= dataobj.movies;


const htmlTemplete = `
<!DOCTYPE HTML>
<html lang='en'>
    <head>
    <style>
    Img{
        height:100%;
        width:100%;
    }
    p{
        color:white;
    }
    
        .card
        {
           width:400px;
           height:350px;
            margin:20px auto;
            // border: 3px double blue;
            // border-radius:8px;
            padding:16px;
            // background-color:#D6ED17FF;
            // box-shadow:2px 8px 5px grey;
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
          background-color:white;
        
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
          background-color:aqua;
          -webkit-box-shadow:u 0px 0px 14px 0px rgba(0,0,0,0.75);
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




      /////////////flip card //////////////

      body {
        
        font-family: 'Lily Script One';
      }
      
      .card {
       
        perspective: 500px;
      }
      
      .content {
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 15px rgba(0,0,0,0.1);
      
        transition: transform 1s;
        transform-style: preserve-3d;
      }
      
      .card:hover .content {
        transform: rotateY( 180deg ) ;
        transition: transform 0.5s;
      }
      
      .front,
      .back {
        position: absolute;
        height: 100%;
        width: 100%;
        background: lightblue;
        line-height: 300px;
        color: #03446A;
        text-align: center;
        font-size: 30px;
        border-radius: 5px;
        backface-visibility: hidden;
        box-shadow:5px 5px 5px grey;
      }
      
      .back {
        background: #03446A;
        color: white;
        transform: rotateY( 180deg );
      }


        </style>
    </head>
    <body>
    <header class="header">
    <h1 class="logo"><a href="#">NODE JS</a></h1>
  <ul class="main-nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">Movies</a></li>
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



// const CardTemplete=`
// <div class='product-card'>

    
// <h3>Title:title</h3>
// <div class='innerdiv'>




//     <p>info</p>
//     </div>
// </div>
// `;
const CardTemplete=`<div class="card">
<div class="content">
  <div class="front">
  <img src='Img'>
  </div>
  <div class="back">
  <h6>Actors:title</h6>
  
//   <p>info</p>
  </div>
</div>
</div>
`





const allCard=item.map((elem)=>
{
    let newcard=CardTemplete;
    
    newcard=newcard.replace('title',elem.actors)
    newcard=newcard.replace('Img',elem.posterUrl)
    // newcard=newcard.replace('info',elem.actors)
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


app.listen(2002, () => {
    console.log('................server started..................')
});