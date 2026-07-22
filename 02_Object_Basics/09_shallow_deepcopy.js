// Shallow Copy vs Deep Copy (JavaScript)

// This is one of the most important object concepts in JavaScript and is asked frequently in interviews.

// Why Do We Need Copying?

// Suppose:

const user = {
    name: "Abhishek",
    age: 20
};

// Now you want another object with the same values.

//1st method

const copy = user;

// Looks like a copy, right?

// ❌ Wrong.

// What Actually Happens?
const user = {
    name: "Abhishek"
};

const copy = user;

// Memory:

// user -----+
//           |
//           V
//       { name: "Abhishek" }
//           ^
//           |
// copy -----+

// Both variables point to the SAME object.

// Example
const user = {
    name: "Abhishek"
};

const copy = user;

copy.name = "Rahul";

console.log(user.name);

// Output:

// Rahul

// Why?

// Because:

// user and copy point to same object


// Reference Copy

const user = {
    name: "Abhishek"
};

const copy = user;

console.log(user === copy);




// Output:

// true

// Because:

// Same memory address




//? >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Shallow Copy >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// A shallow copy creates:

// New Outer Object

// but nested objects still share references.

// Using Spread Operator

const user = {
    name: "Abhishek",
    age: 20
};

const copy = {
    ...user
};

// Memory:

// user ------> Object A

// copy ------> Object B

// Different objects.

// Example
const user = {
    name: "Abhishek"
};

const copy = {
    ...user
};

copy.name = "Rahul";

console.log(user.name);

// Output:

// Abhishek

// Original remains unchanged.

// Verify
console.log(user === copy);

// Output:

// false because they are Different objects.





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Problem With Shallow Copy

// Consider:

const user = {
    name: "Abhishek",

    address: {
        city: "Delhi"
    }
};

// Now:

const copy = {
    ...user
};

// console.log(copy)
// copy.name = "divya"
// console.log(user.name)








// Looks copied.

// But:

// Only first level copied
// Memory
// user
//  |
//  +--> name

//  |
//  +--> address --------+
//                       |
//                       V
//                 { city: "Delhi" }

// copy
//  |
//  +--> name

//  |
//  +--> address --------+

// Nested object shared.

// Example
const user = {
    name: "Abhishek",

    address: {
        city: "Delhi"
    }
};

const copy = {
    ...user
};

copy.address.city = "Mumbai";

console.log(user.address.city);

// Output:

// Mumbai

// Why?

// Because:

// address object still shared 
// 
// Definition Shallow Copy :  Copies only the first level ,Nested objects still share references.


// >>>????????????????????? Ways To Create Shallow Copy >>>????????????????????????????????????

// 1. Spread Operator
const copy = {
    ...user
};

// 2. Object.assign()
const copy =
    Object.assign({}, user);

// Example:

const user = {
    name: "Abhishek"
};

// const copy =
    Object.assign({}, user);



//????????????>>>>>>>>>>>>>>>>>>>> Deep Copy >>>>>>>>>>>>>>>>>>>>????????????????????

// Deep Copy means:

// Copy EVERYTHING

// Including:

// Nested Objects
// Nested Arrays
// All References

// Example

const user = {
    name: "Abhishek",

    address: {
        city: "Delhi"
    }
};

// Deep copy: important

const copy =
    structuredClone(user);

// Memory

// user
//  |
//  +--> address A

// copy
//  |
//  +--> address B

// Completely separate.

// Example
const user = {
    name: "Abhishek",

    address: {
        city: "Delhi"
    }
};

const copy =
    structuredClone(user);

copy.address.city = "Mumbai";

console.log(user.address.city);

// Output:

// Delhi

// Original untouched.

// structuredClone(obj);

// Interviewers love this answer.

// Comparison Table
// Feature	       Shallow   	Deep Copy
// First Level	     ✅	            ✅
// Nested Objects	❌ Shared	✅ Copied
// Nested Arrays	❌ Shared	✅ Copied



// Interview Question 1

// Output?

const user = {
    name: "Abhishek"
};

const copy = user;

copy.name = "Rahul";

console.log(user.name);





// Answer:

// Rahul
// Interview Question 2


const user = {
    name: "Abhishek"
};

const copy = {
    ...user
};

copy.name = "Rahul";

console.log(user.name);





// Answer:

// Abhishek




// Interview Question 3


const user = {
    address: {
        city: "Delhi"
    }
};

const copy = {
    ...user
};

copy.address.city = "Mumbai";

console.log(user.address.city);

// Answer:

// Mumbai

// Why?

// Spread performs
// Shallow Copy
// Interview Question 4

// Output?

const user = {
    address: {
        city: "Delhi"
    }
};

const copy =
    structuredClone(user);

copy.address.city = "Mumbai";

console.log(user.address.city);

// Answer:

// Delhi

// Because:

// Deep Copy
// Most Important Interview Answer
// Difference Between Shallow Copy and Deep Copy

// Shallow Copy copies only the first level of an object. Nested objects and arrays still share references.

// Deep Copy creates a completely independent copy, including all nested objects and arrays.

// // Shallow Copy
// const copy = { ...obj };

// // Deep Copy
// const copy = structuredClone(obj);