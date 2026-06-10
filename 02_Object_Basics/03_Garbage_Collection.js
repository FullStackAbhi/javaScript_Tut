// Why Do We Need Garbage Collection?

// When you create variables, objects, arrays, and functions, JavaScript stores them in memory (RAM).

let name = "Abhishek";
let age = 20;

let user = {
    name: "Abhishek"
};

// Memory now looks like:

// RAM

// name -> "Abhishek"
// age  -> 20

// user ----> {
//              name: "Abhishek"
// //            }

// If JavaScript never removed unused data, your computer would eventually run out of memory.

// That's why JavaScript has a Garbage Collector (GC).

// Its job:

// Find unused memory
// ↓
// Delete it
// ↓
// Free RAM
// The Most Important Concept: Reachability

// JavaScript doesn't ask:

// "Is this object useful?"

// It asks:

// "Can I still reach this object?"

// If yes → Keep it.

// If no → Delete it.

// What Are Roots?

// Roots are starting points from which JavaScript begins searching.

// Examples:

let user = {
    name: "John"
};

// Here:

// Global Variable
//       |
//       V
//     user
//       |
//       V
//  {name:"John"}

// Since user is global, it is a root.

// Anything reachable from a root stays alive.

// Example 1
let user = {
    name: "John"
};

// Memory:

// Root(user)
//     |
//     V
// Object
{
 name:"John"
}

// Reachable?

// ✅ Yes

// Removed?

// ❌ No

// Example 2
let user = {
    name: "John"
};

// user = null;

// Memory becomes:

// user ---> null

// {
//  name:"John"
// }

// Question:

// Can we reach John?

// ❌ No

// No variable points to it.

// Therefore:

// Garbage Collector
// ↓
// Deletes Object


// Important Interview Question

let user = {
    name: "John"
};

let admin = user;

user = null;

// Students often think object will be deleted.

// Wrong.

// Memory:

// user ---> null

// admin ---------+
//                |
//                V
//          {name:"John"}

// Can we still reach the object?

// ✅ Yes

// Through admin.

// Object survives.

// Rule

// An object dies only when ALL references disappear.

// Example
let obj = {
    name: "John"
};

let ref1 = obj;
let ref2 = obj;

obj = null;
ref1 = null;

// Memory:

// ref2 ------> {name:"John"}

// Still reachable.

// Not deleted.

// Now:

ref2 = null;

// No references left.

// Object becomes garbage.

// GC removes it.

// Interlinked Objects

// This is where most people get confused.

let john = {
    name: "John"
};

let ann = {
    name: "Ann"
};

john.wife = ann;
ann.husband = john;

// Memory:

// john ---> Object1
//              |
//              |
//              v
// ann <---------

// Both objects reference each other.

// Question:

// If they reference each other forever,

// Will they stay forever?

// ❌ No

// This is a common misconception.

// Example
john = null;
ann = null;

// Memory:

// Object1 <-----> Object2

// They point to each other.

// But:

// Can we reach them from roots?

// ❌ No

// No variable points to them.

// Therefore:

// Both objects are garbage.

// Golden Rule

// JavaScript does NOT care about:

// Outgoing references

// It only cares about:

// Incoming references
// FROM ROOTS
// Family Example

let family = {
    father: {
        name: "John"
    },

    mother: {
        name: "Ann"
    }
};

// Memory:

// family
//  |
//  |
//  +----> father
//  |
//  +----> mother

// Reachable?

// ✅ Yes

// Now:

family = null;

// Memory:

// father <----> mother

// No root points to them.

// Whole group becomes garbage.

// This is called:

// Unreachable Island

// A group of objects may reference each other.

// But if nobody can reach them from a root:

// Entire island is deleted
// Mark and Sweep Algorithm

// Modern JS engines use:

// Mark
// +
// Sweep

// Step 1

// Mark roots.

// user
// admin
// window
// current function

// Marked:

// ✅

// Step 2

// Follow references.

// user
//  |
//  V
// Object A
//  |
//  V
// Object B

// Mark:

// user
// Object A
// Object B

// Step 3

// Continue until no new objects found.

// Step 4

// Delete everything unmarked.

// Example:

// Marked:
// A
// B
// C

// Unmarked:
// X
// Y
// Z

// Delete:

// X
// Y
// Z

// Keep:

// A
// B
// C
// Real-Life Analogy

// Imagine your house.

// Roots are doors.

// Main Door
// Bedroom Door
// Kitchen Door

// The garbage collector enters through doors.

// Anything it can reach:

// Keep

// Anything in a sealed room with no door:

// Throw Away
// Does Garbage Collection Run Immediately?

// No.

let user = {
    name: "John"
};

user = null;

// Object becomes garbage immediately.

// But deletion happens later.

// The engine decides:

// CPU free?
// ↓
// Run GC
// ↓
// Clean Memory
// What You Must Remember For Interviews
// Garbage Collection

// Automatic memory cleanup performed by JavaScript.

// Reachability

// If an object can be reached from roots, it survives.

// Roots
// Global variables
// Current function
// Call stack variables
// Object Removed When

// No path exists from roots to that object.

// Circular References
// a.ref = b;
// b.ref = a;

// Do NOT prevent garbage collection.

// If both become unreachable, both are removed.

// One-Line Interview Answer>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>important>>>>>>>>>>>>>>>>>>>>>>>

// "JavaScript uses a mark-and-sweep garbage collection algorithm.
//  Objects remain in memory as long as they are reachable from root references such as global variables, 
// local variables in the call stack, or currently executing functions.
//  Unreachable objects are automatically removed by the garbage collector."