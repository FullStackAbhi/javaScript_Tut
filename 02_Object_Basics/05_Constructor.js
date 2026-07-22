// Problem Without Constructor

// Suppose you want to create a user.

const user1 = {
    name: "Abhishek",
    isAdmin: false
};

// Now another user:

const user2 = {
    name: "Rahul",
    isAdmin: false
};

// Another:

const user3 = {
    name: "John",
    isAdmin: false
};






// Notice:

// Same structure
// Different data

// You're repeating yourself.

// Solution: Constructor Function

// Instead of creating objects manually:



function User(name) {
    this.name = name;
    this.isAdmin = false;
}




// Now create users:

const user1 = new User("Abhishek");
const user2 = new User("Rahul");
const user3 = new User("John");

// What Does new Actually Do?

// When JavaScript sees:

// const user = new User("Abhishek");

// It secretly does:

// Step 1

// Create an empty object

// const this = {};

// Think:

// {}
// Step 2

// Bind this to that object

// this = {};

// Now:

function User(name) {
    this.name = name;
}

// becomes:

// {}.name = "Abhishek";

// Object:

// {
//     name: "Abhishek"
// }
// Step 3

// Execute the function

// this.name = name;
// this.isAdmin = false;

// Now object becomes:

// {
//     name: "Abhishek",
//     isAdmin: false
// }
// Step 4

// Return the object automatically

// JavaScript secretly adds:

// return this;

// Final result:

// {
//     name: "Abhishek",
//     isAdmin: false
// }
// Visual Representation

// When you write:

// const user = new User("Abhishek");

// JavaScript internally does:

// const temp = {};

// temp.name = "Abhishek";
// temp.isAdmin = false;

// return temp;

// So:

// user

// becomes:

// {
//     name:"Abhishek",
//     isAdmin:false
// }






// Why Use Capital Letter?

// Convention.

// function User(){}

// Immediately tells developers:

// This function is meant to be used with new.

// Compare:

// function User(){}
// function calculateTax(){}

// Which one looks like a constructor?

// User
// Example with Method

// Constructor can also create methods.














function User(name) {

    this.name = name;

    this.sayHi = function() {
        console.log(`Hi, I am ${this.name}`);
    };
}

// Create object:

// const user = new User("Abhishek");

// user.sayHi();

// Output:

// Hi, I am Abhishek

// Object created:

// {
//     name: "Abhishek",

//     sayHi: function() {
//         console.log(...)
//     }
// }

// What Happens Without new?
// function User(name){
//     this.name = name;
// }

// const user = User("Abhishek");

// No new.

// Now JavaScript does NOT create:

// {}

// And does NOT return object.

// In browser:

// window.name = "Abhishek";

// or in strict mode:

// TypeError

// That's why constructor functions should always be called with:

// new User(...)
// Constructor vs Normal Function

// Normal Function:

function add(a,b){
    return a+b;
}

// Purpose:

// Perform task
// Return value

// Constructor Function:

function User(name){
    this.name = name;
}

// Purpose:

// Create objects



// Interview Question

// Output?
function User(name){
    this.name = name;
}

const user = new User("Abhishek");

console.log(user);

// user
//  ↓
// User.prototype
//  ↓
// Object.prototype
//  ↓
// null

// user
// │
// ├── name: "Abhishek"
// │
// ▼
// User.prototype
// │
// ├── constructor: User
// │
// ▼
// Object.prototype
// │
// ├── hasOwnProperty()
// ├── toString()
// ├── valueOf()
// ├── isPrototypeOf()
// └── ...
// │
// ▼
// null

Run:

// function User(name) {
//     this.name = name;
// }

// const user = new User("Abhishek");

// console.log(user.__proto__ === User.prototype);

// Output:

// true

// And:

// console.log(
//     User.prototype.__proto__ === Object.prototype
// );

// console.log(
//     Object.prototype.__proto__
// );






// Output:

{
    name: "Abhishek"
}
// Return Statement Trick

// Normally:

function User(){

    this.name = "Abhishek";

    return;
}

// Output:

{
    name:"Abhishek"
}

// because JavaScript ignores primitive/empty returns.

// But:

function User(){

    this.name = "Abhishek";

    return {
        name:"Rahul"
    };
}

// Now:

const user = new User();

console.log(user);

// Output:

{
    name:"Rahul"
}

// Because returned object replaces this.

// Real-Life Analogy

// Think of a constructor as a cookie cutter.

// Constructor:

function User(name){
    this.name = name;
}

// Cookie cutter = blueprint.

// Using:

new User("Abhishek")
new User("Rahul")
new User("John")

// creates:

// User Object 1
// User Object 2
// User Object 3

// all having the same structure.

// What Interviewers Expect

// You should be able to answer:

// What is a constructor function?

// A regular function used to create multiple similar objects.

// What does new do?
// Creates empty object {}.
// Assigns it to this.
// Executes function body.
// Returns this.
// Why are constructor names capitalized?

// By convention to indicate they should be called with new.

// Can arrow functions be constructors?
// const User = (name) => {
//     this.name = name;
// }

// ❌ No