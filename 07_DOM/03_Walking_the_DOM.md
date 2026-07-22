// Chapter 1.3 - Walking the DOM
// What is Walking the DOM?

// Imagine your HTML is a family tree.

// <html>
// <head></head>
// <body>

//     <div>
//         <h1>Hello</h1>
//         <p>Welcome</p>
//     </div>

// </body>
// </html>

// DOM Tree

// document
//    │
//  html
//  ├──── head
//  └──── body
//           │
//          div
//         ├── h1
//         └── p

// Walking the DOM means

// Moving from one node to another using JavaScript.

// For example

// Move from body → div
// Move from div → h1
// Move from h1 → div
// Move from h1 → p
// There are TWO kinds of navigation

// 1. Node Navigation

// Works with

// Elements
// Text
// Comments

// Properties

// parentNode

// childNodes

// firstChild

// lastChild

// previousSibling

// nextSibling


// 2. Element Navigation ⭐

// Works with

// Only HTML Elements.

// Properties

// parentElement

// children

// firstElementChild

// lastElementChild

// nextElementSibling

// previousElementSibling

// In real projects,

// 95% of the time you'll use Element Navigation.

// Starting Point

// Every DOM traversal starts from

// document

// Example

// document.body

// returns

// <body>
// document.head

// returns

// <head>
// document.documentElement

// returns

// <html>
// Example HTML

// We'll use this throughout the lesson.

<body>

<div id="container">

    <h1>Hello</h1>

    <p>Welcome</p>

    <button>Click</button>

</div>

</body>

// DOM

// body
// │
// div
// ├── h1
// ├── p
// └── button


// parentNode

// Moves upward.

// Child
//  ↑
// Parent

// Example

// let h1 = document.body.firstElementChild.firstElementChild;

// console.log(h1.parentNode);

// Output

// <div id="container">
// Tree

// div
// │
// h1

// Move

// h1

// ↑

// div


// parentElement

// Almost same as parentNode.

// console.log(h1.parentElement);

// Output

// div
// Difference
// document.documentElement.parentNode

// returns

// document

// because html's parent is document.

// But

// document.documentElement.parentElement

// returns

// null

// because document is not an HTML element.





// Interview Question ⭐

// parentNode returns any parent node.

// parentElement returns only an Element.

// childNodes

// Returns every child.

// Example

// <body>

// <h1>Hello</h1>

// <p>Hi</p>

// </body>

// Browser actually sees

// body
// ├── Text
// ├── h1
// ├── Text
// ├── p
// └── Text

// Now

// console.log(document.body.childNodes);

// Output

// Text

// h1

// Text

// p

// Text

// Whitespace counts as text nodes.

// children ⭐

// Most useful property.

// Returns

// Only Elements.

// console.log(document.body.children);

// Output

// h1

// p

// No text nodes.

// Interview
// childNodes	children
// All nodes	Only Elements
// NodeList	HTMLCollection
// firstChild

// Returns

// First node.

// Example

// <body>

// <h1>Hello</h1>

// </body>

// Actually

// body
// │
// Text
// │
// h1

// So

// document.body.firstChild

// returns

// Text Node

// NOT h1.

// Many beginners make this mistake.

// firstElementChild ⭐

// Returns

// h1

// because it ignores text.

// document.body.firstElementChild

// Output

// <h1>
// lastChild

// Returns

// Last node.

// document.body.lastChild

// Usually

// Text Node
// lastElementChild

// Returns

// Last HTML element.

// document.body.lastElementChild

// Output

// <button>
// nextSibling

// Moves to next node.

// Suppose

// body

// Text

// h1

// Text

// p

// If current node is

// h1

// then

// h1.nextSibling

// returns

// Text Node

// because whitespace exists.

// nextElementSibling ⭐

// Ignores text.

// h1

// ↓

// p
// h1.nextElementSibling

// Output

// <p>
// previousSibling

// Move left.

// h1

// ↑

// Text

// Returns Text Node.

// previousElementSibling

// Moves to previous element.

// Example

// button

// ↑

// p
// button.previousElementSibling

// returns

// <p>
// document.body can be null

// This is very important.

// Consider

