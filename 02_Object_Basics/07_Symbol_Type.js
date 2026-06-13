// Why Were Symbols Created?

// Before Symbols, object keys could only be strings.

const user = {
    name: "Abhishek"
};

// console.log(user.name);

// Internally:

// "name" -> value

// Every key is a string.

// The Problem

// Imagine two developers working on the same object.

// Your code:

const user = {
    name: "John"
};

user.id = 1;

// Another library:

user.id = 999;

// Now:

// Your id overwritten ❌

// Collision happened.

// JavaScript introduced Symbols to solve this.

// What is a Symbol?

// A Symbol is a unique identifier.

// Create one:

// const id = Symbol();

// or

const id = Symbol("id");

// Here:

// "id"

// is just a description for debugging.

// Important Rule

// Even if descriptions are same:

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);

// Output:

// false

// Why?

// Because:

// Every Symbol is unique

// Think:

// Aadhaar Number

// Two people can have same name:

// Abhishek
// Abhishek

// But Aadhaar numbers differ.

// Same idea.

// Using Symbol as Object Key
const id = Symbol("id");

const user = {
    name: "Abhishek"
};

user[id] = 123;

// Access:

console.log(user[id]);

// Output:

// 123
// Why Square Brackets?

// Wrong:

user.id = 123;

// This creates:

// "id"

// string key.

// Correct:

user[id] = 123;

// Uses symbol itself as key.

// Visual Representation

// Object:

// {
//    name: "Abhishek",
//    [Symbol(id)]: 123
// }

// Notice:

// name → String key

// Symbol(id) → Symbol key

// Different things.

// Hidden Property
const id = Symbol("id");

const user = {
    name: "John"
};

user[id] = 123;

// Loop:

for(let key in user){
    console.log(key);
}

// Output:

// name

// Not:

// id

// Why?

// Because:

// for...in ignores Symbols
Object.keys()
console.log(
    Object.keys(user)
);

// Output:

// ["name"]

// Again:

// Symbol hidden
// Why Is This Useful?

// Suppose you're building a library.

// You need internal data:

// user.secretData = ...

// Someone can overwrite it.

// Using Symbol:

const secret = Symbol("secret");

user[secret] = "Admin";

// Nobody can accidentally access it.


// Global symbols
// As we’ve seen, usually all symbols are different, even if they have the same name. But sometimes we want same-named symbols to be same entities. For instance, different parts of our application want to access symbol "id" meaning exactly the same property.

// To achieve that, there exists a global symbol registry. We can create symbols in it and access them later, and it guarantees that repeated accesses by the same name return exactly the same symbol.

// In order to read (create if absent) a symbol from the registry, use Symbol.for(key).

// That call checks the global registry, and if there’s a symbol described as key, then returns it, otherwise creates a new symbol Symbol(key) and stores it in the registry by the given key.

// For instance:

// // read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// // read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// // the same symbol
alert( id === idAgain ); // true
// Symbols inside the registry are called global symbols. If we want an application-wide symbol, accessible everywhere in the code – that’s what they are for.











// Interview Question
// Output?
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);

// Output:

// false

// Most beginners wrongly say:

// true
// Global Symbols

// Normally:

Symbol("id")

// creates a brand new symbol.

// Always unique.

// Sometimes we want:

// Same Symbol
// Across entire application

// Use:

const id1 = Symbol.for("id");
const id2 = Symbol.for("id");

// Now:

console.log(id1 === id2);

// Output:

// true
// Difference
// Symbol()
const a = Symbol("id");
const b = Symbol("id");

// Output:

// a === b
// false
// Symbol.for()
// const a = Symbol.for("id");
// const b = Symbol.for("id");

// Output:

// a === b
// true
// Symbol Description
const id = Symbol("userId");

// Get description:

console.log(id.description);

// Output:

// userId
// Cannot Auto Convert To String

// Wrong:

const id = Symbol("id");

console.log("ID: " + id);

// Output:

// TypeError

// Correct:

console.log(id.toString());

// Output:


// Symbol(id)



// Real Interview Questions
// Q1
const s1 = Symbol("id");
const s2 = Symbol("id");

console.log(s1 === s2);

// Answer:



// false

// Q2
const id = Symbol("id");

const user = {
    [id]: 123
};

console.log(user[id]);






// Answer:

// 123





// Q3
const id = Symbol("id");

const user = {
    name: "John",
    [id]: 123
};

for(let key in user){
    console.log(key);
}

// Output:

// name






// Symbol key ignored.

// Do You Need Symbols for MERN?

//
// They're a primitive type.
// Interviewers may ask.
// JavaScript internals use them (Symbol.iterator, Symbol.toPrimitive).
// What You Should Remember

// ✅ Symbol is a primitive data type.

// ✅ Every Symbol is unique.

// Symbol("id") !== Symbol("id")

// ✅ Use Symbols as object keys.

// user[id] = 123

// ✅ Symbol properties are ignored by:

// for...in
// Object.keys()

// ✅ Symbol.for() creates/reuses global symbols.

// Symbol.for("id")