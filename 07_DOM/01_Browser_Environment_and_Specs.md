// Chapter 1.1 Browser Environment & Specs

// This chapter explains where JavaScript actually runs.

// JavaScript doesn't know HTML.

// Many beginners think JavaScript and HTML are tightly connected.

// Actually,

// JavaScript was created as a programming language.

// It can run

// Browser
// Node.js
// Mobile apps
// Desktop apps
// Servers

// Example

// console.log("Hello");

// This runs everywhere.

// Browser gives JavaScript extra powers.

// When JavaScript runs inside Chrome,

// Chrome provides many objects.

// Example

// document
// window
// location
// navigator
// history

// These are NOT JavaScript features.

// Chrome provides them.

// Imagine:

// JavaScript Engine
//         ▲
//         │
// Browser APIs

// JavaScript talks to browser APIs.

// What is Browser API?

// Browser API means

// Objects provided by the browser to control webpages.

// Examples

// document

// Represents HTML page.

// document.body

// Returns

// <body>...</body>
// window

// Represents the whole browser window.

// Example

// window.innerWidth

// Output

// 1366
// location

// Current URL

// console.log(location.href);

// Output

// https://google.com
// navigator

// Information about browser

// navigator.userAgent

// Output

// Chrome...
// Browser = JavaScript + APIs
// Browser
// │
// ├── JavaScript Engine (V8)
// │
// ├── DOM API
// │
// ├── BOM API
// │
// ├── Fetch API
// │
// ├── Local Storage
// │
// ├── Timers
// │
// └── Events
// What is DOM?

// DOM means

// Document Object Model

// Browser converts HTML into objects.

// Example HTML

// <html>
//     <body>
//         <h1>Hello</h1>
//     </body>
// </html>

// Browser converts it to

// Document
//     │
//    html
//      │
//     body
//       │
//       h1

// JavaScript manipulates these objects.

// Example

// document.body.style.background = "black";

// Entire webpage becomes black.

// What is BOM?

// BOM = Browser Object Model

// This controls browser itself.

// Examples

// location
// history
// navigator
// screen

// Example

// location.reload();

// Refresh page.

// What is CSSOM?

// CSS also becomes an object.

// Example

// body {
//     color: red;
// }

// Browser converts CSS into a structure JavaScript can work with.

// You usually won't manipulate CSSOM directly; you'll use properties like element.style or classes.

// Browser Engine vs JavaScript Engine

// Many people confuse these.

// Browser Engine

// Handles

// HTML
// CSS
// Layout
// Painting
// Rendering
// JavaScript Engine

// Runs JavaScript.

// Chrome uses

// V8

// Firefox uses

// SpiderMonkey

// Safari uses

// JavaScriptCore

// Rendering Process

// Suppose HTML is

// <h1>Hello</h1>

// Browser does

// HTML
// ↓

// DOM

// ↓

// CSS

// ↓

// CSSOM

// ↓

// Render Tree

// ↓

// Layout

// ↓

// Paint

// ↓

// Screen

// This happens every webpage you open.

// Specifications (Specs)

// A specification is an official document that defines how a technology should work.

// Examples:

// ECMAScript (ES): Defines the JavaScript language (variables, functions, promises, classes, etc.).
// DOM Specification: Defines objects like document, Element, and methods such as querySelector().
// HTML Specification: Defines HTML elements and browser behavior.
// CSS Specification: Defines CSS rules and properties.

// Because browsers follow these specifications, the same JavaScript code behaves consistently across Chrome, Firefox, Safari, and Edge.

// Who creates JavaScript?

// ECMA International publishes the ECMAScript specification.

// Every year, new features may be added.

// Examples:

// ES6 (2015): let, const, arrow functions, classes
// ES2017: async/await
// ES2020: BigInt, globalThis
// Summary
// Term	Meaning
// JavaScript	Programming language
// Browser	Environment where JS runs
// DOM	HTML converted into objects
// BOM	Browser-related objects like window, location
// Browser API	Features provided by the browser (not by JavaScript itself)
// JavaScript Engine	Executes JavaScript (e.g., V8)
// Browser Engine	Renders HTML/CSS and paints the page
// Specification	Official rules that define how technologies work
// Practice (Do this yourself)

// Create an index.html file:

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Browser APIs</title>
// </head>
// <body>

// <h1>Hello JavaScript</h1>

// <script>
//     console.log(window);
//     console.log(document);
//     console.log(location.href);
//     console.log(navigator.userAgent);

//     document.body.style.background = "lightblue";
// </script>

// </body>
// </html>

// Run it in your browser and inspect the Console. Try changing the background color to "yellow" or "black" to see how JavaScript interacts with the page.

// Interview Questions
// What is the difference between JavaScript and the Browser?
// What is the DOM?
// What is the BOM?
// Is document part of JavaScript?
// What is the window object?
// What is the difference between the Browser Engine and the JavaScript Engine?
// What is the role of the V8 engine?
// What are browser APIs?
// What is a specification (spec)?
// Which organization maintains the JavaScript language specification?