// Implicit Types (Preferred way)
// let x = "Hello World";
// console.log(typeof x);

// Explicit Types
// let y: number;
// y = 101;
// y = "World"
// y = true;

// Custom Types
// type UserAgeType = string | number;

// let age: UserAgeType;

// age = "Twenty-two";
// age = 22;

// class Foo {}
// let foo: Foo;
// foo = new Foo();

// interface User {
//   name: string;
//   age: number;
// }
// let userOne: User;
// userOne = {
//   name: "John Doe",
//   age: 22,
// };
// console.log("Username : ", userOne.name);

// interface Post {
//     id: number;
//     title: string;
//     body: string;
// }

// let posts: Post[];

// TYPES IN TYPESCRIPT
// let varString: string;
// let varNumber: number;
// let varBoolean: boolean;
// let varDate: Date;
// varDate = new Date("June 10, 2026");
// let varObject: object;
// varObject = { name: "", age: "" };
// let varArray: Array<string>;
// varArray = ["Monica", "Ross", "Rachel"];
// let varNumberArray: number[];
// varNumberArray = [98, 92, 98, 99];
// let varTuple: [string, number, boolean];
// varTuple = ["Hello World", 23, true];
// let varFunc: Function;
// varFunc = function () {};

// let varAny: any;
// varAny = "Hello World";
// varAny = 101;
// varAny = {};
// varAny = [];

// let varUnknown: unknown;
// varUnknown = "Hello World";
// if (typeof varUnknown === "string") {
//   varUnknown.toUpperCase();
// }
// varUnknown = 101;
// if (typeof varUnknown === "number") {
//   varUnknown.toString();
// }
// varUnknown = { name: "John" };

// let username: string | null;

// function alwaysThrowError(): never {
//   throw new Error("Something went wrong");
// }

// window.onload = function () {
//   const txtInputEl = document.getElementById("txtInput") as HTMLInputElement;
//   const btnAddEl = document.getElementById("btnAdd") as HTMLButtonElement;
//   const listContainerEl = document.getElementById(
//     "listContainer",
//   ) as HTMLUListElement;

//   btnAddEl.addEventListener("click", function (event: PointerEvent) {
//     event.preventDefault();
//     let value = txtInputEl.value;
//     const liElement = document.createElement("li");
//     liElement.innerHTML = value.toUpperCase();
//     listContainerEl.appendChild(liElement);
//   });
// };

// ---------------
//  Class
// class Person {
//   private name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }

// class Student extends Person {
//   private studId: string;
//   private _age: number = 0;
//   static numberOfStudents = 0;

//   constructor(id: string, name: string) {
//     super(name);
//     this.studId = id;
//     Student.numberOfStudents += 1;
//   }

//   get age() {
//     return this._age;
//   }

//   set age(value: number) {
//     this._age = value;
//   }

//   public getDetails() {
//     return `
//         Student ID : ${this.studId}
//         Student Name : ${super.getName()}
//         Student Age : ${this.age}
//         Total Enrollled Students : ${Student.numberOfStudents}
//         `;
//   }
// }

// let monica = new Student("S001", "Monica Geller");
// monica.age = 22;
// // console.log(monica.getDetails());

// let ross = new Student("S002", "Ross Geller");
// ross.age = 24;
// console.log(ross.getDetails());

// ------------
// ABSTRACT CLASS
// abstract class Recipe {
//   abstract prepareIngredients(): void;
//   abstract cookRecipe(): void;
//   abstract cleanUpDishes(): void;

//   execute() {
//     this.prepareIngredients();
//     this.cookRecipe();
//     this.cleanUpDishes();
//   }
// }

// class Tea extends Recipe {
//   prepareIngredients(): void {
//     console.log("Bring tea leafs, water, milk and some sugar");
//   }

//   cookRecipe(): void {
//     console.log("boil water for 5 minutes and then add all ingredients");
//   }

//   cleanUpDishes(): void {
//     console.log("Wash all utensils");
//   }
// }

// let tea = new Tea();
// tea.execute();

// -----------------
// GENERICS

function addAtBeggening<T>(value: T, collection: T[]): T[] {
  return [value, ...collection];
}

const newCollection = addAtBeggening<string>("Joey", [
  "Monica",
  "Ross",
  "Rachel",
]);

console.log(typeof newCollection[0]);

const numberCollection = addAtBeggening<number>(99, [98, 91, 89, 79]);

console.log(typeof numberCollection[0]);
