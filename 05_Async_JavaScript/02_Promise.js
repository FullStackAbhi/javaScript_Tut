// JavaScript Asynchronous Programming

// Before learning callbacks or promises, students should understand one question.

// Why do we need asynchronous programming?

// Imagine you're downloading a movie.

// Downloading takes 10 seconds.

// If JavaScript waited for the download to finish before doing anything else, the whole webpage would freeze.

// Example:

console.log("Start");

// // Downloading file (10 sec)

console.log("End");

// Without asynchronous programming

// Start

// (wait 10 sec)

// End

// The browser freezes.

// Instead JavaScript says

// "I'll start downloading, meanwhile I'll continue executing other code."

// Start
// End

// (after download)

// Downloaded

// This is called Asynchronous Programming.

// Synchronous vs Asynchronous
// Synchronous

// Works one line at a time.

// Next line waits for previous line.

// Example

console.log("A");
console.log("B");
console.log("C");

// Output

// A
// B
// C

// Everything happens in order.

// Asynchronous

// Some operations take time.

// Instead of waiting, JavaScript keeps executing other code.

// Example

console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");

// Output

// A
// C
// (after 2 sec)
// B

// Question students ask:

// Why did C print before B?

// Because setTimeout is asynchronous.

// Common Asynchronous Operations

// These are asynchronous.

// ⁡⁣⁣⁢setTimeout()

// setInterval()

// fetch()

// XMLHttpRequest⁡
// Dom manipulation 

// ⁡⁣⁣⁢Database query

// Reading files (Node)

// API calls

// Geolocation

// Camera access⁡

// ⁡⁣⁣⁢Payment gateway⁡



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>.     ⁡⁢⁣⁢​‌‌‍Callback Functions​⁡

// Definition

// A callback is

// A function passed as an argument to another function which is executed later.

// Simple definition

// One function gives another function to call later.
// First Example


function greet(name) {
    console.log("Hello", name);
}

function processUser(callback) {
    callback("Abhishek");
}

processUser(greet);

// Output

// Hello Abhishek

// Let's understand.

// Step 1

// processUser(greet);

// We're passing the function.

// Not calling it.

// ⁡⁢⁢⁢Wrong⁡

processUser(greet());

// This executes immediately.

// ⁡⁢⁢⁢Correct⁡

processUser(greet);

// Passing the function itself.

// Inside

function processUser(callback) {
    callback("Abhishek");
}

// callback becomes

// greet

// So

// callback("Abhishek");

// becomes

// greet("Abhishek");

// Output

// Hello Abhishek
// Why Callbacks?

// Suppose we order food.

// Ordering takes time.

// We don't know exactly when food arrives.

// When food arrives,

// then call another function.

// Example

function orderFood(callback) {

    console.log("Ordering food...");

    setTimeout(() => {
        console.log("Food Delivered");

        callback();

    },3000);

}






function eatFood(){
    console.log("Eating...");
}

orderFood(eatFood);

// Output

// Ordering food...

// (after 3 sec)

// Food Delivered

// Eating...

// Notice

// eatFood executes only after delivery.

// Callback Flow
//⁡⁣⁣⁢ orderFood()

// ↓

// Ordering...

// ↓

// Timer Starts

// ↓

// JavaScript continues

// ↓

// 3 seconds complete

// ↓

// callback()

// ↓

// eatFood()⁡







// ⁡⁢⁣⁢​‌‍‌Anonymous Callback​⁡

// Instead of creating another function

function eatFood(){
    console.log("Eating");
}

orderFood(eatFood);

// We can write

orderFood(function(){

    console.log("Eating");

});

// or

orderFood(() => {

    console.log("Eating");

});

// This is called

// Anonymous callback.

// Real Life Callback

// Button Click

button.addEventListener("click", function(){

    console.log("Clicked");

});

// Here

function(){
   console.log("Clicked")
}

// is callback.

// Browser decides

// "When button is clicked,
// I'll call this function."

