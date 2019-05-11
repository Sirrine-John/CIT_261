const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

let table = document.createElement("table");
let headerRow = document.createElement("tr");

let keys = Object.keys(MOUNTAINS[0]);
keys.forEach(key => {
    let th = document.createElement("th");
    let heading = document.createTextNode(key);
    th.appendChild(heading);
    headerRow.append(th);
});

table.appendChild(headerRow);

MOUNTAINS.forEach(mount => {
    let tr = document.createElement("tr");

    let name = document.createElement("td");
    let nameText = document.createTextNode(mount.name);
    name.appendChild(nameText);
    tr.appendChild(name);

    let height = document.createElement("td");
    if (mount.height < 1000) {height.classList = "low"}
    else if (mount.height > 6000) {height.classList = "high"}
    let heightText = document.createTextNode(mount.height);
    height.appendChild(heightText);
    tr.appendChild(height);

    let place = document.createElement("td");
    let placeText = document.createTextNode(mount.place);
    place.appendChild(placeText);
    tr.appendChild(place);

    table.appendChild(tr);
});

document.getElementById("mountains").appendChild(table);
document.getElementById("header").innerHTML = "My Mountains";