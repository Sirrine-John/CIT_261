const fetch = require("node-fetch");

fetch('https://jsonplaceholder.typicode.com/todos/6')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });