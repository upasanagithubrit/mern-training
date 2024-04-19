const fs = require("fs")
const http = require("http");
const url = require("url");
const data = fs.readFileSync("./serverside.json", "utf8");
const dataObj = JSON.parse(data).products;
const inputelement=`
<form action="/products">
<input type="text" placeholder="Search.." name="productname">
<button type="submit">Submit</i></button>
</form> 
`
// console.log(data);
const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
<style>

.topnav {
    overflow: hidden;
    background-color: #e9e9e9;
  }
  
  .topnav a {
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }
  
  .topnav a.active {
    background-color: #2196F3;
    color: white;
  }
  
  .topnav .search-container {
    float: right;
  }
  
  .topnav input[type=text] {
    padding: 6px;
    margin-top: 8px;
    font-size: 17px;
    border: none;
  }
  
  .topnav .search-container button {
    float: right;
    padding: 6px 10px;
    margin-top: 8px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }
  
  .topnav .search-container button:hover {
    background: #ccc;
  }
  
  
    .topnav input[type=text] {
      border: 1px solid #ccc;  
    }
  

body{
    background-color: grey;
}
.p-card{
    width:400px;
    height:300px;
    border:2px solid black;
    margin:20px auto;
    padding:16px;
    border-radius:500px;
    background-color:white;
    color:black;
    
    display:flex;
    flex-direction:column;
    
    align-items:center;
}
img{
    width:100px;
    height:100px;

}


main{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
}
a{
    border:2px solid black;
    padding:10px;
    margin:10px;
    border-radius:4px;
    background-color:lightblue;
    text-decoration:none
}
footer{
    text-align:center;
    background-color:tomato;
    padding:16px;
}
</style>
</head>
<body>
<div class="topnav">
<a class="active" href="#home">Home</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>

</div>

    
  <main>
   Product
  </main>
  <footer>
    <div>
        <h2>Author:Upasana Chaudhary</h2>
        
    </div>
  </footer>
</body>
</html>
`
const cardTemplate = `
<div class="p-card">
<h3>title</h3>
<p>description</p>
<img src="pro-img" alt='pro-img'  "/>
<a href="more">More Info</a>
 
</div>
`
let result = [];
for (let i = 0; i < dataObj.length; i++) {
    let temp = cardTemplate;
    temp = temp.replace('title', dataObj[i].title);
    temp = temp.replace('description', dataObj[i].description);
    temp = temp.replace('pro-img', dataObj[i].images[0]);
    temp = temp.replace('more', `/products?id=${i}`);
    result.push(temp);
}

result = result.join('  ')
const page = htmlTemplate.replace('Product', result);


// console.log(result)
const server = http.createServer((req, res) => {
    // const {pathname,query}=url.parse(req.url,true);
    const path = url.parse(req.url, true);
    // console.log('\n',query,'\n');
    // console.log('\n',pathname,'\n');
    res.writeHead(200,{
        'content-type':'text/html'}) 
    const pathname = path.pathname;
    const query = path.query;

    if (pathname === '/home') {
        res.end(inputelement+page);
    }
    else if (pathname === '/products') {
        const id = query.id;
        const pname=query.productname;

        if(pname)    // jab search karene to vaha se print hoga seacrch ka rsult 
        {
            // res.end(pname);
            const searchname=dataObj.filter((elem) => {
                if(elem.title.includes(pname))  return true;
                else return false;
            })
            // res.end(JSON.stringify(searchname));
            res.end(`
            <div style="text-align:center; border: 2px dotted blue; width:60vw; margin: 0px auto; border-radius: 16px;box-shadow:10px 10px  10px gray">
            <h3>Id: ${searchname[0].id}</h3>
           
         </div>
            `)

        }
        else{
            res.end('<h2> product not found</h2>')
            
        }
        // const item = dataObj[id];

        // let tags_string = item.tags.join('</li>\n\t<li>');
        // tags_string = '<ul type="square">\n\t<li>' + tags_string + '</li>\n</ul>';
        // res.end(`
        //     <div style="text-align:center; border: 2px dotted blue; width:60vw; margin: 0px auto; border-radius: 16px;box-shadow:10px 10px  10px gray">
        //     <h3>Id: ${item.id}</h3>
        //     <h2>Title : ${item.title}  </h2>
        //  <h2>Description: ${item.description}  </h2>
         

        //  <img src="${item.images[0]}"  style = "width:200px; height:200px  "/>
         
        //  <p>Price :  ${item.price}  </p> 
        //  <p>Discount percentage : ${item.discountPercentage}  </p> 
        //  <p>Ratings : ${item.rating}  </p> 
        //  <p>Stocks : ${item.stock}  </p> 
        //  <p>Brand : ${item.brand}  </p> 
        //  <p>Category : ${item.category}  </p> 
        //  </div>
        //     `)
        // console.log(dataObj[id]); 
    }
    else {
        res.end('404 .......page not found')
    }
    // res.end(result);
})

server.listen(2500);