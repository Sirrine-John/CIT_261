// function canYouSpotTheProblem() {
//     "use strict";
//     for (counter = 0; counter < 10; counter++) { //need to add 'let' in front of counter
//       console.log("Happy happy");
//     }
//   }
//   canYouSpotTheProblem();
  // → ReferenceError: counter is not defined

// function Person(name) { this.name = name; }
// let ferdinand = Person("Ferdinand"); // oops
// console.log(name);
// → Ferdinand

// "use strict";
// function Person(name) { this.name = name; }
// let ferdinand = Person("Ferdinand"); // forgot new befor Person
// → TypeError: Cannot set property 'name' of undefined


// Manually written tests
// function test(label, body) {
//     if (!body()) console.log(`Failed: ${label}`);
//   }
  
//   test("convert Latin text to uppercase", () => {
//     return "hello".toUpperCase() == "HELLO";
//   });
//   test("convert Greek text to uppercase", () => {
//     return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
//   });
//   test("don't convert case-less characters", () => {
//     return "مرحبا".toUpperCase() == "مرحبا";
//   });


//   function numberToString(n, base = 10) {
//     let result = "", sign = "";
//     if (n < 0) {
//       sign = "-";
//       n = -n;
//     }
//     do {
//       result = String(n % base) + result;
//       n = Math.floor(n / base); //had to replace n /= base
//     } while (n > 0);
//     return sign + result;
//   }
//   console.log(numberToString(13, 10));
  // → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…


  // function promptNumber(question) {
  //   let result = Number(prompt(question));
  //   if (Number.isNaN(result)) return null;
  //   else return result;
  // }
  // console.log(promptNumber("How many trees do you see?"));

//   function lastElement(array) {
//     if (array.length == 0) {
//       return {failed: true};
//     } else {
//       return {element: array[array.length - 1]};
//     }
//   }
//   console.log(lastElement(['a','b','c','d','e']));



function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    if (result.toLowerCase() == "up") return "U";
    if (result.toLowerCase() == "down") return "D";
    throw new Error("Invalid direction: " + result);
}
  function look() {
    direction = promptDirection("Which way?")
    if (direction == "L") {
      return "a house";
    } else if (direction == "R") {
      return "two angry bears";
    } else if (direction == "U") {
      return "the sky";
    } else if (direction == "D"){
      return "the ground";
    }
  }
  try {
    console.log("You see", look());
  } catch (error) {
    console.log("Something went wrong: " + error);
  }

  // for (;;) {
  //   try {
  //     let dir = promtDirection("Where?"); // ← typo!
  //     console.log("You chose ", dir);
  //     break;
  //   } catch (e) {
  //     console.log("Not a valid direction. Try again.");
  //   }
  // }

class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  if (result.toLowerCase() == "up") return "U";
  if (result.toLowerCase() == "down") return "D";
  throw new InputError("Invalid direction: " + result);
}

for (;;) {
  try {
    let dir = promptDirection("Where?");
    console.log("You chose ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try again.");
    } else {
      throw e;
    }
  }
}