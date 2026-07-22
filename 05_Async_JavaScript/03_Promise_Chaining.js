// Promises chaining
// Let’s return to the problem mentioned in the chapter 
// Introduction: callbacks: we have a sequence of asynchronous tasks to be performed one after another — for instance, 
// loading scripts. How can we code it well?

// Promises provide a couple of recipes to do that.

// In this chapter we cover promise chaining.

// It looks like this:

new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});
// The idea is that the result is passed through the chain of .then handlers.

// Here the flow is:

// The initial promise resolves in 1 second (*),
// Then the .then handler is called (**), which in turn creates a new promise (resolved with 2 value).
// The next then (***) gets the result of the previous one, processes it (doubles) and passes it to the next handler.
// …and so on.
// As the result is passed along the chain of handlers, we can see a sequence of alert calls: 1 → 2 → 4.


// The whole thing works, because every call to a .then returns a new promise, so that we can call the next .then on it.

// When a handler returns a value, it becomes the result of that promise, so the next .then is called with it.

// A classic newbie error: technically we can also add many .then to a single promise. This is not chaining.

// For example:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});
// What we did here is just adding several handlers to one promise.
//  They don’t pass the result to each other; instead they process it independently.

// Here’s the picture (compare it with the chaining above):
// All .then on the same promise get the same result – the result of that promise.
//  So in the code above all alert show the same: 1.

// In practice we rarely need multiple handlers for one promise. Chaining is used much more often.

// Returning promises
// A handler, used in .then(handler) may create and return a promise.

// In that case further handlers wait until it settles, and then get its result.

// For instance:

new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  alert(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) { // (**)

  alert(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  alert(result); // 4

});
// Here the first .then shows 1 and returns new Promise(…) in the line (*).
//  After one second it resolves, and the result (the argument of resolve, here it’s result * 2)
//  is passed on to the handler of the second .then. That handler is in the line (**), 
// it shows 2 and does the same thing.

// So the output is the same as in the previous example: 1 → 2 → 4, but now with 1 second delay between alert calls.

// What is ⁡⁣⁣⁢Promise Chaining⁡?

// Definition

// Promise chaining means:

// Connecting multiple .then() methods together so that each asynchronous task runs after the previous one completes.

// Instead of writing nested callbacks, we write a sequence of .then() methods.

// Why do we need Promise Chaining?

// Imagine you have these tasks:

// Login User
//       ↓
// Get Profile
//       ↓
// Get Orders
//       ↓
// Make Payment
//       ↓
// Send Email

// Each task depends on the previous one.

// Using Callbacks

// loginUser(function(user){

//     getProfile(user,function(profile){

//         getOrders(profile,function(order){

//             makePayment(order,function(payment){

//                 sendEmail(payment,function(){

//                     console.log("Done");

//                 });

//             });

//         });

//     });

// });

// Problems:

// Too much nesting
// Hard to read
// Difficult to debug
// Callback Hell


// Using Promise Chaining
// loginUser()
// .then(getProfile)
// .then(getOrders)
// .then(makePayment)
// .then(sendEmail)
// .catch(err => console.log(err));

// Much cleaner.

// How Promise Chaining Works

// Every .then() returns a new Promise.

// This is the most important thing to remember.

// Promise

// ↓

// .then()

// ↓

// New Promise

// ↓

// .then()

// ↓

// New Promise

// ↓

// .then()

// Because every .then() returns another Promise, we can keep chaining.

// Basic Example
Promise.resolve(10)
.then((value) => {
    console.log(value);
    return value * 2;
})
.then((value) => {
    console.log(value);
    return value * 3;
})
.then((value) => {
    console.log(value);
});

// Output

// 10
// 20
// 60
// Step-by-Step
// Step 1
// Promise.resolve(10)

// Creates

// Promise

// Value = 10
// Step 2
// .then((value)=>{
//     console.log(value);
//     return value*2;
// })

// Receives

// 10

// Prints

// 10

// Returns

// 20
// Step 3

// Next .then() receives

// 20
// .then((value)=>{

//     console.log(value);

//     return value*3;

// })

// Prints

// 20

// Returns

// 60
// Step 4

// Last .then()

// Receives

// 60

// Prints

// 60

// Output

// 10
// 20
// 60
// Important Rule

// Whatever you return from one .then()

// becomes the input of the next .then().

// .then()

// return 5

// ↓

// Next then receives 5

// Example

// Promise.resolve(2)

// .then((num)=>{
//     return num+3;
// })

// .then((num)=>{
//     console.log(num);
// });

// Output

// 5
// Returning Normal Values
// Promise.resolve("JavaScript")

// .then((language)=>{

//     return language + " Promise";

// })

// .then((result)=>{

//     console.log(result);

// });

// Output

// JavaScript Promise
// Returning Objects
// Promise.resolve()

// .then(()=>{

//     return {
//         name:"Abhishek",
//         age:25
//     };

// })

// .then((user)=>{

//     console.log(user);

// });

// Output

// {
//  name:"Abhishek",
//  age:25
// }
// Returning Arrays
// Promise.resolve()

// .then(()=>{

//     return [10,20,30];

// })

// .then((numbers)=>{

//     console.log(numbers);

// });

// Output

// [10,20,30]
// Returning Another Promise

// This is where Promise chaining becomes powerful.

// Promise.resolve(5)

// .then((num)=>{

//     return new Promise((resolve)=>{

//         setTimeout(()=>{

//             resolve(num*2);

//         },2000);

//     });

// })

// .then((result)=>{

//     console.log(result);

// });

// Output

// (after 2 sec)

// 10
// What happened?

// First Promise

// 5

