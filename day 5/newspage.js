console.log(">>app started>>")

let callapi= () =>
{
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=c9d643f48bed47ffb81f932d9f33b737")

    .then(res =>  res.json())
    .then((data)=> renderui(data));
}

let renderui = (data)=>
{
    const article=data.articles;
    for(let i=1;i<=article.length;i++)
    {
    const ar1=article[i]
    if(ar1.urlToImage!=null)
    {
    console.log(ar1);
    const root =document.getElementById('root');
    const div=document.createElement("div")
    div.setAttribute("class","news-card")

    const h3= document.createElement("h3")
    h3.innerHTML=ar1.title;
    div.appendChild(h3)

    const p=document.createElement("p")
    p.innerHTML=ar1.description
    div.appendChild(p)

    const img= document.createElement("img")
    img.src=ar1.urlToImage
    div.appendChild(img)

    const a= document.createElement("a")
    a.href=ar1.source;
    a.innerHTML='Read More...'
    
    div.appendChild(a)
    

    
    // div.innerHTML=ar1.title
    root.appendChild(div);
    }
}
}

callapi();


