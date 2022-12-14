/* -------FINDING THE LENGTH OF AN OBJECT--------- */

let obj = {
  name: "leela",
  age: 24,
  location: "bangalore",
  city: undefined,
};
console.log(Object.keys(obj).length);

/* ---------HOISTING-------- */

/*for a variable */
hoistedVariable = 6;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
var hoistedVariable = 6;

/*for a function*/
hoistVariable(); // Outputs " this is hoisting " even when the function is declared after calling
function hoistVariable() {
  console.log("this is hoisting");
}

/* ----------VAR AND LET DIFF----------- */

let a = 2; /*we cnnot assign let in same scope(global scope, function scope) two times*/
// let a=3;

var b = 3;
var b = 0; /* here we can re declare the same variable with var this is one disadvantage */
console.log(b);

/*-------------- DESTRUCTURING----------*/

const deArray = ["zeep", "bike", "car", "truck"];
/*extracting what we want from array */
const [, secondValue, thirdValue] = deArray;
console.log(secondValue, thirdValue);
/* extracting the elements and swapping the index values of them */
const edibles = ["food", "fruits"];
let [first, second] = edibles;
[first, second] = [second, first];
console.log(first, second);
/*destructuring in objects */
const deObject = {
  frontend: "react",
  backend: "node",
  database: "mongo",
};
const { frontend, database } = deObject;
console.log(frontend, database);

/*---------SPREAD OPERATOR ---------*/

/*in arrays*/
const sprdArr1 = [1, 2, 3];
const sprdArr2 = [4, 5, 6];

const sprdArr = [...sprdArr1, ...sprdArr2];

console.log(sprdArr);

/*in objects*/
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const combinedCar = { ...myVehicle, ...updateMyVehicle };

console.log(combinedCar);

/*-------REST OPERATOR ---------*/

const restArr = (firstName, age, ...restInfo) => {
  console.log(`${firstName},${age}`);
  console.log(restInfo);
};
restArr("lk", 24, "tpt", "tpt", "m");

/*-------SELF INVOKING FUNCTIONS---------*/
(function () {
  console.log("this is self invoking function");
})();

/***************************** ARRAY METHODS*************************************/

/*-------------MAP() METHOD ---------*/
const Arr = [2, 3, 4, 5];
const mapArr = Arr.map((element) => element * 2);
console.log(mapArr);

/*----------- FOREACH() ----------*/
const nums = [20, 30, 40];
nums.forEach((number, i, nums) => {
  console.log(number * 20, i, nums, "foreach");
});

/*-------- REVERSING THE WHOLE LINE----------*/

var str = "hey how are you ?";
var str1 = str.split("").reverse().join();
console.log(str1);

/*----------- REMOVING DUPLICATE VALUES ---------*/
let arr = [1, 1, 3, 3, 2, 2, 4, 4];
let arr1 = [...new Set(arr)];
let arr2 = arr1.sort((a, b) => {
  return a - b;
});
console.log(arr1);

let array = [1, 1, 1, 3, 3, 2, 2, 4, 4];
let array2 = array.filter((n, idx) => {
  return array.indexOf(n) === idx;
});
console.log(array2);

/*------------SYNCHRONOUS CODE EXMPL-------------*/

console.log(" I ");

console.log(" eat ");

console.log(" Ice Cream ");

/*------------ASYNCHRONOUS CODE EXMPL-------------*/

console.log(" I ");

// This will be shown after 2 seconds
setTimeout(() => {
  console.log(" eat ");
}, 2000);

console.log(" choclate ");

/*-------------- IMPURE FUNCTIONS --------------*/
let x = 8;
const impAdd = (y) => {
  x += y;
  console.log(x);
};
impAdd(4);

/*-------------- PURE FUNCTIONS --------------*/
// A pure function is a function without any side effects.

const add = (x, y) => {
  console.log(x + y);
};
add(2, 4);
// You can clone an external state into a pure function

const details = ["name", "age"];
const updatedDetails = (newDetails, array) => {
  return [...array, newDetails];
};
console.log(updatedDetails("place", details));

/*----------------CALLBACK--------------*/
// const greeting = (names) => {
//   alert(`hello ${names}`);
// };

// function processUserInput(callback) {
//   const names = prompt("please enter your name");
//   callback(names);
// }
// processUserInput(greeting);
