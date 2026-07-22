
// // Why asynchronous programming exists.
// // Why callbacks are needed.
// // What a callback function is.
// // How browsers execute asynchronous tasks.
// // How to load resources asynchronously.
// // Error-first callbacks.
// // Callback Hell (Pyramid of Doom).
// // Why Promises were introduced.


// // What happens when JavaScript encounters a function?

// // Example:

function greet() {
    console.log("Hello");
}

greet();

console.log("Bye");

// // Output

// // Hello
// // Bye

// // Everything executes one line after another.

// // We call this Synchronous Programming.

// What is Synchronous Programming?

// Think of standing in a queue.

// Person 1
// ↓

// Person 2
// ↓

// Person 3
// ↓

// You

// No one can skip the queue.

// JavaScript normally works like this.

// Example:

console.log("Start");

console.log("Middle");

console.log("End");

// Output

// Start
// Middle
// End

// Each line waits for the previous one to finish.

// But Real Life Isn't Like That

// Imagine you're downloading a 500 MB movie.

// Should JavaScript stop the whole website until it downloads?

// Download Movie (5 seconds)

// ↓

// Only then show button

// ↓

// Only then allow clicks

// That would freeze the webpage.

// Nobody wants that.

// Asynchronous Programming

// Instead, JavaScript says:

// Start downloading.

// I'll continue executing the rest of the code.

// Example

// console.log("Start");

// setTimeout(() => {
//     console.log("Downloaded");
// }, 3000);

// console.log("End");

// Output

// Start

// End

// Downloaded

// Notice something?

// The timeout started first.

// But finished last.

// Why?

// Because JavaScript didn't wait.

// Real Browser Example

// Imagine opening YouTube.

// The browser must load:

// HTML

// ↓

// CSS

// ↓

// JavaScript

// ↓

// Images

// ↓

// Videos

// ↓

// Comments

// Should it wait for every image before continuing?

// No.

// Everything loads asynchronously.

// Another Example

// Suppose your browser wants to download React.

// <script src="react.js"></script>

// Downloading takes time.

// JavaScript says:

// Start Download

// ↓

// Continue executing

// ↓

// React finishes later
// Problem

// Suppose React contains:

// function renderApp() {}

// You write:

// loadScript("react.js");

// renderApp();

// Question:

// Will this work?

// No.

// Why?

// Because:

// loadScript()

// ↓

// React is still downloading

// ↓

// renderApp() executes

// ↓

// Function doesn't exist yet

// Output

// ReferenceError
// Why?

// Timeline

// Time 0

// ↓

// Download Starts

// ↓

// renderApp()

// ↓

// Download Finishes

// renderApp executed too early.

// How Do We Solve It?

// We need a way to say:

// Execute my code only after downloading finishes.

// That's exactly what Callbacks do.

//⁡⁢⁣⁢ What is a Callback⁡?

// Definition:

// A callback is simply a function passed as an argument to another function so it can be executed later.

// Example

function greet(callback) {
    console.log("Hello");

    callback();

}

greet(function () {

    console.log("Bye");

});

// Output

// Hello

// Bye

// Notice:

// We didn't call

// callback();

// outside.

// We passed the function.

// Visual
// greet()

// ↓

// Receives Function

// ↓

// Stores Function

// ↓

// Runs Later

// ↓

// callback()

// Real Example

// Imagine ordering food.

// Order Pizza

// ↓

// Wait

// ↓

// Pizza Ready

// ↓

// Restaurant Calls You

// That phone call is the callback.

// Not before.

// Only after the pizza is ready.

// Understanding loadScript()

// Now let's understand the JavaScript.info example.

function loadScript(src) {

    let script = document.createElement("script");

    script.src = src;

    document.head.append(script);

}

// Question:

// What does this do?

// Step 1
let script = document.createElement("script");

// Creates

<script></script>

// Only in memory.

// Not on webpage.

// Step 2
script.src = "react.js";

// Now it becomes

<script src="react.js"></script>

// Still not inside HTML.

// Step 3
document.head.append(script);

// Browser sees

// <head>

// <script src="react.js"></script>

// </head>

// Immediately starts downloading.

// Does append() Wait?

// No.

// It immediately returns.

// Timeline

// append()

// ↓

// Download Starts

// ↓

// Function Ends

// ↓

// Download Continues

// So How Do We Know It's Finished?

// Browser provides

// script.onload

// Meaning

// "Call me after download finishes."

// Complete Version
function loadScript(src, callback) {

    let script = document.createElement("script");

    script.src = src;

    script.onload = function () {

        callback(script);

    };

    document.head.append(script);

}
// What Happens?
// loadScript()

// ↓

// Create Script

// ↓

// Start Download

// ↓

// Wait...

// ↓

// Download Complete

