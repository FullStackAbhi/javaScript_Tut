// "What happens when we do obj + 10?"

// "Why does [object Object] get printed?"

// "How does JavaScript convert objects into strings or numbers?"

// The answer is Object to Primitive Conversion.

// The Core Idea

// JavaScript operators like:

// +
// -
// *
// /
// >
// <
// alert()
// String()
// Number()

// work with primitive values.

// But objects are not primitives.

// So JavaScript must first convert the object into a primitive.

// Example
const user = {
    name: "Abhishek"
};

// console.log(user + 10);

// Question:

// How do we add an object and a number?

// JavaScript says:

// Step 1: Convert object to primitive
// Step 2: Perform operation
// Primitive Types
// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// BigInt

// Everything else:

// Object
// Array
// Function
// Date
// Map
// Set

// must be converted before arithmetic.

// Conversion Hints

// JavaScript sends a "hint".

// There are 3 hints.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>1. String Hint

// Used when JS needs text.

alert(obj);

String(obj);

// Example:

const user = {
    name: "Abhishek"
};

alert(user);

// JS asks:

// Convert this object to string.


//>>>>>>>>>>>>>>>>>>>>>>> 2. Number Hint

// Used for math.

// Number(obj);

// +obj;

// obj - 5;

// obj * 10;

// Example:

// let price = obj * 2;

// JS asks:

// Convert this object to number.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>3. Default Hint

// Used mostly by:

// obj + 5

// because:

// +

// can mean:

// String concatenation
// OR
// Number addition

// So JS is confused.

// It uses:

// "default" hint.

// How JS Converts Objects

// JavaScript follows this order:

// Modern Way
// obj[Symbol.toPrimitive]()

// Old Way
// toString()
// valueOf()
// Default Behavior
const user = {
    name: "Abhishek"
};

// console.log(String(user));

// Output:

// [object Object]

// Why?

// Because every object has a default:

// toString()

// method.

// Custom toString()
const user = {
    name: "Abhishek",

    toString() {
        return this.name;
    }
};

// Now:

console.log(String(user));

// Output:

// Abhishek



// valueOf()

// Used mainly for numbers.

// Example:

const user = {

    money: 1000,

    valueOf() {
        return this.money;
    }
};

// Now:

console.log(+user);

// Output:

// 1000
// Example
const user = {

    money: 1000,

    valueOf() {
        return this.money;
    }
};

console.log(user + 500);

// Output:

// 1500

// Why?

// Internally:

// user.valueOf()

// returns:

// 1000

// Then:

// 1000 + 500

// Result:

// 1500


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Most Modern Approach

// Use:

// Symbol.toPrimitive

// Example

const user = {

    name: "Abhishek",

    money: 1000,

    [Symbol.toPrimitive](hint) {

        if(hint === "string"){
            return this.name;
        }

        return this.money;
    }
};

// Now:

console.log(String(user));

// Output:

// Abhishek

// And:

console.log(user + 500);

// Output:

// 1500
// How Symbol.toPrimitive Works
[Symbol.toPrimitive](hint)

// receives:

// "string"

// or

// "number"

// or

// "default"

// Example

const obj = {

    [Symbol.toPrimitive](hint){

        console.log(hint);

        return 10;
    }
};

// console.log(obj + 5);

// Output:

// default
// 15


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   Interview Question
// Why?
console.log({} + 1);





// Output:

// [object Object]1

// Because:

// {}

// becomes:

// "[object Object]"

// Then:

// "[object Object]" + 1

// String concatenation.

// Another Example

const obj = {

    toString() {
        return "2";
    }
};

console.log(obj * 2);

// Output:

// 4    

// Why?

// Step 1:

// obj

// becomes:

// "2"

// Step 2:

// "2" * 2

// becomes:

// 2 * 2

// Result:

// 4
// Interview Question
// Output
const user = {

    toString() {
        return "Abhishek";
    }
};

console.log(user + " Tiwari");

// Output:

// Abhishek Tiwari

// ✅ Objects convert to primitives automatically.

// ✅ toString() handles string conversion.

// ✅ valueOf() handles number conversion.

// ✅ Symbol.toPrimitive is the modern way.

// ✅ +, -, *, comparisons can trigger conversion.

// Object-to-primitive conversion is the process where JavaScript converts an object into a primitive value
//  (string, number, or symbol) before performing operations. This can be customized using Symbol.toPrimitive,
//  valueOf(), or toString().