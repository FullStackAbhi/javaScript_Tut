 // The Problem

 // Imagine:

// const user = {
//     name: "Abhishek"
// };

 // Now:

// // // console.log(user.address.street);

 // Output:

// TypeError

 // Why?

// Because:

 // user.address

 // is:

 // undefined

 // Then JavaScript tries:

 // undefined.street

 // which is impossible.

 // Before Optional Chaining

// // // // We had to write:

// // // if(user.address){
// // //     console.log(user.address.street);
// // // }

// // // // or

// // // console.log(
// // //     user.address
// // //         ? user.address.street
// // //         : undefined
// // // );

// // // // Ugly.

// // // // Optional Chaining Solution
// // // console.log(user.address?.street);

// // // // Output:

// // // undefined

// // // // No error.

// // // // How to Read It

// // // // Think:

// // // // ?.

// // // // means:

// // // // "Only continue if left side exists"

// // // // Example:

// // // user.address?.street

// // // // JavaScript asks:

// // // // Does user.address exist?

// // // // If YES:

// // // user.address.street

// // // // If NO:

// // // // undefined
// // // // Real Example
// // // const user = {
// // //     name: "Abhishek"
// // // };

// // // console.log(user.address?.street);

// // // // Output:

// // // // undefined

// // // // No crash.

// // // // Deeply Nested Objects

// // // // Without Optional Chaining:

// // // user.address &&
// // // user.address.street &&
// // // user.address.street.city

// // // // Ugly.

// // // // With Optional Chaining:

// // // user.address?.street?.city

// // // // Much cleaner.

// // // // Example
// // // const user = {
// // //     address: {
// // //         street: {
// // //             city: "Delhi"
// // //         }
// // //     }
// // // };

// // // console.log(
// // //     user.address?.street?.city
// // // );

// // // // Output:

// // // // Delhi
// // // // Another Example
// // // // const user = {};

// // // console.log(
// // //     user.address?.street?.city
// // // );

// // // // Output:

// // // // undefined

// // // // No error.

// // // // Optional Chaining with Functions

// // // // Suppose:

// // // const user = {
// // //     sayHi() {
// // //         console.log("Hello");
// // //     }
// // // };

// // // // Normal call:

// // // user.sayHi();

// // // // Output:

// // // // Hello

// // // // Now imagine method may not exist.

// // // const user = {};

// // // // This crashes:

// // // user.sayHi();

// // // // Output:

// // // // TypeError

// // // // Safe version:

// // // user.sayHi?.();

// // // // Output:

// // // // Nothing

// // // // No error.

// // // // How To Read It
// // // user.sayHi?.();

// // // // means:

// // // // If sayHi exists,
// // // // call it.

// // // // Otherwise,
// // // // do nothing.
// // // // Optional Chaining with Arrays

// // // // Suppose:

// // // const user = {
// // //     marks: [90,95,100]
// // // };

// // // // Access:

// // // // console.log(user.marks?.[0]);

// // // // Output:

// // // // 90

// // // // If:

// // // const user = {};

// // // // then:

// // // console.log(user.marks?.[0]);
// // // // 
// // // // Output:

// // // // undefined

// // // // Common Interview Question
// // // // Difference
// // // // user && user.address

// // // // vs

// // // // user?.address

// // // // Both check existence.

// // // // Modern JavaScript prefers:

// // // // user?.address

// // // // because it's shorter and cleaner.

// // // // Very Important Rule
// // // // Only protects the left side
// // // // user?.address.street

// // // // Safe only for:

// // // // user

// // // // NOT for:

// // // // address

// // // // Example:

// // // const user = {
// // //     address: null
// // // };
// // // console.log(
// // //     user?.address.street
// // // );

// // // // Output:

// // // // TypeError

// // // // Because:

// // // address === null

// // // // and:

// // // // null.street

// // // // crashes.

// // // // Correct:

// // // user?.address?.street

// // // // Output:

// // // // undefined
// // // // Cannot Use for Assignment

// // // // Wrong:

// // // user?.name = "Abhishek";

// // // // Output:

// // // // SyntaxError

// // // // Optional chaining is only for reading.

// // // // Interview Questions
// // // // Q1

// // // // Output?

// // // // const user = {};

// // // // console.log(user.address?.city);

// // // // Answer:

// // // // undefined
// // // // Q2

// // // // Output?

// // // const user = null;

// // // // console.log(user?.name);

// // // // Answer:

// // // // undefined
// // // // Q3

// // // // Output?

// // // const user = {};

// // // user.sayHi?.();

// // // // Answer:

// // // // Nothing

// // // // (No error)

// // // // One-Line Interview Answer

// // // // Optional Chaining (?.) is used to safely access properties, methods, or array elements of an object that may be null or undefined. Instead of throwing an error, it returns undefined and stops execution of that property chain.

// // // // For MERN interviews, remember these three forms:

// // // // obj?.prop
// // // // obj?.[key]
// // // // obj.method?.()

// // // const user = {
// // //     name: "Abhishek"
// // // };

// // // console.log(user);

// // let user = {     // an object
// //   name : "John",  // by key "name" store value "John"
// //   age : 30 ,
// //   "first name" : "divya",   
// //      // by key "age" store value 30
// // };

// // // console.log(user.name)
// // // // console.log(user["age"])
// // // console.log(user["first name"])
// // console.log(user.age)
// // delete(user.age)
// // console.log(user.age)

// // let fruit = 'apple';


// // let bag = {
// //   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// // };



// // console.log(bag)


// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };


// for(let key in Object) {
//     console.log(key)
// }