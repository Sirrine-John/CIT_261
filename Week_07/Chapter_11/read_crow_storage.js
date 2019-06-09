var bigOak = require("./crow_tech").bigOak;

try{bigOak.readStorage("food caches", caches => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, info => {
    console.log(info);
  });
});}catch(e){__sandbox.error(e);}