// ↓

// First .then()

// Returns another Promise

// ↓

// JavaScript waits

// ↓

// Promise resolves

// ↓

// Next .then() runs

// JavaScript Automatically Waits

// Example

// Promise.resolve("Start")

// .then((msg)=>{

//     console.log(msg);

//     return new Promise((resolve)=>{

//         setTimeout(()=>{

//             resolve("Finished");

//         },3000);

//     });

// })

// .then((msg)=>{

//     console.log(msg);

// });

// Output

// Start

// (after 3 sec)

// Finished

// Notice

// JavaScript automatically waited.

// You never wrote

// wait()
// sleep()
// delay()

// The Promise itself handled the waiting.

// Real Life Example

// Suppose you're ordering food.

// Order Food

// ↓

// Cook Food

// ↓

// Pack Food

// ↓

// Deliver Food

// ↓

// Eat Food

// Promise Chain

// orderFood()

// .then(cookFood)

// .then(packFood)

// .then(deliverFood)

// .then(eatFood)

// .catch(console.log);

// Easy to read.

// Chaining with Arrow Functions
// Promise.resolve(100)

// .then(num=>num+50)

// .then(num=>num/5)

// .then(num=>console.log(num));

// Output

// 30
// Chaining Multiple Calculations
// Promise.resolve(2)

// .then(num=>num+2)

// .then(num=>num*5)

// .then(num=>num-3)

// .then(num=>num/7)

// .then(console.log);

// Calculation

// 2

// ↓

// 4

// ↓

// 20

// ↓

// 17

// ↓

// 2.428571...
// What if We Don't Return?

// Example

// Promise.resolve(10)

// .then((num)=>{

//     console.log(num);

// })

// .then((value)=>{

//     console.log(value);

// });

// Output

// 10

// undefined

// Why?

// Because

// .then(()=>{

// })

// returns

// return undefined;

// automatically.

// So next .then() receives

// undefined
// Error Handling in Promise Chaining

// Example

// Promise.resolve(10)

// .then((num)=>{

//     throw new Error("Something went wrong");

// })

// .then(()=>{

//     console.log("Won't execute");

// })

// .catch((err)=>{

//     console.log(err.message);

// });

// Output

// Something went wrong
// Why?

// When an error occurs

// JavaScript skips every remaining .then().

// Promise

// ↓

// .then()

// ↓

// Error

// ↓

// Skip

// ↓

// Skip

// ↓

// .catch()
// Error Recovery

// You can continue the chain after handling an error.

// Promise.resolve(10)

// .then(() => {
//     throw new Error("Oops!");
// })

// .catch((err) => {
//     console.log(err.message);
//     return 100; // Recover by returning a value
// })

// .then((value) => {
//     console.log(value);
// });

// Output

// Oops!
// 100

// The value returned from .catch() is passed to the next .then().

// .finally() in a Chain

// .finally() runs whether the Promise succeeds or fails.

// Promise.resolve("Success")

// .then((msg)=>{
//     console.log(msg);
// })

// .finally(()=>{
//     console.log("Cleaning up...");
// });

// Output

// Success
// Cleaning up...

// If the Promise is rejected:

// Promise.reject("Failed")

// .catch((err)=>{
//     console.log(err);
// })

// .finally(()=>{
//     console.log("Cleaning up...");
// });

// Output

// Failed
// Cleaning up...

// .finally() is useful for tasks like hiding a loading spinner or closing a database connection.

// Promise Chaining Flow Diagram
// Promise
//    │
//    ▼
// .then()
//    │
// return value
//    │
//    ▼
// .then()
//    │
// return Promise
//    │
// (wait)
//    ▼
// .then()
//    │
// throw Error
//    │
//    ▼
// .catch()
//    │
// return value (optional)
//    ▼
// .then()   ← continues if recovered
//    │
//    ▼
// .finally()
// Common Mistakes
// ❌ Mistake 1: Forgetting to return a Promise
// Promise.resolve()
// .then(() => {
//     new Promise(resolve => {
//         setTimeout(() => resolve("Done"), 2000);
//     });
// })
// .then((msg) => {
//     console.log(msg);
// });

// Output:

// undefined

// The new Promise is created but not returned, so the chain doesn't wait for it.

// ✅ Correct:

// Promise.resolve()
// .then(() => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Done"), 2000);
//     });
// })
// .then((msg) => {
//     console.log(msg);
// });

// Output:

// (after 2 sec)
// Done
// ❌ Mistake 2: Nesting .then() Instead of Chaining
// loginUser().then(user => {
//     getProfile(user).then(profile => {
//         console.log(profile);
//     });
// });

// This works but recreates callback-style nesting.

// ✅ Better:

// loginUser()
// .then(user => getProfile(user))
// .then(profile => {
//     console.log(profile);
// });
// Interview Questions
// 1. What is Promise Chaining?

// Promise chaining is connecting multiple .then() methods so asynchronous tasks execute one after another.

// 2. Why is Promise Chaining better than callbacks?
// Avoids callback hell
// Improves readability
// Simplifies error handling with a single .catch()
// Easier to maintain and extend
// 3. What does .then() return?

// A new Promise. This is why chaining is possible.

// 4. What happens if you return a normal value from .then()?

// That value becomes the resolved value of the new Promise and is passed to the next .then().

// 5. What happens if you return a Promise from .then()?

// The next .then() waits until that Promise settles before running.

// 6. What happens if you don't return anything from .then()?

// undefined is returned implicitly, so the next .then() receives undefined.

// 7. What happens if an error is thrown inside .then()?

// The remaining .then() callbacks are skipped, and the error is passed to the nearest .catch().