// Another Real Example
setTimeout(() => {

    console.log("Done");

},2000);

// Callback

() => {

 console.log("Done");

}

// JavaScript says

// After 2 seconds

// I'll execute this callback.

// Another Example
const numbers = [1,2,3];
numbers.forEach(function(num){

    console.log(num);

});

// Callback

// function(num){

// console.log(num);

// }

// Array decides

// "I'll call this function for every element."

// Output

// 1
// 2
// 3



// Callbacks can have Parameters

function calculate(a,b,callback){

    return callback(a,b);

}

function add(x,y){

    return x+y;

}

let sum  = calculate(10,20,add);

// Output

// 30



// Multiple Callbacks
function calculate(a,b,operation){

    return operation(a,b);

}

console.log(calculate(10,5,(a,b)=>a+b));

console.log(calculate(10,5,(a,b)=>a-b));

console.log(calculate(10,5,(a,b)=>a*b));

// Output

// 15
// 5
// 50

// Same function.

// Different callbacks.

// Advantages of Callback

// ✅ ⁡⁣⁣⁢Code Reusability

// ✅ Asynchronous Programming

// ✅ Event Handling

// ✅ Flexible Code⁡

// Problems with Callback

// As project grows

//⁡⁣⁢⁢ ⁡⁢⁣⁣Callbacks become nested.

// Difficult to read.

// Difficult to debug.

// Difficult to maintain.⁡

// This is

// ⁡⁢⁣⁢Callback Hell⁡
// Callback Hell

// Definition

// Callback inside callback inside callback inside callback.

// Also called

// ⁡⁢⁣⁢Pyramid of Doom⁡

// Because code keeps moving right.

// Imagine

// Login

// ↓

// Get User

// ↓

// Get Orders

// ↓

// Get Payment

// ↓

// Send Email

// Each depends on previous.

// Code

loginUser(function(user){

    getProfile(user,function(profile){

        getOrders(profile,function(order){

            getPayment(order,function(payment){

                sendEmail(payment,function(){

                    console.log("Completed");

                });

            });

        });

    });

});

// Notice

// login

// ↓

// profile

// ↓

// orders

// ↓

// payment

// ↓

// email

// Every callback depends on previous one.

// Looks like

// login(){

//     profile(){

//         orders(){

//             payment(){

//                 email(){

//                 }

//             }

//         }

//     }

// }

// Very difficult.

// Problems of Callback Hell
// 1 Readability

// Huge nesting.

// Impossible to read.

// 2 Difficult Debugging

// Finding error becomes difficult.

// 3 Error Handling

// Every callback needs error checking.

// Example

getUser(function(err,user){

    if(err){

        console.log(err);

        return;

    }

});

// Imagine doing this inside five nested callbacks.

// 4 ⁡⁣⁣⁢Difficult Maintenance⁡

// Adding new step requires more nesting.

// 5 ⁡⁣⁣⁢Reusability decreases⁡

// Code becomes tightly coupled.
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Solution

// JavaScript introduced

// Promises.

// Promise

// Definition

// Promise is

⁡⁣⁣// An object representing the eventual completion or failure of an asynchronous operation.
⁡
// Simple definition

// A Promise is a guarantee that
// "I'll give you the result later."

// Think of ordering from Amazon.

// Order Placed

// ↓

// Packaging

// ↓

// Shipping

// ↓

// Delivered

// While waiting

// Your order is a Promise.

// Eventually

// Either

// Delivered

// or

// Cancelled

// Promise States

// Every Promise has exactly one state.

// Pending

// Still working.

// No result yet.

// Pending
// Fulfilled

// Task completed successfully.

// Resolved

// Success
// Rejected

// Task failed.

// Rejected

// Failure

// Diagram

//            Pending
//            /     \
//           /       \
//  Fulfilled      Rejected

// Once fulfilled or rejected, the state cannot change.

// Creating a Promise

// ⁡⁣⁣⁢Syntax⁡

const promise = new Promise((resolve,reject)=>{

});