// <html>

// <head>

// <script>

// console.log(document.body);

// </script>

// </head>

// <body>

// </body>

// </html>

// Output

// null

// Why?

// Browser reads HTML from top to bottom.

// At the time the script runs,

// body

// has not been parsed yet.

// Correct

// <body>

// <script>

// console.log(document.body);

// </script>

// </body>

// Output

// HTMLBodyElement
// hasChildNodes()

// Checks if an element has children.

// document.body.hasChildNodes();

// Output

// true
// childNodes is NOT an Array

// Many beginners try

// document.body.childNodes.map(...)

// ❌ Error

// because

// childNodes

// is a

// NodeList

// not Array.

// Convert it.

// let arr = Array.from(document.body.childNodes);

// arr.map(node => console.log(node));
// Live Collection ⭐

// Suppose

// let list = document.body.children;

// Now add

// let h2 = document.createElement("h2");

// document.body.append(h2);

// Without updating

// list

// its length automatically changes.

// console.log(list.length);

// This happens because HTMLCollection is live.

// Don't use for...in

// Wrong

// for(let item in document.body.children){
//     console.log(item);
// }

// Output

// 0

// 1

// length

// item

// namedItem

// ...

// Use

// for(let element of document.body.children){
//     console.log(element);
// }
// Element-only Navigation (Recommended)

// Use these in almost every project:

// parentElement

// children

// firstElementChild

// lastElementChild

// nextElementSibling

// previousElementSibling

// These ignore whitespace and comments, making your code cleaner.

// Real Project Example

// HTML

// <div id="card">

//     <h1>JavaScript</h1>

//     <button>Delete</button>

// </div>

// JavaScript

// const card = document.getElementById("card");

// console.log(card.firstElementChild);

// Output

// <h1>
// console.log(card.lastElementChild);

// Output

// <button>
// console.log(card.firstElementChild.nextElementSibling);

// Output

// <button>
// Table Navigation

// Tables have extra properties.

// HTML

// <table id="table">
//     <tr>
//         <td>One</td>
//         <td>Two</td>
//     </tr>
// </table>

// JavaScript

// const table = document.getElementById("table");

// console.log(table.rows);        // Collection of rows
// console.log(table.rows[0]);     // First <tr>
// console.log(table.rows[0].cells); // Cells in the first row
// console.log(table.rows[0].cells[1]); // Second cell ("Two")

// This is useful when working with HTML tables.

// Complete Navigation Cheat Sheet
// Property	Returns
// document.documentElement	<html>
// document.head	<head>
// document.body	<body>
// parentNode	Parent node (can be document)
// parentElement	Parent HTML element
// childNodes	All child nodes (elements, text, comments)
// children	Only child elements
// firstChild	First child node
// firstElementChild	First child element
// lastChild	Last child node
// lastElementChild	Last child element
// nextSibling	Next sibling node
// nextElementSibling	Next sibling element
// previousSibling	Previous sibling node
// previousElementSibling	Previous sibling element
// hasChildNodes()	true if any child exists
// Practice Questions

// Consider this HTML:

// <body>

// <div id="box">
//     <h1>Hello</h1>
//     <p>Welcome</p>
//     <button>Click</button>
// </div>

// </body>

// Without running the code, answer:

// What is the output of document.body.firstElementChild?
// What is the output of document.body.firstElementChild.children.length?
// What is the output of document.body.firstElementChild.firstElementChild.nextElementSibling?
// What is the difference between childNodes and children?
// Why can document.body be null inside the <head>?
// Why is childNodes not a real array?
// What is the difference between parentNode and parentElement?
// Task Solution

// Given:

// <html>
// <body>
//   <div>Users:</div>
//   <ul>
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
// </body>
// </html>
// 1. Access the <div> DOM node
// document.body.firstElementChild

// or

// document.body.children[0]
// 2. Access the <ul> DOM node
// document.body.lastElementChild

// or

// document.body.children[1]
// 3. Access the second <li> ("Pete")
// document.body.children[1].children[1]

// or step by step:

// const ul = document.body.children[1];
// const secondLi = ul.lastElementChild;

// console.log(secondLi); // <li>Pete</li>