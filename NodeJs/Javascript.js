/**
 * Objects and object notations
 */

// let a = 10
// let obj = {
//   a: 20,
//   b: {
//     c: 1,
//     d: 2
//   }
// }

/**
 * let obj2 = obj // Copying object reference which makes obj2 == obj and all changes done to obj 2 will happend to obj
 * 
 * let obj2 = {}
 * Object.assign(obj2, obj) // creates a shallow copy of obj and puts it in obj2,  here the nested objects will behave in the same way as mentioned in above case
 * 
 *
 * let obj2 = structuredClone(obj) // creates a nested deep clone of obj and puts it in obj2 but still doesnt deep copies the methods of obj into obj2
 * 
 */


// function changeValue(a, obj) {
//   a = 20 
//   obj.a = 30
//   obj.b.c = 100
// }


/**
 * This Object and its uses :
 * 
 * When a function is invoked, an execution context is created which stores the information realted to where the function was called form (call stack),
 * how it was invoked and what are the params passed to it. "this" refers to the binding created at runtime when function is invoked. What it references,
 * entirely depends upon where the function is called from
 */

// // Window Context
// console.log("browser context", this); // In a browser environment, refers to the 'window' object

// // Function context
// function myFunction() {
//   console.log("function context", this);
// }

// myFunction(); // In a browser environment, refers to the 'window' object


// // Method context

// const myObject = {
//   property: 'value',
//   myMethod: function() {
//     console.log("Method context",this.property);
//   }
// };

// myObject.myMethod(); // Refers to 'myObject', prints 'value'


// // constructors context

// function MyClass() {
//   this.property = 'value';
// }

// const myInstance = new MyClass();
// console.log("Class context",myInstance.property); // Prints 'value'


// Event Handlers

// const myButton = document.getElementById('myButton');
// myButton.addEventListener('click', function() {
//   console.log(this); // Refers to the 'myButton' DOM element
// });


// function foo (i) {
//   console.log("iteration: ", i)
//   this.count++
// }

// foo.count = 0 

// foo(1)
// foo(2)
// foo(3)
// foo(4)
// foo(5)

// // foo.call(foo, 1)
// // foo.call(foo, 2)
// // foo.call(foo, 3)
// // foo.call(foo, 4)
// // foo.call(foo, 5)
// console.log(global.count)
// console.log(foo.count)


/**
 * Symbols
 */

// const obj = {
//   name: "harsh"
// };

// const age = Symbol("age");
// obj[age] = 27;

// console.log(obj.age); // Undefined since symbol are not accesible via dot
// console.log(obj["age"]); // undefined as there is no mofification in main object when symbols are added
// console.log(obj[age]); // Access the property using the symbol


// function User (name) {
//   this.name = name
// }



// const user = new User("harsh")

// const user2 = new User("jatin")

// console.log(user, user2)

// Using symbols as property keys
// const myObject = {
//   "property": "Value for symbol1"
// };

// const property = Symbol("");
// const property2 = Symbol("");

// myObject[property] = "Value for symbol2";
// myObject[property2] = "Value for symbol3";

// console.log(myObject[property2]); // "Value for symbol2"
// console.log(myObject.property); // "Value for symbol1"
// console.log(myObject["property"]); // "Value for symbol1"
// console.log(myObject)


/**
 * Call, Apply and Bind
 */

// let a = new WeakMap()
// a.set({"name": "Harsh"}, "harsh")

// let b = a

// a = null
// console.log(a,b, a == b)


/**
 * Object property descriptors
 */

// "use strict" // no erros if this is commented but the modifications wont be done

// let obj = {}
// Object.defineProperty(obj, "name", {
//   value: "Harsh",
//   writable: true,
//   configurable: true
// })
// Object.getOwnPropertyDescriptor(obj, "name")

// console.log(Object.getOwnPropertyDescriptor(obj, "name"))

// obj.name = "Piyush"

// delete obj.name

// console.log(Object.getOwnPropertyDescriptor(obj, "name"))

/**
 * 
 * Getters and setters
 * 
 * let obj = {
    get propName() {
        // getter, the code executed on getting obj.propName
      },

      set propName(value) {
        // setter, the code executed on setting obj.propName = value
      }
    };
 * 
 * 
 */
    // let user = {
    //   name: "John",
    //   surname: "Smith",
    
    //   get fullName() {
    //     return `${this.name} ${this.surname}`;
    //   },
    
    //   set fullName(value) {
    //     [this.name, this.surname] = value.split(" ");
    //   }
    // };

    // user.fullName = "Alice Cooper"; // set fullName is executed with the given value.
    // console.log(user.fullName, user.name, user.surname)


    // let user = {
    //   get name() {
    //     return this.__name;
    //   },
    
    //   set name(value) {
    //     if (value.length < 4) {
    //       console.log("Name is too short, need at least 4 characters");
    //       return;
    //     }
    //     this.__name = value;
    //   }
    // };
    
    // user.name = "Pete";
    // console.log(user.name); // Pete
    
    // user.name = ""; // Name is too short...


    // function User(name, birthday) {
    //   this.name = name;
    //   this.birthday = birthday;
    
    //   // age is calculated from the current date and birthday
    //   Object.defineProperty(this, "age", {
    //     get() {
    //       let todayYear = new Date().getFullYear();
    //       return todayYear - this.birthday.getFullYear();
    //     }
    //   });
    // }

    
    // let john = new User("Harsh", new Date(1997, 1, 23));

    // Object.defineProperty(john, "secret", {
    //   value: "1234",
    //   enumerable: true // setting enumerable false will make property invisible when the object is logged
    // })

    // console.log( john.birthday ); // birthday is available
    // console.log( john.age );      // ...as well as the age
    // console.log( john );      // ...as well as the age
    // console.log(Object.getOwnPropertyDescriptor(john, "secret"))


