// const parent=document.getElementById('root');
// const root=ReactDOM.createRoot(parent)  ///virtual dom
// const heading =document.createElement('h1');
// heading.innerText='hello from js dom';
// parent.appendChild(heading);


///////////////////by react///////////////////
// const heading=React.createElement('h1',{},"hello from react");
// const li=React.createElement('li',{},"item 1");

// root.render(li);
// root.render(heading);     /////////// virtual dom me heading update kare



//////////////////list using react//////////////////
// const li1=React.createElement('li',{
//     key:'li1',
//     className:'li-c-1',
// style:{backgroundColor:"red",   ///////inline css
// }},"item1")

// const li2=React.createElement('li',{key:'li2'},"item2")
// const list=React.createElement('ul',{},[li1,li2])

// root.render(list);   /////list add in root(virtual dom)




///////////////////dobara se upper vala hi////////////////

const parent=document.getElementById('root');
const root=ReactDOM.createRoot(parent) 

// const heading=React.createElement('h1',{},"hello from react")
const heading= <h1> Hello from react dsuri line</h1>  // this syntax is not understandable by react so we use babel to convert this into heading1
const str={             ////////inline css
    border:'1px dotted black',
    backgroundColor:'orange',
}
const listitem1= <li className="li-c-1"
 name="upasana"
 style={
    str                     //we can also write the style here
 }> item 1</li>
const listitem2= <li> item 2</li>
// const list=<ul>{listitem1}{listitem2}</ul>

const arr=[listitem1,listitem2];
const list=<ul> {arr.map((elem)=>
    {
        return elem;})}
    </ul>

root.render(heading);
root.render(list);
