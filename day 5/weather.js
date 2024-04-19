// console.log("weather")

let fetchapi = ()=>
{
    fetch(' https://weatherapi-com.p.rapidapi.com/current.json?rapidapi-key=7d0ceb0d4cmsh0de16948158e93cp10b602jsn70b39d682e0e&q=London')
    .then((res)=> res.json)
    .then((data)=> console.log(data))
}

let renderui = (data) =>
{
    const days = data.days;
  console.log(days);

  const row = document.createElement("tr");

  const cell1 = document.createElement("th");
  cell1.innerText = "Date";
  row.appendChild(cell1);

  const cell2 = document.createElement("th");
  cell2.innerText = "Maximum Temp";
  row.appendChild(cell2);

  const cell3 = document.createElement("th");
  cell3.innerText = "Maximum Temp";
  row.appendChild(cell3);

  root.append(row);

  const childRow = document.createElement("tr");
  const c1 = document.createElement("td");
  c1.innerText = "07-04-24";
  row.appendChild(c1);

  const c2 = document.createElement("td");
  c2.innerText = "104 F";
  row.appendChild(c2);

  const c3 = document.createElement("td");
  c3.innerText = "90 F";
  row.appendChild(c3);


root.append(childRow)
}
fetchapi();



