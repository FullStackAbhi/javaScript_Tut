Styles and Classes in JavaScript

There are two ways to style an HTML element.

1. Using CSS Classes (Recommended)
<div class="box"></div>
.box{
    color:red;
    background:yellow;
}

JavaScript

element.classList.add("box");

✔ Easy to maintain

✔ Reusable

✔ Recommended

2. Using Inline Styles
<div style="color:red"></div>

JavaScript

element.style.color="red";

Use inline styles only when values are calculated dynamically.

Example

let left = 200;

box.style.left = left + "px";
className

Represents the complete class attribute.

HTML

<body class="main page"></body>

JavaScript

console.log(document.body.className);

Output

main page

Replacing classes

document.body.className = "dark";

Now

<body class="dark"></body>

Previous classes are removed.

classList

Used to manipulate individual classes.

Add
element.classList.add("active");
Remove
element.classList.remove("active");
Toggle

If class exists → remove

Else → add

element.classList.toggle("active");

Very common for

Dark mode
Navbar
Sidebar
Accordion

Example

button.onclick=()=>{
    menu.classList.toggle("show");
}
contains()

Checks if class exists.

if(element.classList.contains("active")){
    console.log("Yes");
}
Iterate
for(let cls of element.classList){
    console.log(cls);
}
style Property

Represents inline CSS.

element.style.color="red";
element.style.backgroundColor="yellow";
element.style.fontSize="25px";
CSS → JavaScript Conversion

CSS

background-color

JavaScript

backgroundColor

CSS

border-left-width

JavaScript

borderLeftWidth

CSS

z-index

JavaScript

zIndex
Setting Multiple Styles
box.style.width="200px";
box.style.height="100px";
box.style.backgroundColor="red";
Removing a Style

Instead of

delete element.style.color;

Use

element.style.color="";

or

element.style.removeProperty("color");
cssText

Assign multiple styles at once.

box.style.cssText=`
    color:white;
    background:black;
    width:200px;
    height:100px;
`;

⚠ Replaces all previous inline styles.

Important Rule

Wrong

box.style.margin=20;

Correct

box.style.margin="20px";

Always include units.

Examples

"10px"

"2rem"

"50%"

"100vh"
Reading Styles

Suppose CSS is

.box{
    color:red;
}

If we do

console.log(box.style.color);

Output

""

Why?

Because .style reads only inline styles, not CSS rules.

getComputedStyle()

Reads the final style after CSS has been applied.

let style=getComputedStyle(box);

console.log(style.color);

Output

rgb(255,0,0)

Another example

console.log(style.width);

console.log(style.marginTop);

console.log(style.fontSize);
Syntax
getComputedStyle(element)

Returns an object.

Example

let styles=getComputedStyle(box);

console.log(styles.backgroundColor);

console.log(styles.paddingLeft);

console.log(styles.display);
Difference Between style and getComputedStyle()
style	getComputedStyle()
Reads inline styles only	Reads final computed styles
Can modify styles	Read-only
Returns only inline values	Returns CSS + inline + inherited values
Used for setting styles	Used for reading styles
className vs classList
className	classList
Entire class string	Individual classes
Replaces all classes	Add/remove one class
Simple string	Object with methods
classList Methods
Method	Purpose
add()	Add class
remove()	Remove class
toggle()	Add if absent, remove if present
contains()	Check class
for...of	Iterate classes