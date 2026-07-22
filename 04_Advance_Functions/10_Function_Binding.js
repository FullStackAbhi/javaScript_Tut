// Function Binding (this, bind, call, apply)

// This is one of the hardest JavaScript topics for beginners.

// Most students don't struggle with bind().
// They struggle with:

// What is this?

// So before teaching bind, teach this properly.

// Why Do We Need this?

// Imagine:

const user = {
    name: "Abhishek"
};

console.log(user.name);

// Output:

// Abhishek

// Works.

// But now:

const user = {

    name: "Abhishek",

    sayHi() {
        console.log(user.name);
    }
};

user.sayHi();

// Output:

// Abhishek

// Still works.

// Problem:

const admin = {
    name: "Admin"
};

// If we copy function:

admin.sayHi = user.sayHi;

// Now:

admin.sayHi();

// Should show:

// Admin

// But function contains:

user.name

// Hardcoded.

// Bad.

// JavaScript solution:

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>. this
// What is this?

// this means:

// The object that called the function.

// Example:
// 
const user = {

    name: "Abhishek",

    sayHi() {
        console.log(this.name);
    }
};

user.sayHi();

// Output:

// Abhishek

// Because:

// user called sayHi()

// So:

// this = user
// Another Example
const admin = {

    name: "Admin",

    sayHi() {
        console.log(this.name);
    }
};

admin.sayHi();

// Output:

// Admin

// Because:

// this = admin
// Important Rule

// this is determined at call time.

// Not creation time.

// Example:

// function sayHi() {
//     console.log(this.name);
// }

// Attach to user:

// user.sayHi = sayHi;

// Attach to admin:

// admin.sayHi = sayHi;

// Now:

// user.sayHi();

// Output:

// Abhishek

// Now:

// admin.sayHi();

// Output:

// Admin

// Same function.

// Different caller.

// Losing this

// Biggest Problem.

// Example:

// const user = {

//     name: "Abhishek",

//     sayHi() {
//         console.log(this.name);
//     }
// };

// setTimeout(user.sayHi,1000);

// Output:

// undefined

// Students ask:

// Why?

// Because:

// user.sayHi

// was passed separately.

// After 1 second:

// sayHi()

// runs.

// NOT:

// user.sayHi()

// So:

// this

// gets lost.

// Visual Representation

// Original:

// user.sayHi()
// caller = user

// After timeout:

// sayHi()
// caller = none

// Result:

// this = undefined

// (strict mode)

// bind()

// JavaScript solution:

// bind

// Syntax

// func.bind(object)

// Example

// const user = {

//     name: "Abhishek",

//     sayHi() {
//         console.log(this.name);
//     }
// };

// const boundFunction =
//       user.sayHi.bind(user);

// boundFunction();

// Output:

// Abhishek
// What Does bind Do?

// Think:

// bind()

// creates a copy of function.

// And permanently fixes:

// this

// Visualization

// Original:

// sayHi()

// ↓

// Bind:

// sayHi.bind(user)

// ↓

// New Function:

// function(){
//     this = user
// }

// (Not actual JS, just concept)

// Fixing setTimeout
// const user = {

//     name:"Abhishek",

//     sayHi(){
//         console.log(this.name);
//     }
// };

// setTimeout(
//     user.sayHi.bind(user),
//     1000
// );

// Output:

// Abhishek
// Partial Application With bind

// Interesting feature.

// Example:

// function multiply(a,b){
//     return a*b;
// }

// Fix first argument:

// const double =
//       multiply.bind(null,2);

// Now:

// double(5);

// Actually becomes:

// multiply(2,5);

// Output:

// 10
// call()

// Before bind existed, JS gave:

// call()

// Syntax

// func.call(thisArg,arg1,arg2)

// Example

// function greet(){

//     console.log(this.name);
// }

// greet.call({
//     name:"Abhishek"
// });

// Output:

// Abhishek
// How call Works

// Temporarily sets:

// this

// and immediately executes function.

// Example

// function greet(city){

//     console.log(
//         this.name,
//         city
//     );
// }

// greet.call(
//     {name:"Abhi"},
//     "Delhi"
// );

// Output:

// Abhi Delhi
// apply()

// Very similar.

// Syntax

// func.apply(thisArg,argsArray)

// Example

// function greet(city,country){

//     console.log(
//        this.name,
//        city,
//        country
//     );
// }

// greet.apply(
//     {name:"Abhi"},
//     ["Delhi","India"]
// );

// Output:

// Abhi Delhi India
// Difference Between call and apply
// call

// Arguments separated.

// func.call(obj,a,b,c);
// apply

// Arguments in array.

// func.apply(obj,[a,b,c]);
// Difference Between bind and call
// call

// Runs immediately.

// func.call(obj);
// bind

// Returns new function.

// const fn =
//     func.bind(obj);

// Must call later.

// Visual Comparison
// call
// greet.call(user);

// ↓

// Runs now
// apply
// greet.apply(user);

// ↓

// Runs now
// bind
// const fn =
//     greet.bind(user);

// ↓

// Runs later
// Real World Example

// Borrowing Methods

// const user = {

//     name:"Abhishek",

//     show(){
//         console.log(this.name);
//     }
// };

// const admin = {
//     name:"Admin"
// };

// user.show.call(admin);

// Output:

// Admin

// Why?

// Because:

// this = admin

// temporarily.

// Interview Questions
// What is this?

// Object that calls the function.

// Why does this get lost?

// Because function is passed separately.

// setTimeout(user.sayHi)
// What does bind return?

// A new function with permanently fixed this.

// Difference Between call apply bind?
// Method	Executes Immediately	Returns Function
// call	✅	❌
// apply	✅	❌
// bind	❌	✅
// Difference Between call and apply?
// call(obj,a,b,c)
// apply(obj,[a,b,c])
// Practice Questions
// Q1
// function greet(){
//     console.log(this.name);
// }

// greet.call({
//     name:"John"
// });

// Output?

// Q2
// const user = {

//     name:"Abhi",

//     sayHi(){
//         console.log(this.name);
//     }
// };

// setTimeout(
//     user.sayHi,
//     1000
// );

// Output?

// Q3

// Fix previous code using:

// bind()
// Assignment

// Create:

// multiply(a,b)

// and make:

// double()

// using bind.