// ↓

// onload Fires

// ↓

// callback()
// Using It
loadScript("app.js", function () {

    console.log("Script Loaded");

});

// Timeline

// Download

// ↓

// Finished

// ↓

// Console

// ↓

// Script Loaded

// Perfect.

// Callback Inside Callback

// Suppose we need

// React

// ↓

// Redux

// ↓

// App

// Cannot load App before React.

// So

// loadScript("react.js", function () {

//     loadScript("redux.js", function () {

//         loadScript("app.js", function () {

//             console.log("Everything Loaded");

//         });

//     });

// });
// Visual
// React

// ↓

// Redux

// ↓

// App

// ↓

// Run Code

// Works.

// But...

// Callback Hell

// Imagine

// 1.js

// ↓

// 2.js

// ↓

// 3.js

// ↓

// 4.js

// ↓

// 5.js

// ↓

// 6.js

// ↓

// 7.js

// Code becomes

// loadScript(

//     loadScript(

//         loadScript(

//             loadScript(

//                 loadScript(

//                 )

//             )

//         )

//     )

// )

// Everything shifts to the right.

// Looks like

// \
//  \
//   \
//    \
//     \

// This is called

// ⁡⁢⁣⁢Pyramid of Doom⁡

// or

// Callback Hell
// Handling Errors

// Suppose

// react.js

// doesn't exist.

// What should happen?

// We need

// script.onerror

// Improved Version

// script.onload = () => callback(null, script);

// script.onerror = () => callback(new Error("Failed"));

// Notice

// Success

// callback(null, script)

// Failure

// callback(error)
// Why null?

// Convention.

// First parameter always stores

// Error

// If no error

// null

// Example

// function(error, result)

// Possible cases

// Success

// error

// ↓

// null

// Failure

// error

// ↓

// Actual Error Object
// Error-First Callback Pattern
// callback(error, result)

// Always

// First argument

// ↓

// Error

// Second argument

// ↓

// Result

// Example

// loadScript("react.js", function(error, script){

//     if(error){

//         console.log(error);

//     }else{

//         console.log("Loaded");

//     }

// });
// Why Promises Were Introduced

// Callbacks solved asynchronous programming.

// But after multiple asynchronous tasks, code became:

// Nested

// ↓

// Hard to Read

// ↓

// Hard to Debug

// ↓

// Hard to Maintain

// So JavaScript introduced

// Promises

// ↓

// Async Await

// to make asynchronous code cleaner and more readable.

// Interview Questions
// What is a callback?

// A callback is a function passed as an argument to another function that is executed later, usually after an asynchronous task completes.

// Why do we need callbacks?

// To execute code only after an asynchronous operation (like loading a script, fetching data, or reading a file) has finished.

// What is callback hell?

// A situation where multiple nested callbacks make the code difficult to read, maintain, and debug.

// What is the Pyramid of Doom?

// Another name for callback hell because the nested callbacks create a pyramid-like structure.

// What is an error-first callback?

// A callback convention where the first parameter is reserved for an error, and the second (and subsequent) parameters contain the successful result.


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// What is a Callback?


// Can we pass a function as an argument to another function?

// They already know functions are first-class citizens.

// Example:

function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Abhishek");
}

processUser(greet);

// Output

// Hello Abhishek

// Ask: Did we call greet()?

// No.

// We passed it.

// Then processUser() executed it later.

// Definition

// A callback is:

// ⁡⁣⁣⁢A function passed as an argument to another function so that it can be executed later.⁡

// Remember this definition.

// Simple Callback Example

function calculate(a, b, callback) {
    let result = a + b;

    callback(result);
}

function logResult(answer) {
    console.log(answer);
}

calculate(10, 20, logResult);

// Output

// 30

// Explain:

// calculate()

// ↓

// Adds numbers

// ↓

// Calls callback()

// ↓

// Callback prints answer


// Another Example
function orderFood(callback) {

    console.log("Preparing Food...");

    callback();

}

orderFood(function(){

    console.log("Food Delivered");

});

// Output

// Preparing Food...

// Food Delivered

// But⁡⁢⁣⁢ Why Do We Need Callbacks?⁡


// Imagine Amazon.

// When you click:

// Buy Now

// Should payment happen immediately?

// No.

// First:

// Create Order

// ↓

// Payment

// ↓

// Order Summary

// ↓

// Update Wallet

// ⁡⁣⁣⁢Each step depends on the previous one⁡.

// Real World Example
const cart = ["Shoes", "Pants", "Kurta"];

api.createOrder(cart);

api.proceedToPayment();

api.showOrderSummary();

api.updateWallet();


// What's wrong here?

// Possible execution:

// Payment

// ↓

// Wallet Updated

// ↓

// Order Created

// Wrong.

