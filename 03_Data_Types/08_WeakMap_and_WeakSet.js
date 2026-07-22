// Problem with Map

// Suppose:

let john = {
    name: "John"
};

let map = new Map();

map.set(john, "Developer");

// Memory:

// john  ------> {name:"John"}
//                 ↑
//                 |
//                Map

// Now:

// john = null;

// You might think the object is deleted.

// ❌ Wrong

// Because Map still has a reference.

// Map
//  |
//  ↓
// {name:"John"}

// The object remains in memory.

// Why is this a problem?

// Imagine:

let users = new Map();

// Thousands of users come and leave.

// Even after:

// user = null;

// Map still stores them.

// Memory keeps growing.

// This is called:

// Memory Leak
// WeakMap Solution
let john = {
    name: "John"
};

let weakMap = new WeakMap();

weakMap.set(john, "Developer");

john = null;

// Now:

// No references remain

// JavaScript garbage collector removes:

// {name:"John"}

// automatically.

// Why "Weak" Map?

// Because it keeps a:

// Weak Reference

// instead of a strong reference.

// Meaning:

// "If nobody else needs this object,
// I won't stop garbage collection."
// WeakMap Rules
// Only Objects as Keys

// ✅ Valid

let obj = {};

let wm = new WeakMap();

wm.set(obj, "hello");

// ❌ Invalid

wm.set("name", "John");

// Error:

// Invalid value used as weak map key

// Because string is primitive.

// Available Methods
// weakMap.set(key, value)

// weakMap.get(key)

// weakMap.has(key)

// weakMap.delete(key)

// Only these 4 methods.

// Not Available
weakMap.keys()

weakMap.values()

weakMap.entries()

weakMap.size

// ❌ Not supported

// Why no size or iteration?

// Imagine:

// let wm = new WeakMap();

// Object can disappear anytime due to garbage collection.

// Now size = 10

// 1 second later size = 7

// 1 second later size = 3

// JavaScript engine decides when cleanup happens.

// So exact size cannot be guaranteed.

// Therefore:

// wm.size

// doesn't exist.

// Real Interview Example 1
// User Visit Counter

// Without WeakMap

// const visits = new Map();

// function countVisit(user) {
//     let count = visits.get(user) || 0;

//     visits.set(user, count + 1);
// }

// Usage:

// let john = {
//     name: "John"
// };

// countVisit(john);

// john = null;

// Still stored inside Map.

// Memory leak.

// Using WeakMap

// const visits = new WeakMap();

// function countVisit(user) {
//     let count = visits.get(user) || 0;

//     visits.set(user, count + 1);
// }

// Now:

// john = null;

// Visit data automatically disappears.

// Real Interview Example 2

// Caching

// Expensive function:

// function process(obj){
//    // heavy calculation
// }

// Store result:

// const cache = new WeakMap();

// function process(obj){

//     if(!cache.has(obj)){
//         let result = obj.value * 10;

//         cache.set(obj,result);
//     }

//     return cache.get(obj);
// }

// Usage:

// let user = {
//     value: 5
// };

// process(user);
// process(user);

// Second call uses cache.

// Later:

// user = null;

// Cached data automatically removed.

// WeakSet

// Works exactly like WeakMap.

// Difference:

// WeakMap => key/value pair

// WeakSet => only values

// Normal Set

// const set = new Set();

// WeakSet

// const weakSet = new WeakSet();
// WeakSet Rules

// Only objects allowed.

// ✅

let user = {};

weakSet.add(user);

// ❌

weakSet.add(10);
weakSet.add("Hello");

// Error.

// Methods
// weakSet.add(obj)

// weakSet.has(obj)

// weakSet.delete(obj)
// No Iteration

// ❌

// weakSet.size

// weakSet.keys()

// weakSet.values()

// for...of

// Not available.

// Practical Example

// Track visited users.

const visitedUsers = new WeakSet();

let john = {
    name: "John"
};

visitedUsers.add(john);

console.log(
    visitedUsers.has(john)
);

// Output:

// true

// Later:

// john = null;

// Automatically removed.

// Map vs WeakMap
// Feature	Map	WeakMap
// Key Type	Any Value	Objects Only
// Iterable	✅ Yes	❌ No
// size	✅ Yes	❌ No
// keys()	✅ Yes	❌ No
// values()	✅ Yes	❌ No
// Garbage Collection	❌ Prevents	✅ Allows
// Set vs WeakSet
// Feature	Set	WeakSet
// Stores	Any Value	Objects Only
// Iterable	✅ Yes	❌ No
// size	✅ Yes	❌ No
// Garbage Collection	❌ Prevents	✅ Allows
// Interview Answer (2 Lines)

// What is WeakMap?

// WeakMap is a collection that stores key-value pairs where keys must be objects. If the object has no other references, it is automatically removed by the garbage collector.

// What is WeakSet?

// WeakSet is a collection that stores only objects and automatically removes them when they become unreachable.

// Easy Memory Trick
// Map      = Strong Reference
// WeakMap  = Weak Reference

// Set      = Strong Reference
// WeakSet  = Weak Reference

// Use WeakMap/WeakSet when data should disappear automatically when the related object is no longer needed.