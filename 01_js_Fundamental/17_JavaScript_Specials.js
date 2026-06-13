
// JavaScript specials
// This chapter briefly recaps the features of JavaScript that we’ve learned by now, paying special attention to subtle moments.

// Code structure
// Statements are delimited with a semicolon:

alert('Hello'); alert('World');
// Usually, a line-break is also treated as a delimiter, so that would also work:

alert('Hello')
alert('World')

// That’s called “automatic semicolon insertion”. Sometimes it doesn’t work, for instance:

alert("There will be an error after this message")

[1, 2].forEach(alert)

// Most codestyle guides agree that we should put a semicolon after each statement.

// Semicolons are not required after code blocks {...} and syntax constructs with them like loops:

function f() {
  // no semicolon needed after function declaration
}

for(;;) {
  // no semicolon needed after the loop
}
// …But even if we can put an “extra” semicolon somewhere, that’s not an error. It will be ignored.

// More in: Code structure.

// Strict mode
// To fully enable all features of modern JavaScript, we should start scripts with "use strict".

// 'use strict';


// ...
// The directive must be at the top of a script or at the beginning of a function body.

// Without "use strict", everything still works, but some features behave in the old-fashioned, “compatible” way. 
// We’d generally prefer the modern behavior.

// Some modern features of the language (like classes that we’ll study in the future) enable strict mode implicitly.

// More in: The modern mode, "use strict".

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> **Variables** >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Can be declared using:

// let
// const (constant, can’t be changed)
// var (old-style, will see later)
// A variable name can include:

// Letters and digits, but the first character may not be a digit.
// Characters $ and _ are normal, on par with letters.
// Non-Latin alphabets and hieroglyphs are also allowed, but commonly not used.
// Variables are dynamically typed. They can store any value:

let x = 5;
x = "John";
// typeof()

// There are 8 data types:

// number for both floating-point and integer numbers,
// bigint for integer numbers of arbitrary length,
// string for strings,
// boolean for logical values: true/false,
// null – a type with a single value null, meaning “empty” or “does not exist”,
// undefined – a type with a single value undefined, meaning “not assigned”,

// object and symbol – for complex data structures and unique identifiers, we haven’t learnt them yet.
// The typeof operator returns the type for a value, with two exceptions:

// typeof null == "object" // error in the language
// typeof function(){} == "function" // functions are treated specially
// More in: Variables and Data types.

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ** Interaction ** >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// We’re using a browser as a working environment, so basic UI functions will be:

// (question, [default])
// Ask a question, and return either what the visitor entered or null if they clicked “cancel”.
// confirm(question)
// Ask a question and suggest to choose between Ok and Cancel. The choice is returned as true/false.
// alert(message)
// Output a message.
// All these funpromptctions are modal, they pause the code execution and prevent the visitor from interacting with the page until they answer.

// For instance:

let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true
// More in: Interaction: alert, prompt, confirm.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ** Operators ** >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// JavaScript supports the following operators:

// Arithmetical
// Regular: * + - /, also % for the remainder and ** for power of a number.

// The binary plus + concatenates strings. And if any of the operands is a string, the other one is converted to string too:

alert( '1' + 2 ); 
alert( 1 + '2' ); 

// Assignments
// There is a simple assignment: a = b and combined ones like a *= 2.

// Bitwise
// Bitwise operators work with 32-bit integers at the lowest, bit-level: 
// Operator	                       Usage	       Description
// Bitwise AND                      a & b	     Returns a one in each bit position for which the corresponding bits of both operands are ones.
// Bitwise  OR                      a | b	     Returns a zero in each bit position for which the corresponding bits of both operands are zeros.
// Bitwise  XOR                     a ^ b	     Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.]
// Bitwise  NOT                      ~ a	       Inverts the bits of its operand.
// Left shift	                      a << b	       Shifts a in binary representation b bits to the left, shifting in zeros from the right.
// Sign-propagating right shift	    a >> b	       Shifts a in binary representation b bits to the right, discarding bits shifted off.
// Zero-fill right shift	          a >>> b	       Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.



// Step 3: Bitwise AND (&)

// Rule:

// 1 & 1 = 1
// 1 & 0 = 0
// 0 & 1 = 0
// 0 & 0 = 0

// Example:

// 5 & 3

// Binary:

// 5 = 101
// 3 = 011
// ---------
//     001

// Result:

// 1
// console.log(5 & 3); // 1
// Easy Analogy

// AND means:

// Both must be YES


// Step 4: Bitwise OR (|)

// Rule:

// 1 | 1 = 1
// 1 | 0 = 1
// 0 | 1 = 1
// 0 | 0 = 0

// Example:

// 5 | 3
// 5 = 101
// 3 = 011
// ---------
//     111
// 111 = 7
// console.log(5 | 3); // 7
// Easy Analogy

// OR means:

// At least one YES


// Step 5: XOR (^)

// Rule:

// 1 ^ 1 = 0
// 0 ^ 0 = 0
// 1 ^ 0 = 1
// 0 ^ 1 = 1

