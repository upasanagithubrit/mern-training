const first = (e)=>
{
    const v=e.target.value
    if(v.length>3)
    {
        console.log("checked")
    }
    
}

const submitform=(e) =>
{
    e.preventDefault();
    const t=e.target;
    const res={
        hobbies:[],
    };
    for(let i=0;i<t.length;i++)
{
    const inp=t[i];
    const vl=inp.value;
    const nm=inp.name;
    
    if(inp.type=='checkbox'  && inp.checked)
    {
        res.hobbies.push(vl);

    }
    if(inp.type!='checkbox')
    {
        res[nm]=vl;
    
    }




}
    
console.log(res)
}