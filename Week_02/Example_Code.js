console.log("Hello World!");

//CHAPTER 2
//setting a value to a variable
let ten = 10;
console.log(ten * ten);
// → 100

//setting multiple variables with "LET"
let one = 1, two = 2;
console.log(one + two);
// → 3

//CHAPTER 3
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

//CHAPTER 4
//Define an array and then reference the values with the indexes
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3
//Dealing with Properties
console.log(listOfNumbers.length);
console.log(listOfNumbers[listOfNumbers.length-1]);

//Methods use () and perform functions to the item or variable
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

//Objects
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

//Using the "in" operator on an object
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

//ASSIGN copies all properties from one object to another
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}

//OBJECT that holds an array of objects
let journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true}
  /* and so on... */
];
console.log(journal);

//Direct Translation of the ϕ formula into javascript
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));
// → 0.068599434

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", journal));
// → [76, 9, 4, 1]

//Loops
for (let i = 0; i < journal.length; i++) {
  let entry = journal[i];
  console.log('Squirrel? '+entry.squirrel)
  // Do something with entry
}

//Finding all event types
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}
console.log(journalEvents(journal));

//Corrilations
for (let event of journalEvents(journal)) {
  console.log(event + ":", phi(tableFor(event, journal)));
}


for (let event of journalEvents(journal)) {
  let correlation = phi(tableFor(event, journal));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}

//string properties
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
console.log("one two three".indexOf("ee"));
// → 11
console.log("  okay \n ".trim());
// → okay
console.log(String(6).padStart(3, "0"));
// → 006
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping
console.log("LA".repeat(3));
// → LALALA
let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b

//Rest parameters (... notation)
let wordsRest = ["never", "fully"];
console.log(["will", ...wordsRest, "understand"]);
// → ["will", "never", "fully", "understand"]

//JSON Storage
let JSONstring = JSON.stringify({squirrel: false,
  events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(JSONstring).events);
// → ["weekend"]