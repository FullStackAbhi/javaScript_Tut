// Why Do We Need Scheduling?

// Normally JavaScript executes code immediately.

// console.log("A");
// console.log("B");
// console.log("C");

// Output:

// A
// B
// C

// But what if we want:

// A
// (wait 2 seconds)
// B

// For that JavaScript provides timers.

// setTimeout()

// Used to run code once after a delay.

// Syntax:

// setTimeout(function, delay);


// Example:

setTimeout(() => {
    console.log("Hello");
}, 2000);

// Output:

// (wait 2 seconds)
// Hello
// Understanding Delay
// setTimeout(() => {
//     console.log("Hello");
// }, 5000);

// Means:

// Wait 5000 milliseconds
// Then execute callback
// Milliseconds
// 1000 ms = 1 second

// 2000 ms = 2 seconds

// 5000 ms = 5 seconds
// Callback Function

// Look carefully:

// setTimeout(() => {
//     console.log("Hello");
// }, 2000);

// We're not executing:

// console.log("Hello")

// We're passing a function.

// That function is called:

// Callback Function

// Because it will be called later.

// Execution Flow

// Example:

// console.log("Start");

// setTimeout(() => {
//     console.log("Timer");
// }, 2000);

// console.log("End");

// Output:

// Start
// End
// Timer

// Many beginners expect:

// Start
// (wait)
// Timer
// End

// Wrong.

// Why?

// JavaScript does NOT stop.

// It registers timer and continues.

// Visual Flow

// Start
//  ↓
// Timer registered
//  ↓
// End
//  ↓
// 2 seconds pass
//  ↓
// Timer executes
// Passing Arguments

// Example:

// function greet(name){
//     console.log("Hello " + name);
// }

// setTimeout(greet, 2000, "Abhishek");

// Output:

// Hello Abhishek

// Internally:

// greet("Abhishek");

// runs after 2 seconds.

// Storing Timer ID

// When timer is created:

// const timerId = setTimeout(() => {
//     console.log("Hello");
// }, 2000);

// Output:

// console.log(timerId);

// Something like:

// 1

// or

// Timeout {...}

// depending on environment.

// clearTimeout()

// Used to cancel timer.

// Example:

// const timerId = setTimeout(() => {
//     console.log("Hello");
// }, 5000);

// clearTimeout(timerId);

// Output:

// Nothing

// Timer never runs.

// Real Example
// const id = setTimeout(() => {
//     console.log("Session Expired");
// }, 5000);

// clearTimeout(id);

// Useful when:

// User logs out
// User clicks cancel
// Modal closes
// setInterval()

// Runs code repeatedly.

// Syntax:

// setInterval(function, delay);

// Example:

// setInterval(() => {
//     console.log("Hello");
// }, 1000);

// Output:

// Hello
// Hello
// Hello
// Hello
// ...

// Every second forever.

// Visual Representation
// 1 sec → Hello

// 1 sec → Hello

// 1 sec → Hello

// 1 sec → Hello
// Stopping setInterval
// const id = setInterval(() => {
//     console.log("Running");
// },1000);

// clearInterval(id);

// Stops interval.

// Example
// let count = 0;

// const id = setInterval(() => {

//     count++;

//     console.log(count);

//     if(count === 5){
//         clearInterval(id);
//     }

// },1000);

// Output:

// 1
// 2
// 3
// 4
// 5

// Stops automatically.

// Nested setTimeout

// Many developers use this instead of setInterval.

// Example:

// function repeat(){

//     console.log("Hello");

//     setTimeout(repeat,1000);
// }

// repeat();

// Output:

// Hello
// Hello
// Hello
// Hello
// ...

// Why use this?

// Because it gives more control.

// Difference Between setTimeout and setInterval
// setTimeout

// Runs once.

// setTimeout(fn,1000);

// Output:

// After 1 second → execute once
// setInterval

// Runs repeatedly.

// setInterval(fn,1000);

// Output:

// Every second forever
// Common Mistake #1

// Wrong:

// setTimeout(console.log("Hello"),2000);

// Output:

// Hello

// Immediately.

// Why?

// Because:

// console.log("Hello")

// runs instantly.

// Correct:

// setTimeout(() => {
//     console.log("Hello");
// },2000);
// Common Mistake #2
// function greet(){
//     console.log("Hello");
// }

// setTimeout(greet(),2000);

// Wrong.

// Because:

// greet()

// executes immediately.

// Correct:

// setTimeout(greet,2000);
// Common Mistake #3
// let count = 0;

// setInterval(() => {

//     count++;

// },1000);

// Without:

// clearInterval()

// it runs forever.

// Memory leak risk.

// Event Loop Introduction

// Most Important Interview Concept

// Example:

// console.log("Start");

// setTimeout(() => {
//     console.log("Timer");
// },0);

// console.log("End");

// Output:

// Start
// End
// Timer

// Students ask:

// But delay is 0?

// Yes.

// Still:

// Start
// End
// Timer

// Because:

// Call Stack
// ↓
// Empty?
// ↓
// Then timer callback executes

// This behavior is part of:

// Event Loop
// Real-Life Examples
// OTP Expiry
// setTimeout(() => {
//    console.log("OTP Expired");
// },30000);
// Digital Clock
// setInterval(() => {
//    console.log(new Date());
// },1000);
// Auto Logout
// setTimeout(() => {
//    logoutUser();
// },600000);
// Countdown
// let time = 10;

// const id = setInterval(() => {

//     console.log(time);

//     time--;

//     if(time < 0){
//         clearInterval(id);
//     }

// },1000);

// Output:

// 10
// 9
// 8
// 7
// ...
// 0
// Interview Questions
// Difference Between setTimeout and setInterval?
// setTimeout	setInterval
// Runs once	Runs repeatedly
// One execution	Infinite executions until stopped
// How Do You Stop setTimeout?
// clearTimeout(id);
// How Do You Stop setInterval?
// clearInterval(id);
// Why Does setTimeout(fn,0) Run Later?

// Because timer callbacks wait until:

// Call Stack becomes empty

// through Event Loop.

// Practice Questions
// Q1
// console.log("A");

// setTimeout(() => {
//     console.log("B");
// },1000);

// console.log("C");

// Output?

// Q2
// setTimeout(() => {
//     console.log("Hello");
// },0);

// console.log("World");

// Output?

// Q3

// Create a countdown from:

// 5 → 0

// using setInterval.

// Assignment

// Build:

// Digital Clock
// Countdown Timer
// Auto Greeting after 3 seconds
// Stop Timer Button