// Promise constructor takes one function called the executor.

(resolve,reject)=>{

}

// Executor runs immediately.

// It receives two functions:

resolve()

reject()



// Success Example
const promise = new Promise((resolve,reject)=>{

    // resolve("Payment Successful");
    reject("Payment Failed");

});



promise.then((res)=>{
    console.log(res);
})
promise.catch((err)=>{
    console.log(err);
})















promise.then((result)=>{

    console.log(result);

});

// Output

// Payment Successful


// Failure Example
const promise = new Promise((resolve,reject)=>{

    reject("Payment Failed");

});

promise.catch((error)=>{

    console.log(error);

});

// Output

// Payment Failed






// Promise with setTimeout
const promise = new Promise((resolve)=>{

    setTimeout(()=>{

        resolve("Downloaded");

    },3000);

});

promise.then((result)=>{

    console.log(result);

})


// Output

// (after 3 sec)

// Downloaded

// .then()

// Runs only after success.

promise.then(result=>{

});

// Think

// If success

// ↓

// then execute this.
// .catch()

// Runs only after rejection.

promise.catch(error=>{

});

// Think

// If failure

// ↓

// catch the error.
// .finally()

// Runs every time.

// Whether success or failure.

// Example

promise
.then(()=>{

    console.log("Success");

})
.catch(()=>{

    console.log("Error");

})
.finally(()=>{

    console.log("Finished");

});

// Output (Success)

// Success

// Finished

// Output (Failure)

// Error

// Finished
// Promise Chaining

// Instead of nesting callbacks

// We chain.

loginUser()
.then(getProfile)
.then(getOrders)
.then(makePayment)
.then(sendEmail)
.catch(err=>{

    console.log(err);

});

// Much cleaner.

// Flow

// login

// ↓

// profile

// ↓

// orders

// ↓

// payment

// ↓

// email

// No pyramid.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>






// Returning Values in .then()

Promise.resolve(5)

.then(num=>{

    return num*2;

})

.then(num=>{

    console.log(num);

});

// Output

// 10

// The value returned from one .then() becomes the input of the next .then().

// Returning Another Promise

// If a .then() returns a Promise, the next .then() waits for it.

Promise.resolve("Start")
.then(msg => {
  console.log(msg);
  return new Promise(resolve => {
    setTimeout(() => resolve("After 2 sec"), 2000);
  });
})
.then(msg => {
  console.log(msg);
});

// Output

// Start
// (after 2 sec)
// After 2 sec
// Promise Error Propagation

// Errors thrown inside .then() automatically skip to the nearest .catch().

Promise.resolve("Hello")
.then(() => {
  throw new Error("Something went wrong");
})
.then(() => {
  console.log("This won't run");
})
.catch(err => {
  console.log(err.message);
});

// Output

// Something went wrong
// Callback vs Promise
// Callback	Promise
// Introduced first	Introduced later
// Can lead to callback hell	Solves callback hell
// Hard error handling	Centralized .catch()
// Nested code	Chained code
// Hard to read	Easy to read
// Difficult to maintain	Easy to maintain
// Interview Questions
// 1. What is a callback function?

// A function passed as an argument to another function that is executed later.

// 2. Why do we use callbacks?

// To execute code after another task completes, especially asynchronous tasks like timers, API calls, or events.

// 3. What is callback hell?

// A situation where multiple dependent asynchronous operations are nested inside each other, making the code hard to read, debug, and maintain.

// 4. What is a Promise?

// A Promise is an object that represents the eventual success or failure of an asynchronous operation.

// 5. What are the states of a Promise?
// Pending
// Fulfilled (Resolved)
// Rejected


// 6. What is the difference between resolve() and reject()?
// resolve(value) marks the Promise as successful and passes value to .then().
// reject(error) marks the Promise as failed and passes error to .catch().
// 7. What do .then(), .catch(), and .finally() do?
// .then() handles successful completion.
// .catch() handles errors or rejections.
// .finally() runs regardless of success or failure, often for cleanup.