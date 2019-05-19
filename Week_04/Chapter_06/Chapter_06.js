let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
  let whiteRabbit = {type: "white", speak};
  let hungryRabbit = {type: "hungry", speak};
  
  whiteRabbit.speak("Oh my ears and whiskers, " +
                    "how late it's getting!");
  // → The white rabbit says 'Oh my ears and whiskers, how
  //   late it's getting!'
  hungryRabbit.speak("I could use a carrot right now.");
  // → The hungry rabbit says 'I could use a carrot right now.'

  speak.call(hungryRabbit, "Burp!");
// → The hungry rabbit says 'Burp!'

function normalize() {
    console.log(this.coords.map(n => n / this.length));
  }
  normalize.call({coords: [0, 2, 3], length: 5});
  // → [0, 0.4, 0.6]

  let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]

console.log(Object.getPrototypeOf({}) ==
            Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null

console.log(Object.getPrototypeOf(Math.max) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==
            Array.prototype);
// → true

let protoRabbit = {
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  };
  let killerRabbit = Object.create(protoRabbit);
  killerRabbit.type = "killer";
  killerRabbit.speak("SKREEEE!");
  // → The killer rabbit says 'SKREEEE!'

  function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
  }

  function newRabbit(type) {
    this.type = type;
  }
  newRabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  };
  
  let weirdRabbit = new newRabbit("weird");

  console.log(Object.getPrototypeOf(newRabbit) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf(weirdRabbit) ==
            newRabbit.prototype);
// → true

class Rabbit {
    constructor(type) {
      this.type = type;
    }
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  }
  
  let killerRabbitCls = new Rabbit("killer");
  let blackRabbit = new Rabbit("black");

  let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// → hello

Rabbit.prototype.teeth = "small";
console.log(killerRabbitCls.teeth);
// → small
killerRabbitCls.teeth = "long, sharp, and bloody";
console.log(killerRabbitCls.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small

console.log(Array.prototype.toString ==
    Object.prototype.toString);
// → false
console.log([1, 2].toString());
// → 1,2

console.log(Object.prototype.toString.call([1, 2]));
// → [object Array]

let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
  };
  
  console.log(`Júlia is ${ages["Júlia"]}`);
  // → Júlia is 62
  console.log("Is Jack's age known?", "Jack" in ages);
  // → Is Jack's age known? false
  console.log("Is toString's age known?", "toString" in ages);
  // → Is toString's age known? true

  console.log("toString" in Object.create(null));
  // → false

  let ages2 = new Map();
ages2.set("Boris", 39);
ages2.set("Liang", 22);
ages2.set("Júlia", 62);

console.log(`Júlia is ${ages2.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages2.has("Jack"));
// → Is Jack's age known? false
console.log(ages2.has("toString"));
// → false

console.log({x: 1}.hasOwnProperty("x"));
// → true
console.log({x: 1}.hasOwnProperty("toString"));
// → false

Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
  };
  
  console.log(String(blackRabbit));
  // → a black rabbit

  let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn

let stringObject = {
    [toStringSymbol]() { return "a jute rope"; }
  };
  console.log(stringObject[toStringSymbol]());
  // → a jute rope