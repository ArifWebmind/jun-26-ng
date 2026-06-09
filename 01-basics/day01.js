// ASYNCHRONOUS PROGRAMMING

// console.log("Starting the Program"); // Sync

// // Async
// Promise.resolve().then(function () {
//   console.log("Inside Promise");
// });

// // Async
// setTimeout(function () {
//   console.log("Inside Timer");
// }, 0);

// console.log("Ending the Program"); // Sync

// Dynamic in nature
// var x = 20;
// console.log(typeof x); // number

// var y = "20";

// console.log(x == y); // true - compares only values
// console.log(x === y); // false - compares values along with types

// x = "Hello World";
// console.log(typeof x); // string

// x = {}

// x = function () { }

// x = []

// ARROW FUNCTIONS - Anonymous Function

// var add = (n1, n2) => n1 + n2;

// console.log("Result : ", add(4, 5)); // ?

// var square = (n) => n * n;

// console.log(square(3));

// var marks = [99, 98, 94, 91, 89];

// var total = 0;

// for (var i = 0; i < marks.length; i++) {
//   total += marks[i];
// }

// for (var mark of marks) {
//   total += mark;
// }

// marks.forEach(function (mark) {
//   total += mark;
// });

// marks.forEach((mark) => (total += mark));

// var filteredMarks = marks.filter((mark) => mark > 94);

// console.log("Filtered Marks : ", filteredMarks);
// console.log("Arrow Functional Total Marks : ", total);

// Does not have their own 'this' keyword
// var person = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName: function () {
//     return () => this.firstName + " " + this.lastName;
//   },
// };

// var nestedFn = person.getFullName();
// console.log(nestedFn());

// // SCOPE CHAINING
// // var x = 300;
// function a() {
//   //   var x = 100;
//   function b() {
//     // var x = 200;
//     console.log("X = ", x);
//   }
//   b();
// }

// a();

// Do not 'arguments' keyword
// function demo() {
//   console.log("Arguments : ", arguments);
// }

// var demoArrow = () => console.log("Arrow Arguments : ", arguments);

// demo("Hello", 123, true);
// demoArrow("World", 456, false);

// Can't call with 'new' operator

// Constructor Function
// function Student(name, age) {
//   // var this = {}
//   this.name = name;
//   this.age = age;
//   // return this;
// }

// var Person = (name, age) => {
//   this.name = name;
//   this.age = age;
// };

// var john = new Student("John Doe", 23);
// var jenny = new Student("Jenny Public", 22);

// console.log(john);

// var monica = new Person("Monica", 23);

// BLOCK SCOPING : restricts the scope of the variable to the nearest block
// - let
// - const

// function demoBlockScope(arr) {
//   // LOAD, FLASH = undefined (Variable Hoisting)
//   if (arr.length > 2) {
//     let LOAD = "Loading...";
//     console.log(FLASH); // ?
//   } else {
//     let FLASH = "Flashing...";
//   }
// }

// demoBlockScope([2, 3, 4, 5]);

// const USERNAME = "John";

// USERNAME = "Jenny";

const user = { name: "John" };

user.name = "Jenny";

console.log("User name : ", user.name);

const friends = ["Monica", "Ross", "Rachel"];

friends.push("Joey");

console.log(friends);