// Because JavaScript won't know:

// Wait for Order Creation

// Solution

// We use callbacks.

const cart = ["Shoes", "Pants", "Kurta"];

api.createOrder(cart, function () {

    api.proceedToPayment();

});

// Timeline

// Create Order

// ↓

// Finished

// ↓

// Callback Executes

// ↓

// Payment

// Perfect.

// More Dependent Tasks

// >>>>>>>>
// After payment,

// what should happen?

// Order Summary

// After Order Summary?

// Update Wallet

// Now write

const cart = ["Shoes", "Pants", "Kurta"];

api.createOrder(cart, function () {

    api.proceedToPayment(function () {

        api.showOrderSummary(function () {

            api.updateWallet();

        });

    });

});

// Draw this on the board.

// Create Order

// ↓

// Payment

// ↓

// Summary

// ↓

// Wallet

// Then show the code beside it.


// Callback in Real Life

// ⁡⁣⁣⁢Example 1⁡

// Restaurant

// Order Food

// ↓

// Food Ready

// ↓

// Waiter Calls You

// That phone call

// ↓

// Callback



// ⁡⁣⁣⁢Example 2⁡

// Uber

// Book Cab

// ↓

// Driver Arrives

// ↓

// Notification

// Notification

// ↓

// Callback

// ⁡⁣⁣⁢Example 3⁡

// Download File

// Download Starts

// ↓

// Wait...

// ↓

// Finished

// ↓

// Open File

// Opening the file

// ↓

// Callback

// Why Are Callbacks Important?

// Without callbacks,

// JavaScript cannot know

// When Task Finishes

// Examples

//⁡⁣⁣⁢ API Calls

// ↓

// Database

// ↓

// Payment Gateway

// ↓

// Loading Scripts

// ↓

// Fetching Data

// ↓

// Reading Files⁡

// All use callbacks.

// ⁡⁣⁣⁢Callback Hell⁡

// Everything is moving to the right.

// Example

api.createOrder(cart, function () {

    api.proceedToPayment(function () {

        api.showOrderSummary(function () {

            api.updateWallet(function () {

                api.sendEmail(function () {

                    api.generateInvoice(function () {

                        api.trackShipment(function () {

                            console.log("Completed");

                        });

                    });

                });

            });

        });

    });

});


// Can you quickly find

// generateInvoice() ?

// No.

// Very difficult.

// Why is it Called Callback Hell?

// Because

// Callback

// Inside Callback

// Inside Callback

// Inside Callback

// Inside Callback

// Everything becomes deeply nested.

// Looks like

// \
//  \
//   \
//    \
//     \
//      \

// Another name:

// ⁡⁣⁣⁢Pyramid of Doom⁡
// Problems with Callback Hell
// 1. Hard to Read
// Nested code everywhere
// 2. Hard to Debug

// One missing bracket

// ↓

// Entire code breaks.

// 3. Hard to Maintain

// Adding another step

// ↓

// More nesting.

// 4. Difficult Error Handling

// Every callback needs

// if(error){
//     ...
// }

// Lots of repeated code.

// 5. ⁡⁣⁣⁢Inversion of Control⁡ (Very Important)

// This is the biggest problem.

// Suppose

// api.createOrder(cart, callback);

// Question:

// Who controls

// callback() ?

// Not us.

// The API.

// We trust

// createOrder()

// to call it

// exactly once
// at the correct time
// with the correct data

// What if it never calls it?

// Payment never happens.

// What if it calls it twice?

// Payment happens twice.

// This is called:

// ⁡⁣⁣⁢Inversion of Control⁡

// We lose control because we hand our callback to another function.

// How JavaScript Solved This?

// Callbacks were good.

// But

// Hard to Read

// ↓

// Hard to Maintain

// ↓

// Callback Hell

// ↓

// Inversion of Control

// So ES6 introduced

// ⁡⁢⁣⁢Promises⁡

// Later

// Async Await

// which solve these problems.

// Interview Questions
// What is a callback?

// A callback is a function passed as an argument to another function that is executed later.

// Why do we need callbacks?

// To execute code only after another task has completed, especially asynchronous operations.

// Give some real-world examples.
// API calls
// Payment gateway
// File reading
// Database queries
// Script loading
// Timers (setTimeout)
// Event listeners

// What is Callback Hell?

// A situation where multiple nested callbacks make code difficult to read, debug, and maintain.

// What is another name for Callback Hell?

// Pyramid of Doom.

// What is Inversion of Control?

// When you pass a callback to another function, you give that function control over when, how, or even if your callback gets executed.

//>>>>>>>>>>>>> Inversion of Control


// Imagine

// api.createOrder(cart, callback)

// Question

// Who owns callback?


// API

// Exactly.

 

// What if createOrder() never calls callback?
