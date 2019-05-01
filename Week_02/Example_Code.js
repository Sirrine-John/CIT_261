console.log("Hello World!");

//setting a value to a variable
let ten = 10;
console.log(ten * ten);
// → 100

//setting multiple variables with "LET"
let one = 1, two = 2;
console.log(one + two);
// → 3

//Defining a function
const square = function(x) {
    return x * x;
  };
  console.log(square(12));
  // → 144

//function with no parameters
  const makeNoise = function() {
    console.log("Pling!");
  };
  makeNoise();
  // → Pling!

//Function with 2 parameters
  const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
  console.log(power(2, 10)+' - 2 Parameter Function');
  // → 1024

//Arrow Function
const powerInput = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
  console.log(powerInput(2,10)+' - Arrow Function');
  //1024

//Make short functions with Arrow Functions
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
console.log(square1(4));
console.log(square2(4));

//missing parameters get passed as "undefined" and extra parameters get dropped
function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
  }
  console.log(minus(10));
  // → -10
  console.log(minus(10, 5));
  // → 5

  //Assigning a parameter in the declaration makes that parameter optional
  function powerOptional(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  }
  console.log(powerOptional(4));
  // → 16
  console.log(powerOptional(2, 6));
  // → 64

//Wrapping function values allows you to set a Variable to a specific instance of a function
  function wrapValue(n) {
    let local = n;
    return () => local;
  }
  let wrap1 = wrapValue(1);
  let wrap2 = wrapValue(2);
  console.log(wrap1());
  // → 1
  console.log(wrap2());
  // → 2

//Recursive Function
  function powerRecursive(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * powerRecursive(base, exponent - 1);
    }
  }
  console.log(powerRecursive(2, 3)+' - Base = 2, Exponent = 3');
  console.log(powerRecursive(2, 8)+' - Base = 2, Exponent = 8');
  console.log(powerRecursive(2, 0)+' - Base = 2, Exponent = 0');
  // → 8