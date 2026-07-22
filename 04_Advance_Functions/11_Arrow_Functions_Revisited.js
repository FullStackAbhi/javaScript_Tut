// Arrow Functions

// Arrow Functions were introduced in ES6 to make function syntax shorter and easier to write.

// But they are not just shorter functions.

// The biggest interview topic is:

// Arrow Functions handle this differently than normal functions.

// Why Do We Need Arrow Functions?

// Normal Function:

// function add(a,b){
//     return a+b;
// }

// Arrow Function:

// const add = (a,b) => {
//     return a+b;
// };

// Same result.

// Output:

// add(2,3) // 5
// Basic Syntax
// Normal Function
// function greet(){
//     console.log("Hello");
// }

// Arrow Function:

// const greet = () => {
//     console.log("Hello");
// };
// One Parameter

// Normal:

// function square(num){
//     return num*num;
// }

// Arrow:

// const square = num => {
//     return num*num;
// };

// Parentheses become optional.

// Multiple Parameters
// const add = (a,b) => {
//     return a+b;
// };

// Parentheses required.

// No Parameters
// const greet = () => {
//     console.log("Hello");
// };

// Must use empty parentheses.

// Implicit Return

// Most loved feature.

// Normal:

// const add = (a,b) => {
//     return a+b;
// };

// Short form:

// const add = (a,b) => a+b;

// Output:

// 5
// How Does It Work?

// When JS sees:

// const add = (a,b) => a+b;

// It internally assumes:

// const add = (a,b) => {
//     return a+b;
// };
// Returning Objects

// Common Interview Question

// Wrong:

// const getUser = () => {
//     name:"Abhi"
// };

// Output:

// undefined

// Why?

// Because JS thinks:

// {
// }

// is function body.

// Correct:

// const getUser = () => ({
//     name:"Abhi"
// });

// Output:

// {
//    name:"Abhi"
// }
// Arrow Functions in Array Methods

// Very important.

// map()
// const nums = [1,2,3];

// const doubled = nums.map(num => num*2);

// console.log(doubled);

// Output:

// [2,4,6]
// filter()
// const nums = [1,2,3,4,5];

// const result = nums.filter(num => num > 3);

// console.log(result);

// Output:

// [4,5]
// find()
// const users = [
//    {name:"John"},
//    {name:"Abhi"}
// ];

// const user = users.find(
//    user => user.name === "Abhi"
// );

// Output:

// {name:"Abhi"}
// Function Expression vs Arrow Function

// Function Expression:

// const add = function(a,b){
//     return a+b;
// }

// Arrow:

// const add = (a,b) => a+b;
// Major Difference: this Keyword

// This is where interviews start.

// Normal Function and this
// const user = {

//     name:"Abhi",

//     sayHi:function(){
//         console.log(this.name);
//     }
// };

// user.sayHi();

// Output:

// Abhi

// Because:

// this = user
// Arrow Function and this
// const user = {

//     name:"Abhi",

//     sayHi: () => {
//         console.log(this.name);
//     }
// };

// user.sayHi();

// Output:

// undefined

// Students get shocked here.

// Why?

// Because Arrow Functions do NOT create their own this.

// Important Rule

// Normal Function:

// this

// depends on who called it.

// Arrow Function:

// this

// comes from outer scope.

// Visualization
// const user = {

//    name:"Abhi",

//    sayHi: () => {
//        console.log(this);
//    }
// }

// Arrow checks outside.

// user object
//    ↓
// arrow function
//    ↓
// looks outside
//    ↓
// global scope

// Not inside object.

// Real Problem
// const user = {

//     name:"Abhi",

//     greet(){

//         setTimeout(function(){
//             console.log(this.name);
//         },1000);

//     }
// };

// user.greet();

// Output:

// undefined

// Because callback function gets its own this.

// Old Solution
// const self = this;

// setTimeout(function(){
//     console.log(self.name);
// });

// Ugly.

// Arrow Solution
// const user = {

//     name:"Abhi",

//     greet(){

//         setTimeout(() => {
//             console.log(this.name);
//         },1000);

//     }
// };

// Output:

// Abhi

// Why?

// Arrow borrows:

// this

// from:

// greet()

// which is:

// user
// Arrow Functions Have No arguments Object

// Normal Function:

// function test(){
//     console.log(arguments);
// }

// test(1,2,3);

// Works.

// Arrow Function:

// const test = () => {
//     console.log(arguments);
// }

// Error.

// Use Rest Parameters instead:

// const test = (...args) => {
//     console.log(args);
// }
// Arrow Functions Cannot Be Used as Constructors

// Normal:

// function User(name){
//     this.name = name;
// }

// const u = new User("Abhi");

// Works.

// Arrow:

// const User = (name)=>{
//     this.name = name;
// }

// new User("Abhi");

// Error.

// Because Arrow Functions do not have:

// [[Construct]]
// When Should We Use Arrow Functions?
// Good

// Callbacks

// arr.map(num => num*2)
// setTimeout(() => {})
// filter()
// find()
// reduce()
// Avoid

// Object methods

// const user = {
//    sayHi: () => {}
// }

// Bad practice.

// Use:

// const user = {
//    sayHi(){
//       console.log(this.name);
//    }
// }
// Interview Questions
// Difference Between Normal and Arrow Functions?
// Feature	Normal	Arrow
// Own this	✅	❌
// Own arguments	✅	❌
// Constructor	✅	❌
// Short Syntax	❌	✅
// Why Arrow Functions Were Introduced?
// Cleaner syntax
// Better callback writing
// Fix this problems
// Why Should We Avoid Arrow Functions as Object Methods?

// Because Arrow Functions do not have their own this.

// Practice Questions
// Q1
// const add = (a,b) => a+b;

// console.log(add(2,3));

// Output?

// Q2
// const user = {

//    name:"John",

//    sayHi: () => {
//       console.log(this.name);
//    }
// }

// user.sayHi();

// Output?

// Q3
// const nums = [1,2,3];

// const result = nums.map(num => num*3);

// console.log(result);

// Output?

// Assignment

// Create:

// multiply(a,b)

// using Arrow Function.

// Then create:

// users.filter(...)

// to return users older than 18.