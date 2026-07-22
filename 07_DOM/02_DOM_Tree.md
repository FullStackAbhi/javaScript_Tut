// Chapter 1.2 – DOM Tree
// What is the DOM Tree?

// When a browser loads an HTML file, it doesn't work directly with HTML text.

// For example:

< !DOCTYPE html >
    <html>
        <head>
            <title>My Website</title>
        </head>

        <body>

            <h1>Hello</h1>

            <p>Welcome</p>

        </body>
    </html>

// The browser converts it into a tree of JavaScript objects.

// ⁡⁣⁣⁢Document
// │
// └── html
//     ├── head
//     │    └── title
//     │          └── "My Website"
//     │
//     └── body
//          ├── h1
//          │    └── "Hello"
//          │
//          └── p
//               └── "Welcome"


// ⁡
// This is called the DOM Tree.

// Everything on a webpage becomes a node in this tree.

// Why is it called a Tree?

// Just like a family tree:

// Grandfather
//    │
// Father
//    │
// Son

// The DOM is similar.

html
│
body
│
div
│
button

// Every element has a parent, children, and sometimes siblings.

// DOM Node Types

// Everything inside HTML is a node.

// There are several node types, but these are the most important.

// 1. Document Node

// The whole page starts with the document object.

// document

// Think of it as the root of the webpage.

Example:

// console.log(document);

// 2. Element Node

// Every HTML tag becomes an Element Node.

// HTML

// <h1>Hello</h1>

// <p>Paragraph</p>

// <div></div>

// DOM

// h1

// p

// div

// Each tag is an element.

3. Text Node

// The text inside an element is NOT the element.

// Example

// <h1>Hello</h1>

// DOM

// h1
// │
// "Hello"

// Notice

// h1

// is different from

// "Hello"
// 4. Comment Node

// HTML comments also become nodes.

// <!-- Welcome -->

// DOM

// Comment

// "Welcome"
// Example DOM Tree

// Consider:

// ⁡⁣⁣⁢<body>

// <h1>Hello</h1>

// <div>

//     <p>HTML</p>

//     <button>Click</button>

// </div>

// </body>
⁡
// DOM Tree

// Document
// │
// html
// │
// body
// ├── h1
// │     └── "Hello"
// │
// └── div
//       ├── p
//       │    └── "HTML"
//       │
//       └── button
//              └── "Click"
// Parent, Child, and Siblings

// Take this HTML:

<body>

    <h1>Hello</h1>

    <p>Paragraph</p>

    <button>Click</button>

</body>

Tree

// body
// ├── h1
// ├── p
// └── button
// Parent

// body is the parent of

// h1
// p
// button
// Children

// Children of body are

h1

p

button
Siblings
h1

p

button

These have the same parent.

So they are siblings.

Root Node

The browser always creates

document

Inside document

html

Inside html

head

body

Always.

    document

↓

html

↓

head

↓

body


Browser Automatically Fixes HTML

Even if HTML is wrong,

    Browser fixes it.

        Example

You write

    < html >

    <body>

        Hello

    </body>

Browser changes it internally to

    < html >

<head></head>

<body>

Hello

</body>

</html >

    Even if you omit < head >, the browser creates it.

        Example

You write

    < ul >

    <li>One

        <li>Two

            <li>Three

            </ul>

            Browser automatically closes tags.

            DOM becomes

            ul
            ├── li
            ├── li
            └── li
            Whitespace Creates Text Nodes

            Many beginners don't know this.

            Consider:

            <body>

                <h1>Hello sjlkklk</h1>

                <p>Hi</p>

            </body>

            Looks simple.

            But DOM is actually

            body
            ├── "\n"
            ├── h1
            ├── "\n"
            ├── p
            └── "\n"

            Those blank lines become Text Nodes containing whitespace.

            This is why JavaScript provides two different collections:

            childNodes

            Includes everything

            Elements
            Text nodes
            Comments
            children

            Includes only element nodes.

            Example

            <body>

                <h1>Hello</h1>

                <p>Hi</p>

            </body>
            console.log(document.body.childNodes);

            Output

            Text
            h1
            Text
            p
            Text

            Now

            console.log(document.body.children);//element

            Output

            h1

            p

            Notice the difference.

            This distinction is asked frequently in interviews.

            Live Example

            Create this HTML.

            <!DOCTYPE html>
            <html>

                <head>

                    <title>DOM Tree</title>

                </head>

                <body>

                    <h1>Hello</h1>

                    <p>Paragraph</p>

                    <button>Click Me</button>

                    <script>

                        console.log(document);

                        console.log(document.documentElement);

                        console.log(document.head);

                        console.log(document.body);

                        console.log(document.body.children);

                        console.log(document.body.childNodes);

                    </script>

                </body>

            </html>

            Open the browser console and expand the objects to see the DOM tree.

            Important Properties
            document.documentElement

            Returns

            <html>
                document.head

                Returns

                <head>
                    document.body

                    Returns

                    <body>
                        document.body.children

                        Returns only elements.

                        document.body.childNodes

                        Returns everything.

                        Interview Questions
                        1. What is the DOM Tree?

                        A tree-like representation of an HTML document where every part of the document is represented as a node.

                        2. Does every HTML tag become an element node?

                        Yes.

                        3. Is text inside <h1> an element?

                            No. It's a Text Node.

                            4. Difference between children and childNodes?
                            children	childNodes
                            Only element nodes	All nodes (elements, text, comments)
                            Returns HTMLCollection	Returns NodeList
                            5. What is the root of the DOM?

                            document

                            6. Does the browser fix invalid HTML?

                            Yes. Browsers automatically insert missing tags and close certain tags to build a valid DOM tree.

                            Practice Exercise

                            Create this HTML:

                            <body>
                                <h1>JavaScript</h1>

                                <!-- This is a comment -->

                                <p>Learning DOM</p>

                                <div>
                                    <button>Click</button>
                                </div>
                            </body>
                            {/* 
Without running the code, answer these questions:

Draw the DOM tree.
How many Element Nodes are there?
How many Text Nodes are there (consider whitespace)?
What will document.body.children.length return?
What kinds of nodes will appear in document.body.childNodes? */}