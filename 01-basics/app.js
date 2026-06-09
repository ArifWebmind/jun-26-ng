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

// function demoDefaultParameter(arr = []) {
//   //   arr = arr || [];
//   if (arr.length > 2) {
//     console.log("do something");
//   } else {
//     console.log("do something else");
//   }
// }

// demoDefaultParameter([1, 2, 3]);

// ---------------------
// Higher Order Function - receives functions as argument
// Callback - supplied as argument to HoF
// Callbacks - "Error First, Callback Last"
// function demoHigherOrder(arr, callback) {
//   if (arr.length > 2) {
//     callback(null, "Length is greater than two");
//   } else {
//     callback(new Error("Too less values"));
//   }
// }

// demoHigherOrder([1, 2], function (error, data) {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log(data);
// });

// ---------------
// Working with JSON
// - JSON.stringify()
// - JSON.parse()

// let user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 23,
//   dob: new Date("Dec 21, 2001"),
//   getDetails: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// let stringifyJson = JSON.stringify(user);

// console.log("Stringify JSON : ", stringifyJson);

// let jsObject = JSON.parse(stringifyJson);

// console.log("JavaScript Object : ", jsObject);

// --------------------
// PROMISES

// Producers

// function demoBuildPromise(arr) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (arr.length > 2) {
//         resolve({ message: "Resolved successfully" });
//       } else {
//         reject(new Error("Something went wrong!"));
//       }
//     }, 2000);
//   });
// }

// // Consumer
// // - then().catch()
// function demoConsumePromiseUsingThenAndCatch() {
//   demoBuildPromise([1, 2])
//     .then((response) => console.log("Response : ", response))
//     .catch((error) => console.error(error));
// }
// demoConsumePromiseUsingThenAndCatch();

// // - Async...await (Preferred way)
// async function demoConsumePromiseUsingAsyncAwait() {
//   try {
//     let response = await demoBuildPromise([3, 4]);
//     console.log("Response : ", response);
//   } catch (err) {
//     console.error(err);
//   }
// }

// demoConsumePromiseUsingAsyncAwait();

// -----------------
// FETCHING POSTS

window.onload = function () {
  const btnFetch = document.querySelector("#btn-fetch");
  const listContainer = document.querySelector("#list-container");

  // Using then().catch()
  btnFetch.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        posts.forEach((post) => {
          const liElement = document.createElement("li");
          liElement.innerHTML = post.title;
          listContainer.appendChild(liElement);
        });
      })
      .catch((err) => console.error(err));
  });

  // Using Async...await
  //   btnFetch.addEventListener("click", async function () {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts",
  //       );
  //       const posts = await response.json();
  //       posts.forEach((post) => {
  //         const liElement = document.createElement("li");
  //         liElement.innerHTML = post.title.toUpperCase();
  //         listContainer.appendChild(liElement);
  //       });
  //     } catch (err) {
  //       console.error("Unable to fetch posts");
  //     }
  //   });
};
