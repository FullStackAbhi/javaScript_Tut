
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  JSON Methods

// 1. The Core Concept: Why JSON?
// The Problem: JavaScript objects live in your computer’s memory and have methods (functions).
// You cannot send that "live" object over the internet or save it to a file.

// The Solution: JSON (JavaScript Object Notation). It is a text-based format that every programming language understands.

// Key takeaway: JSON is just a string.

// 2. Converting Objects to Strings: ⁡⁢⁣⁢JSON.stringify()⁡

// Purpose: "Serializing" (packing) an object into a plain string to send to a server or file.

// Syntax: JSON.stringify(value, [replacer], [space])

// Strict Rules to teach:

// ⁡⁣⁣⁢Keys must be double-quoted: "name".

// Strings must be double-quoted: "John".

// Methods/Functions, Symbols, and undefined are ignored.

// Circular references (an object pointing to itself) will cause an error.⁡

// Optional Customization:

// ⁡⁢⁢⁢replacer⁡: A filter. Pass an array of keys you want to keep, or a function to skip specific values.

// ⁡⁢⁢⁢space⁡: Set to 2 or 4 to get pretty-printed (indented) JSON for logging.


let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],

};

// Simple conversion
let jsonString = JSON.stringify(student);
console.log("Stringified Object:", jsonString);

// Pretty printing (The 'space' argument)
let prettyJson = JSON.stringify(student, null, 2);
console.log("Pretty Printed:\n", prettyJson);





// 3. ⁡⁢⁣⁢Customizing Conversion: toJSON()⁡

// Purpose: If you don't like how JSON.stringify converts your object, you can tell it what to do.

// How: Simply add a method called toJSON() inside your object. JSON.stringify will automatically call this first.

// Analogy: Giving the object its own "Packing Instructions."


let room = {
  number: 23,
  // Custom packing instructions
  toJSON() {
    return `Room-${this.number}`;
  }
};

let meetup = {
  title: "Conference",
  room: room // The custom toJSON will be used here automatically
};

console.log("Custom JSON:", JSON.stringify(meetup));
// Output: {"title":"Conference","room":"Room-23"}





// 4.⁡⁢⁣⁢ Converting Strings to Objects: JSON.parse⁡()

// Purpose: Taking a JSON string from the "outside world" and turning it into a working JavaScript object.

// Syntax: JSON.parse(string, [reviver])

// The reviver function: Essential for data types that JSON doesn't support directly.

// Example: JSON doesn't have a "Date" type, so dates arrive as strings. Use reviver to turn those specific strings back into new Date() objects.
let jsonInput = '{"name":"Alice","role":"Developer"}';

let user = JSON.parse(jsonInput);
console.log("Name:", user.name); // Accessing properties now works!

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// Summary Checklist for the Student
// Goal	Method	Key Point
// Save/Send Data	JSON.stringify(obj)	Turns object into a string.
// Load/Read Data	JSON.parse(str)	Turns string into an object.
// Custom Rules	obj.toJSON()	Object's personal "how-to-stringify" guide.
// Fixing Types	reviver function	Used in parse to fix Dates or specific formats.
// Common "Gotchas" (The things students always get wrong)
// Single quotes: Remind them JSON only accepts double quotes.

// Trailing Commas: JSON doesn't allow a comma after the last item in a list/object (unlike JS).

// Comments: JSON does not allow // comments.

// Functions: They disappear! Remind them JSON is for data only, not logic.

// Teacher's Tip: When teaching, write a small object on the board, show the JSON.stringify output, and then show how it fails if you try to put a function inside it. This visual difference usually makes the concept click instantly.

// Would you like a few simple "coding challenges" or quiz questions you can give the student to test their understanding of these points?