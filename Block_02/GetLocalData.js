let pokemonList = new Array;
let datatable = document.getElementById("show-data");


for(let key in localStorage){
  if (localStorage.getItem(key) != null){
  pokemonList.push(JSON.parse(localStorage.getItem(key)));
  }
};
pokemonList.sort();

let table = document.createElement("table");
let tr_head = document.createElement("tr");
let th_num = document.createElement("th");
let th_pName = document.createElement("th");
let th_name = document.createElement("th");
let th_cp = document.createElement("th");
let th_num_txt = document.createTextNode("Number");
let th_pName_txt = document.createTextNode("Pokemon Type");
let th_name_txt = document.createTextNode("Name");
let th_cp_txt = document.createTextNode("Combat Power");
th_num.appendChild(th_num_txt);
th_pName.appendChild(th_pName_txt);
th_name.appendChild(th_name_txt);
th_cp.appendChild(th_cp_txt);
tr_head.appendChild(th_num);
tr_head.appendChild(th_pName);
tr_head.appendChild(th_name);
tr_head.appendChild(th_cp);
table.appendChild(tr_head);


pokemonList.forEach(element => {
    let tr = document.createElement("tr");
    let td_num = document.createElement("td");
    let td_pName = document.createElement("td");
    let td_name = document.createElement("td");
    let td_cp = document.createElement("td");

    let td_num_txt = document.createTextNode(element.pNumber);
    let td_pName_txt = document.createTextNode(element.pType);
    let td_name_txt = document.createTextNode(element.pName);
    let td_cp_txt = document.createTextNode(element.pCP);

    td_num.appendChild(td_num_txt);
    td_pName.appendChild(td_pName_txt);
    td_name.appendChild(td_name_txt);
    td_cp.appendChild(td_cp_txt);

    tr.appendChild(td_num);
    tr.appendChild(td_pName);
    tr.appendChild(td_name);
    tr.appendChild(td_cp);

    table.appendChild(tr);
});

datatable.appendChild(table);

