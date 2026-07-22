03_Box_Model

This is the most important CSS concept.

Most layout issues happen because developers don't understand the Box Model.

Learning Objectives

After this lesson students should be able to:

✅ Understand how elements occupy space

✅ Use margin correctly

✅ Use padding correctly

✅ Add borders

✅ Control width and height

✅ Understand box-sizing

✅ Debug spacing issues

Every HTML Element is a Box

When browser renders:

<h1>Hello</h1>

Browser sees:

+----------------+
|     Hello      |
+----------------+

Everything becomes a rectangular box.

Box Model Structure
+-------------------------+
|         Margin          |
|  +-------------------+  |
|  |      Border       |  |
|  | +---------------+ |  |
|  | |    Padding    | |  |
|  | | +-----------+ | |  |
|  | | | Content   | | |  |
|  | | +-----------+ | |  |
|  | +---------------+ |  |
|  +-------------------+  |
+-------------------------+

Order:

Content
↓
Padding
↓
Border
↓
Margin

Content Area

Actual content.

Example:

<div>
    JavaScript
</div>

"JavaScript" is content.

>> Width

Controls content width.

div {
    width: 200px;
}

Output:

Content Width = 200px

>> Height

Controls content height.

div {
    height: 100px;
}

Output:

Content Height = 100px
Padding

>> Padding creates space INSIDE the box.

Example:

div {
    padding: 20px;
}

Visual:

+-------------------+
|                   |
|     Content       |
|                   |
+-------------------+

Content moves away from border.

Padding Example
<div class="box">
    Hello
</div>
.box {
    padding: 30px;
    border: 2px solid black;
}

Result:

More breathing room.

 >>> Individual Padding
padding-top: 20px;

padding-right: 10px;

padding-bottom: 30px;

padding-left: 15px;
Shorthand Padding
padding: 20px;

?? All sides.

padding: 20px 40px;
Top Bottom = 20

Left Right = 40
Border

Border surrounds padding and content.

Example:

border: 2px solid black;

Visual:

+----------------+
|    Content     |
+----------------+
Border Syntax
border:
2px
solid
red;

Meaning:

Thickness

Style

Color

>> Margin

Margin creates space OUTSIDE the box.

Example:

margin: 30px;

Visual:

Box

(space outside)

Another Box
Margin Example
.box {
    margin: 50px;
}

Entire box moves away from surrounding elements.

>> Padding vs Margin

Most common interview question.

Padding
Inside space
Margin
Outside space

Visual:

Margin

[ Border ]

(Padding)

Content
Width Problem

Example:

.box {
    width: 200px;
    padding: 20px;
}

Students think:

Width = 200px

Wrong.

Actual:

200 + 20 + 20

= 240px
Why?

Because browser calculates:

Content

+

Padding

+

Border
box-sizing

Solution:

box-sizing: border-box;

Most important CSS property.

Without border-box
width: 200px;
padding: 20px;

Actual:

240px
With border-box
width: 200px;

padding: 20px;

box-sizing: border-box;

Actual:

200px

Padding included.

Industry Standard

Almost every project starts with:

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


Practical Demo

HTML

<div class="card">
    JavaScript Course
</div>

CSS

.card {

    width: 300px;

    padding: 20px;

    border: 2px solid black;

    margin: 20px;

}

Qus:

Which part is margin?

Which part is padding?

Which part is border?

Interview Questions
What is CSS Box Model?

A model describing how elements occupy space using:

Content
Padding
Border
Margin
Difference between margin and padding?
Padding = Inside spacing

Margin = Outside spacing
What is box-sizing?

Determines how width and height are calculated.

Why use border-box?

Makes sizing predictable.

Homework
Task 1

Create:

Profile Card

Use:

Width
Padding
Margin
Border
Task 2

Create:

Product Card

Containing:

Image

Title

Price

Button

Use proper spacing.