// Same → 0

// Different → 1

// Example:

// 5 ^ 3
// 5 = 101
// 3 = 011
// ---------
//     110
// 110 = 6
// console.log(5 ^ 3); // 6
// Shortcut


// Same bits -> 0
// Different bits -> 1

// Step 6: NOT (~)


// Rule:

// 0 -> 1
// 1 -> 0

// Example:

// ~5

// Result:

// console.log(~5); // -6 

// ~n = -(n+1)

// Examples:

// ~5   // -6
// ~10  // -11
// ~20  // -21


// Step 7: Left Shift (<<)

// Moves bits left.

// Example:

// 5 << 1

// Binary:

// 5 = 101

// 1010
// 10

// console.log(5 << 1); // 10
// Shortcut
// n << 1 = n × 2
// n << 2 = n × 4
// n << 3 = n × 8

// Examples:

// 5 << 1 // 10
// 5 << 2 // 20
// Step 8: Right Shift (>>)

// Moves bits right.

// 8 >> 1
// 8 = 1000

// 100
// 4
// console.log(8 >> 1); // 4
// Shortcut
// n >> 1 = n / 2
// n >> 2 = n / 4
// n >> 3 = n / 8


// Conditional
// The only operator with three parameters: cond ? resultA : resultB. If cond is truthy, returns resultA, otherwise resultB.

// Logical operators
// Logical AND && and OR || perform short-circuit evaluation and then return the value where 
// it stopped (not necessary true/false). Logical NOT ! converts the operand to boolean type and returns the inverse value.

// Nullish coalescing operator
// The ?? operator provides a way to choose a defined value from a list of variables. 
// The result of a ?? b is a unless it’s null/undefined, then b.

// Comparisons
// Equality check == for values of different types converts them to a number 
// (except null and undefined that equal each other and nothing else), so these are equal:

alert( 0 == false ); //
alert( 0 == '' ); // 

// Other comparisons convert to a number as well.

// The strict equality operator === doesn’t do the conversion: different types always mean different values for it.

// Values null and undefined are special: they equal == each other and don’t equal anything else.

// Greater/less comparisons compare strings character-by-character, other types are converted to a number.


// Loops
// We covered 3 types of loops:

// // 1
while (condition) {
//   ...
}

// 2
do {
//   ...
} while (condition);

// 3
for(let i = 0; i < 10; i++) {
//   ...
}
// The variable declared in for(let...) loop is visible only inside the loop. But we can also omit let and reuse an existing variable.

// Directives break/continue allow to exit the whole loop/current iteration. Use labels to break nested loops.

// Details in: Loops: while and for.

// Later we’ll study more types of loops to deal with objects.

// The “switch” construct
// The “switch” construct can replace multiple if checks. It uses === (strict equality) for comparisons.

// For instance:

// let age = prompt('Your age?', 18);

switch (age) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}
// Details in: The "switch" statement.



// Functions
// We covered three ways to create a function in JavaScript:

// Function Declaration: the function in the main code flow

// function sum(a, b) {
//   let result = a + b;

//   return result;
// }
// Function Expression: the function in the context of an expression

let sum = function(a, b) {
  let result = a + b;

  return result;
};


// Arrow functions:

// // expression on the right side
let sum = (a, b) => a + b;

// // or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
  // ...
  return a + b;
}


// // without arguments
let sayHi = () => alert("Hello");

// // with a single argument
let double = n => n * 2;

// Functions may have local variables: those declared inside its body or its parameter list.
//  Such variables are only visible inside the function.

// Parameters can have default values: function sum(a = 1, b = 2) {...}.
// Functions always return something. If there’s no return statement, then the result is _____________.
// Details: see Functions, Arrow functions, the basics.

// More to come
// That was a brief list of JavaScript features. 
// As of now we’ve studied only basics. Further in the tutorial you’ll find more specials and advanced features of JavaScript.




// 1. Strict Mode ("use strict")
"use strict";

x = 10; // Error

// Why important?

// Prevents accidental globals
// Changes some JavaScript behaviors
// Common interview topic



// 2. Truthy and Falsy Values
if (" hejdjj") {
    console.log("Runs");
}

if (0) {
    console.log("Won't run");
}




// Falsy values:

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// Everything else is truthy.



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Important >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// 3. Rest and Spread Operator (Basics)
const arr1 = [1, 2];

const arr2 = [...arr1, 3, 4];

// console.log(arr2);//1 , 2 , 3 ,4

// Output:

// [1, 2, 3, 4]

// Function rest parameter:

function sum(...nums) {
    console.log(nums);
}

sum(1, 2, 3);

// This becomes very important later for React and Node.js.


// 4. Destructuring (Basic)




// Array:

const arr = [10, 20];


const [a, b] = arr;

console.log(a, b);//10 , 20

// Object:

const user = {
    name: "Abhishek",
    age: 20,
    add : "delhi"
};


const { name, age , city } = user;

console.log(name);

// Used everywhere in modern JavaScript.
