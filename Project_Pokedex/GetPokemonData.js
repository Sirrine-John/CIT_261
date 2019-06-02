let pokemonList = new Array;
let pokemonNames = new Array;
let currentPokemon = new Array;
let nextEvolution = new Array;
let type = new Array;
let weaknesses = new Array;
let showData = document.getElementById("show-data");
let showImg = document.getElementById("show-img");

function collectData() {
    $.getJSON('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
        function (data) {
          pokemonList = data.pokemon;
        //pokemonOut();
        printSinglePokemon(pokemonList.filter(pokemon => pokemon.num == 1));
          }
    );
    showData.innerHTML = 'Loading the Pokedex, Please Wait.';
  };

function pokemonOut(){
    console.log(pokemonList);
};

function selectedChange(){
  let textArea = document.getElementById("selection-box");
  if (parseInt(textArea.value) > 0 && parseInt(textArea.value) < pokemonList.length+1){
    printSinglePokemon(pokemonList.filter(pokemon => pokemon.num == parseInt(textArea.value)));
  }
  else{
    textArea.value = '';
    textArea.setAttribute("placeholder","Try Again. 1 - "+pokemonList.length);
  };
};

function printSinglePokemon(selection){
  currentPokemon = selection;
  getImage(selection[0].img);
  let tab = document.createElement("table");
  let tr1 = document.createElement("tr");
  let tr2 = document.createElement("tr");
  let tr3 = document.createElement("tr");
  let tr4 = document.createElement("tr");
  let tr5 = document.createElement("tr");
  let tr6 = document.createElement("tr");
  let tr7 = document.createElement("tr");
  let td_num = document.createElement("td");
  let td_name = document.createElement("td");
  let td_type = document.createElement("td");
  let td_height = document.createElement("td");
  let td_weight = document.createElement("td");
  let td_weakness = document.createElement("td");
  let td_next_evolution = document.createElement("td");
  let td_head_num = document.createElement("td");
  let td_head_name = document.createElement("td");
  let td_head_type = document.createElement("td");
  let td_head_height = document.createElement("td");
  let td_head_weight = document.createElement("td");
  let td_head_weakness = document.createElement("td");
  let td_head_next_evolution = document.createElement("td");
  let td_blank = document.createElement("td");

  tab.setAttribute("style","height: 215px;");
  td_num.setAttribute("class", "right");
  td_name.setAttribute("class", "right");
  td_type.setAttribute("class", "right");
  td_height.setAttribute("class", "right");
  td_weight.setAttribute("class", "right");
  td_weakness.setAttribute("class", "right");
  td_next_evolution.setAttribute("class", "right");
  td_head_num.setAttribute("class", "left");
  td_head_name.setAttribute("class", "left");
  td_head_type.setAttribute("class", "left");
  td_head_height.setAttribute("class", "left");
  td_head_weight.setAttribute("class", "left");
  td_head_weakness.setAttribute("class", "left");
  td_head_next_evolution.setAttribute("class", "left");


  let txt_head_num = document.createTextNode("Number:");
  let txt_head_name = document.createTextNode("Name:");
  let txt_head_type = document.createTextNode("Type:");
  let txt_head_height = document.createTextNode("Height:");
  let txt_head_weight = document.createTextNode("Weight:");
  let txt_head_weakness = document.createTextNode("Weakness:");
  let txt_head_next_evolution = document.createTextNode("Next Evolution:");
  let txt_num = document.createTextNode(selection[0].num);
  let txt_name = document.createTextNode(selection[0].name);
  let txt_type = document.createTextNode(printArray(selection[0].type));
  let txt_height = document.createTextNode(selection[0].height);
  let txt_weight = document.createTextNode(selection[0].weight);
  let txt_weakness = document.createTextNode(printArray(selection[0].weaknesses));
  let txt_next_evolution = document.createTextNode(printNestedArray(selection[0].next_evolution));

  td_num.appendChild(txt_num);
  td_name.appendChild(txt_name);
  td_type.appendChild(txt_type);
  td_height.appendChild(txt_height);
  td_weight.appendChild(txt_weight);
  td_weakness.appendChild(txt_weakness);
  td_next_evolution.appendChild(txt_next_evolution);
  td_head_num.appendChild(txt_head_num);
  td_head_name.appendChild(txt_head_name);
  td_head_type.appendChild(txt_head_type);
  td_head_height.appendChild(txt_head_height);
  td_head_weight.appendChild(txt_head_weight);
  td_head_weakness.appendChild(txt_head_weakness);
  td_head_next_evolution.appendChild(txt_head_next_evolution);
  
  
  tr1.appendChild(td_head_num);
  tr2.appendChild(td_head_name);
  tr3.appendChild(td_head_type);
  tr4.appendChild(td_head_height);
  tr5.appendChild(td_head_weight);
  tr6.appendChild(td_head_weakness);
  tr7.appendChild(td_head_next_evolution);
  tr1.appendChild(td_num);
  tr2.appendChild(td_name);
  tr3.appendChild(td_type);
  tr4.appendChild(td_height);
  tr5.appendChild(td_weight);
  tr6.appendChild(td_weakness);
  tr7.appendChild(td_next_evolution);

  tab.appendChild(tr1);
  tab.appendChild(tr2);
  tab.appendChild(tr3);
  tab.appendChild(tr4);
  tab.appendChild(tr5);
  tab.appendChild(tr6);
  tab.appendChild(tr7);

  showData.innerHTML = '';
  showData.appendChild(tab);
}

function printNestedArray(array){
  let outArray = new Array;
  let outString = new String;
  if (array === undefined){return "None"}
  else{
  array.forEach(subelement => {outArray.push(printArray(subelement))});
  for (let i in outArray){
    outString = outString + outArray[i] + " --> ";
    }
  return outString.slice(0, -5);}
}

function printArray(array){
  let outString = new String;  
  if (array === undefined){return "None"}
  else{
  for (let i in array){
    outString = outString + array[i] + " : ";
    }
    return outString.slice(0, -3);
  }
}

function getImage(source){
  let img = document.createElement("img");
  img.setAttribute("src",source);
  showImg.innerHTML = "";
  showImg.appendChild(img);
}

function selectedPokemonChange(number){
  printSinglePokemon(pokemonList.filter(pokemon => pokemon.num == number));
}

function countUp(){
  let currentNum = currentPokemon[0].id;
  if (currentNum < pokemonList.length){return selectedPokemonChange(currentNum+1)}
  else{return selectedPokemonChange(1)};
}
function countDown(){
  let currentNum = currentPokemon[0].id;
  if (currentNum > 1){return selectedPokemonChange(currentNum-1)}
  else{return selectedPokemonChange(pokemonList.length)};
}