/**
  * Prototype Inheritance
  * In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification),
  * that is either null or references another object. That object is called “a prototype”.
  * 
  * 
  * 
  */


// let obj = {};

// console.log(obj.__proto__); // {}
// console.log(Object.prototype); // {}

// console.log(obj.__proto__ === Object.prototype); // true
// console.log(obj.toString === obj.__proto__.toString); //true
// console.log(obj.toString === Object.prototype.toString); //true

// let animal = {
//   eat: true
// }

// let bird = {
//   fly: true,
//   __proto__: animal // one way to assign the prototype 
// }

// let fish = {
//   swim: true
// }

// Object.setPrototypeOf(fish, animal) // Another way of assigning the prototype

// console.log(animal.__proto__)
// console.log(bird.eat)
// console.log(fish.eat)

// class Demo {
//   constructor(name) {
//     if (!(this instanceof Demo)) {
//       return new Demo(name);
//     }

//     this.name = name;
//   }

//   printThis() {
//     console.log(this);
//     console.log(this instanceof Demo);
//   }
// }

// const obj = new Demo("Harsh")
// const obj2 = Demo("Gaur")

// console.log(obj)
// console.log(obj2)

// class Temp {

// }

// obj.printThis()


/**
 * Polyfils
 */

// Polyfill for Array.prototype.includes
// if (!Array.prototype.includes) {
//   Array.prototype.includes = function(searchElement, fromIndex) {
//     if (this == null) {
//       throw new TypeError('Array.prototype.includes called on null or undefined');
//     }

//     var array = Object(this);
//     var length = array.length >>> 0;

//     fromIndex = fromIndex || 0;

//     for (var i = fromIndex; i < length; i++) {
//       if (array[i] === searchElement || (isNaN(array[i]) && isNaN(searchElement))) {
//         return true;
//       }
//     }
//     return false;
//   };
// }

// // Using the polyfill
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.includes(3)); // true
// console.log(numbers.includes(6)); // false

// The way of checking if this is array or object
// const arr = []
// const obj = {}


// console.log(Object.prototype.toString, Object.prototype.toString.call(arr))
// console.log(Object.prototype.toString.call(obj))
// console.log(arr.toString())


/**
 * Error Handling
 */

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// class PropertyRequiredError extends ValidationError {
//   constructor(property) {
//     super("No property: " + property);
//     this.name = "PropertyRequiredError";
//     this.property = property;
//   }
// }

// // Usage
// function readUser(json) {
//   let user = JSON.parse(json);

//   if (!user.age) {
//     throw new PropertyRequiredError("age");
//   }
//   if (!user.name) {
//     throw new PropertyRequiredError("name");
//   }

//   return user;
// }

// // Working example with try..catch

// try {
//   let user = readUser('{ "age": 25 }');
// } catch (err) {
//   if (err instanceof ValidationError) {
//     console.log("Invalid data: " + err.message); // Invalid data: No property: name
//     console.log(err.name); // PropertyRequiredError
//     console.log(err.property); // name
//   } else if (err instanceof SyntaxError) {
//     console.log("JSON Syntax Error: " + err.message);
//   } else {
//     throw err; // unknown error, rethrow it
//   }
// }


/**
 * Classes : code template for creating objects
 */


// rewriting class User in pure functions

// // 1. Create constructor function
// function User(name) {
//   this.name = name;
// }
// // a function prototype has "constructor" property by default,
// // so we don't need to create it

// // 2. Add the method to prototype
// User.prototype.sayHi = function() {
//   console.log("Hi", this.name);
// };

// // Usage:
// let user = new User("John");
// user.sayHi();

// class Button {
//   constructor(value) {
//     this.value = value;
//   }

//   click() {
//     console.log(this.value);
//   }
// }

// let button = new Button("hello");
// button.click()
// setTimeout(button.click, 1000);  // Undefined since we lost "this" when we pass it as callback. Instead you can pass a anonymous function and then execute it inside


// class Animal {

//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   // ...
// }

// class Rabbit extends Animal {

//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }

//   // ...
// }

// // now fine
// let rabbit = new Rabbit("White Rabbit", 10);
// console.log(rabbit.name); // White Rabbit
// console.log(rabbit.earLength); // 10
// console.log(rabbit.speed); // 0


// class Animal {
//   name = 'animal';

//   constructor() {
//     console.log(this.name); // (*)
//   }
// }

// class Rabbit extends Animal {
//   name = 'rabbit'
// }

// const a = new Animal(); // animal
// const r = new Rabbit(); // animal

// console.log(a.name, r.name)

/**
 * Generators and Iterators
 */

// function* Generator() {
//   yield a = 10
//   yield b = 20
//   return a + b + c
// }

// let c = 100

// const generator = Generator()
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
