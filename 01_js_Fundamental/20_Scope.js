// JavaScript Scope & Hoisting - Complete Notes


// 1. What is Scope?

// Scope determines where a variable can be accessed in a program.

// Think of scope as a variable's visibility area.

// There are 3 main types:

// Global Scope
// Function Scope
// Block Scope




//  Global Scope

// A variable declared outside any function or block is globally scoped.

let name = "Divya";//

function greet() {
    console.log(name);
}

// greet();
console.log(name);
// Output
// Divya
// Divya
// Why?

// name is available everywhere because it is declared globally.

// Example
let company = "Google";

function employee1() {
    console.log(company);
}

function employee2() {
    console.log(company);
}

employee1();
employee2();

// Output:











// Google
// Google

// 3. Function Scope

// Variables declared inside a function can only be used inside that function.

function test() {
    let age = 20;//
    console.log(age);//20
}

test();

console.log(age);//


// Output














// 20
// ReferenceError: age is not defined
// Example


function calculate() {
    let result = 100;
    console.log(result);
}

calculate();













// Output:

// 100

// But:

console.log(result);





// Output:

// ReferenceError






// 4. Block Scope

// A block means:

{
   // code
}

// Variables declared using let and const are block-scoped.

{
    let city = "Delhi";
}

console.log(city);//




// Output:

// ReferenceError
// Example with if
if(true){
    var score = 95;
    console.log(score);//
}

console.log(score);

// Output:

// 95
// ReferenceError


// Scope Visualization
let a = 10; // Global

function test() {
    let b = 20; // Function Scope

    if(true){
        let c = 30; // Block Scope
        console.log(a);
        console.log(b);
        console.log(c);
    }
}

test();









// Output
// 10
// 20
// 30













// 5. var vs let vs const

// This is one of the most asked interview topics.

// Feature	        var	           let	      const
// Re-declare	    ✅	           ❌	      ❌
// Re-assign	    ✅	           ✅	      ❌
// Block Scope	    ❌	           ✅	      ✅
// Hoisted	        ✅              ✅          ✅
// TDZ	            ❌	           ✅	      ✅




// var
// Redeclaration Allowed
var name = "Abhishek";

var name = "Rahul";

console.log(name);




// Output:

// Rahul



// Reassignment Allowed

var age = 20;

age = 25;

console.log(age);






// Output:

// 25





// Not Block Scoped
if(true){
    var x = 10;
}

console.log(x);

// Output:

// 10








// This is one reason why var is considered unsafe.


// let
// Redeclaration Not Allowed
let age = 20;

let age = 30;






// Output:

// SyntaxError



// Reassignment Allowed
let age = 20;

age = 25;

console.log(age);







// Output:

// 25




// Block Scoped
if(true){
    let x = 10;
}

console.log(x);






// Output:

// ReferenceError



// const
// Must Initialize
const PI = 3.14;

// Wrong:

const PI;

// Output:

// SyntaxError



// Cannot Reassign
const PI = 3.14;

PI = 4;

// Output:

// TypeError


// Block Scoped
if(true){
    const city = "Delhi";
}

console.log(city);





// Output:

// ReferenceError



// Important const Interview Question
const user = {
    name : "Abhishek"
};


user.name = "Rahul";

console.log(user);

// Output:


{
  name: "Rahul"
}
// Why?

// const prevents changing the reference.

// It does not make the object immutable.


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Consider:

const user = {
    name: "Abhishek"
};

// Here, user does not store the object itself.

// It stores a reference (memory address) to the object.

// Imagine:

// user ---> Object in memory
//           {
//             name: "Abhishek"
//           }

// When you do:

// user.name = "Rahul";

// You're not changing the reference.

// You're modifying the contents of the object that user points to.

// user ---> Object in memory
//           {
//             name: "Rahul"
//           }

// Since the reference didn't change, JavaScript allows it.

// What const actually prevents

// It prevents reassigning the variable to a different reference.

const user = {
    name: "Abhishek"
};

user = {
    name: "Rahul"
};




// Output:

// TypeError: Assignment to constant variable

// Why?

// Because now you're trying to make user point to a completely new object.

// Before:

// user ---> Object A

// After:

// user ---> Object B ❌

// const does not allow changing the reference.

// Array Example

// Same thing happens with arrays.

const arr = [1, 2, 3];

arr.push(4);

console.log(arr);





// Output:

// [1, 2, 3, 4]

// Allowed because the same array is being modified.

// But:

const arr = [1, 2, 3];

arr = [4, 5, 6];

// Output:

// TypeError

// Because the reference changes.





// How to make an object truly immutable

// Use Object.freeze():

// const user = Object.freeze({
//     name: "Abhishek"
// });

// user.name = "Rahul";

// console.log(user);

// Output:

// {
//     name: "Abhishek"
// }

// The modification is ignored (or throws an error in strict mode).

// Interview Answer (Short)

// Q: Why can we modify properties of a const object?

// A: Because const prevents reassignment of the variable reference, not modification of the object's contents. 
// The object stays at the same memory address, so changing its properties is allowed.

// const user = { name: "Abhishek" };

// user.name = "Rahul"; // ✅ Allowed

// user = {}; // ❌ TypeError






// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// 6. Hoisting

// Hoisting means JavaScript moves declarations to the top of their scope before execution.

// var Hoisting
// console.log(a);//

// var a = 10;

// JavaScript internally treats it like:

// var a;//

// console.log(a);

// a = 10;

// Output:

// undefined
// let Hoisting
// console.log(a);

// let a = 10;tdz

// Output:

// ReferenceError
// const Hoisting
// console.log(a);

// const a = 10;

// Output:

// ReferenceError
// Why Error for let and const?

// Because of the Temporal Dead Zone (TDZ).

// Temporal Dead Zone (TDZ)

// The period between:

// Variable Creation
// ↓
// Variable Initialization

// is called TDZ.

// Example:

// console.log(age);

// let age = 20;initialized

// JavaScript knows age exists.

// But it is not  yet.

// Therefore:

// ReferenceError
// TDZ Visualization
// {
//     // TDZ Starts

//     console.log(age);

//     let age = 20;

//     // TDZ Ends
// }


// Function Hoisting

// Functions are fully hoisted.

greet();

function greet(){
    console.log("Hello");
}

// Output:

Hello


// Function Expression Hoisting
greet();

var greet = function(){
    console.log("Hello");
};

// Output:

// TypeError: greet is not a function

// Why?

// Internally:

// var greet;

// greet();

greet = function(){
    console.log("Hello");
};

// At the time of calling:





greet === undefined
// Interview Questions
// Q1



// console.log(a);

// var a = 10;

// Output?

// undefined
// Q2
// console.log(a);

// let a = 10;

// Output?

// ReferenceError
// Q3
if(true){
    var x = 10;
}

console.log(x);





// Output?

// 10
// Q4
// if(true){
//     let x = 10;
// }

// console.log(x);

// Output?

// ReferenceError
// Q5
sayHello();

function sayHello(){
    console.log("Hello");
}

// Output?

// Hello
// Rules to Remember

// ✅ Use const by default

// ✅ Use let when value changes

// ❌ Avoid var in modern JavaScript

// ✅ Functions have their own scope

// ✅ let and const are block-scoped

// ✅ var is function-scoped

// ✅ Functions are fully hoisted

// ✅ Variables are hoisted, but initialization is not

// These concepts are extremely important because they appear everywhere in closures,
//  async JavaScript, React, Node.js, and interview questions.