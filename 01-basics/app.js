// REST OPERATOR (...)
// - Creates collection - Array

// function demoRest(email, ...args) {
//   console.log("Rest Operator : ", args[0]);
// }

// demoRest("test@test.com", 32, true);

// // SPREAD OPERATOR (...)
// // - Splits the collection - Array / Object

// let marks = [99, 98, 93];
// let finalMarks = [89, 88, ...marks];

// console.log("Final Marks : ", finalMarks);

// let userOne = {
//   name: "John Doe",
//   company: "XYZ Inc",
// };

// let userTwo = {
//   ...userOne,
//   name: "Jenny Public",
// };

// console.log("User Two : ", userTwo);

// function demoSpread(email, age, isAdmin) {
//   console.log("Email : ", email);
//   console.log("Age : ", age);
//   console.log("Is Admin : ", isAdmin);
// }
// // Obects are not Iterable
// // let userThree = {
// //   email: "test@test.com",
// //   age: 23,
// //   isAdmin: true,
// // };

// let userFour = ["test1@test.com", 22, false];

// demoSpread(...userFour);

// --------------------
// DESTRUCTURING

// Array Destructuring : Known number of elements
// let friends = ["Monica", "Ross", "Rachel", "Joey"];

// let [f1, f3, f4] = friends;

// console.log("f1 : ", f1);
// console.log("f3 : ", f3);
// console.log("f4 : ", f4);

// Object Destructuring
// let box = {
//   width: 8,
//   height: 9,
//   length: 10,
//   books: ["book1", "book2", "book3"],
//   destination: {
//     city: "Pune",
//     street: "201 Main Road",
//   },
// };

// let {
//   width: boxWidth,
//   length,
//   height: boxHeight,
//   books: [b1, b2, b3],
//   destination: { city, street },
// } = box;

// console.log("Width : ", boxWidth);
// console.log("Height : ", boxHeight);
// console.log("Length : ", length);
// console.log("Book 1 : ", b1);
// console.log("City : ", city);
// console.log("Street : ", street);

// let employees = [
//   { name: "John", age: 23 },
//   { name: "Jenny", age: 22 },
//   { name: "Jack", age: 21 },
// ];

// let [
//   { name: e1_name, age: e1_age },
//   { name: e2_name, age: e2_age },
//   { name: e3_name, age: e3_age },
// ] = employees;

// console.log("Age of Employee Two : ", e2_age);

// let [e1, e2, e3] = employees;

// console.log("Employee One : ", e3);

// let { name: e1_name, age: e1_age } = e1;

// console.log("Employee 1 Name : ", e1_name);

// let { name: e2_name, age: e2_age } = e2;
// ------------------

// TEMPLATE SYNTAX / LITERALS
// - back tick (``)
// - Multi-line string
// - Embed variables into string

// let userName = "Monica Geller";
// let userAge = 22;

// let greetings = `
//     Hello from ${userName},
//     I'm ${userAge} years old!
// `;
// console.log(greetings);

// -------------------
// DEFAULT PARAMETERS

function demoDefaultParameter(arr = []) {
  //   arr = arr || [];
  if (arr.length > 2) {
    console.log("do something");
  } else {
    console.log("do something else");
  }
}

demoDefaultParameter([1, 2, 3]);
