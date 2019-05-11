let user = {
    name: "John",
    age: 30
  };

  
  user.sayHi = function() {
    console.log("Hello!");
  };
  
  user.sayHi(); // Hello!

  //////////////////

  // first, declare
function sayHi() {
    console.log("Hello!");
  };
  
  // then add as a method
  user.sayHi = sayHi;
  
  user.sayHi(); // Hello!

/////////////////
 
  // method shorthand looks better, right?
  user = {
    sayHi() { // same as "sayHi: function()"
      console.log("Hello");
    }
  };
  user.sayHi();

////////////////
  user = {
    name: "John",
    age: 30,
  
    sayHi() {
      console.log(this.name);
    }
  };
  
  user.sayHi(); // John



  user = {
    name: "John",
    age: 30,
  
    sayHi() {
      //console.log( user.name ); // leads to an error
      console.log( this.name );
    }
  };
  let admin = user;
  user = null; // overwrite to make things obvious
  admin.sayHi(); // Whoops! inside sayHi(), the old name is used! error!

//////////////////////

 user = {
    name: "John",
    hi() { console.log(this.name); },
    bye() { console.log("Bye"); }
  };
  
  user.hi(); // John (the simple call works)
  
  // now let's call user.hi or user.bye depending on the name
  (user.name == "John" ? user.hi : user.bye)(); // Error!

/////////////////////////

 user = {
    name: "John",
    hi() { console.log(this.name); }
  }
  
  // split getting and calling the method in two lines
  let hi = user.hi;
  hi(); // Error, because this is undefined

/////////////////////
let calculator = {
    sum() {
      this.value = this.value + this.a + this.b;
      return this;
    },
    mul() {
        if (this.value != 0){
            this.value = this.value * this.a * this.b;
        }
        else{
            this.value = this.a * this.b;
        }
      return this;
    },
     read() {
      this.value = 0;
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
      return this;
    }
  };
  
  alert( calculator.read().sum().sum().value );
  alert( calculator.read().mul().mul().value );