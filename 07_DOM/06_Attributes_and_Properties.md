Attributes and Properties

When the browser loads an HTML page, it parses the HTML and creates DOM objects.

Example:

<input id="username" type="text">

The browser creates an object similar to:

input.id = "username";
input.type = "text";

Standard HTML attributes automatically become DOM properties.

DOM Properties

DOM elements are simply JavaScript objects.

We can create our own properties.

document.body.myData = {
    name: "Caesar",
    title: "Imperator"
};

console.log(document.body.myData.title);

Output

Imperator

We can even add methods.

document.body.sayTagName = function () {
    console.log(this.tagName);
};

document.body.sayTagName();

Output

BODY

Even every element can get a new method.

Element.prototype.sayHi = function () {
    console.log("Hello I'm " + this.tagName);
};

document.body.sayHi();

Output

Hello I'm BODY




HTML Attributes

Attributes are written inside HTML tags.

<input id="username" type="text">

Here

id
type

are HTML attributes.

The browser converts standard attributes into properties.

Standard vs Non-Standard Attributes

Example

<body id="page" something="hello">

JavaScript

console.log(document.body.id);

Output

page

But

console.log(document.body.something);

Output

undefined

Because something is not a standard HTML attribute.







Accessing Non-Standard Attributes
let map  = new Map()



Use these methods.

hasAttribute()

Checks existence.

element.hasAttribute("id");

Returns

true

getAttribute()

Reads attribute value.

element.getAttribute("id");

setAttribute()


Adds or updates attribute.

element.setAttribute("title","Hello");

HTML becomes





<div title="Hello"></div>

removeAttribute()

element.removeAttribute("title");

⁡⁣⁣⁢​‌‍‌attributes Collection​⁡

Returns all attributes.

for(let attr of element.attributes){
    console.log(attr.name, attr.value);
}

Output

id box
class active
title Hello



​‌‍‌⁡⁢⁣⁢Attribute Characteristics⁡​

Attribute names are case-insensitive

These are same.

element.getAttribute("ID");

element.getAttribute("id");

Attribute values are always ⁡⁢⁢⁢strings⁡
element.setAttribute("age",20);

Actually stored as

"20"


Property ↔ Attribute Synchronization

Usually both remain synchronized.

Example

input.setAttribute("id","abc");

console.log(input.id);

Output

abc

Changing property

input.id="xyz";

Then

console.log(input.getAttribute("id"));

Output

xyz

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Exception (value)

<input value="Hello" >


input.value="World";

Now

input.getAttribute("value");

Output

Hello

The property changed, but the attribute did not.

This happens because value synchronizes attribute → property, but not property → attribute.

DOM Properties Are Typed

Attributes are strings.

Properties may be different types.

Checkbox example

<input type="checkbox" checked>
console.log(input.getAttribute("checked"));

Output

""

String.

But

console.log(input.checked);

Output

true

Boolean.

Another example

<div style="color:red"></div>

console.log(div.getAttribute("style"));

Output

color:red

String.

But

console.log(div.style);

Output

CSSStyleDeclaration Object
href Difference

HTML

<a href="#home"></a>

Attribute

link.getAttribute("href");

Output

#home

Property

link.href

Output

http://website.com/page#home

Property always returns the complete URL.

Custom Attributes

Suppose

<div show-info="name"></div>

JavaScript

let field = div.getAttribute("show-info");

Output

name

Can be used for custom information.

Why data-* Attributes?

Instead of

<div user-id="25"></div>

Use

<div data-user-id="25"></div>

This is officially supported by HTML.

dataset Property

HTML

<div data-name="Abhishek"></div>

JavaScript

console.log(div.dataset.name);

Output

Abhishek
Multi-word data Attributes

HTML

<div data-order-state="pending"></div>

JavaScript

console.log(div.dataset.orderState);

Notice

data-order-state

↓

dataset.orderState

CamelCase is used.

Updating data Attributes
div.dataset.orderState = "completed";

HTML becomes

<div data-order-state="completed"></div>
Difference Between Attribute and Property
Attribute	Property
Exists in HTML	Exists in DOM object
Always string	Can be string, boolean, object, etc.
Access with getAttribute()	Access with dot notation (element.id)
Initial HTML value	Current value in JavaScript
Methods Summary
Method	Purpose
hasAttribute()	Check if attribute exists
getAttribute()	Read attribute
setAttribute()	Add or update attribute
removeAttribute()	Remove attribute
attributes	Get all attributes