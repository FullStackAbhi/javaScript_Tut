Learning Objectives

After this lesson, students should be able to:

✅ Create forms

✅ Collect user data

✅ Understand labels

✅ Use different input types

✅ Create Login Forms

✅ Create Signup Forms

✅ Prepare for DOM and React forms

 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.  02_Forms

This is one of the most important lessons because later you'll use:

DOM Manipulation
Form Validation
Fetch API
Authentication
React Forms
Login Systems
Signup Systems

A form is used to collect data from users.

Examples:

Login Form
Signup Form
Contact Form
Search Form
Checkout Form

Example:

<form>

</form>

Everything related to user input goes inside a form.

Basic Form Structure
<form>

    <label>Name</label>

    <input type="text">

    <button>Submit</button>

</form>

Output:

Name: [________]

[ Submit ]
Why Use Forms?

Without form:

<input type="text">

Input exists.

But no way to submit data.

Form groups related inputs together.

label Element

Used to describe inputs.

Example:

<label>Name</label>

<input type="text">

Good UI.

Good Accessibility.

Good SEO.

Better Version
<label for="name">
    Name
</label>

<input id="name" type="text">

Now clicking label focuses the input.

Professional approach.

Input Element

Most important form element.

<input>

 >>>>>>>>>>>>>>>>>> Different input types perform different jobs.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Text Input
<input type="text">

Used for:

Name
Username
City
Country

Example:

<label>Username</label>

<input type="text">
Placeholder
<input
    type="text"
    placeholder="Enter username">

Shows hint text.

>>>>>>>>>>>>>>>>>>>>>>>>>> Email Input
<input type="email">

Used for:

Email addresses

Example:

<input
    type="email"
    placeholder="abc@gmail.com">

>>>>>>>>>>>>>>>>>>>>>>>>> Password Input
<input type="password">

Characters become hidden.

Example:

<input
    type="password">

Output:

******

>>>>>>>>>>>>>>>>>>>>>>>>>>>> Number Input
<input type="number">

Used for:

Age
Phone Number
Quantity
Date Input
<input type="date">

Provides calendar picker.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Radio Button

Used when only one option can be selected.

Example:

<label>Gender</label>

<input
type="radio"
name="gender">

Male

<input
type="radio"
name="gender">

Female

Important:

Same name attribute

Only one option can be selected.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Checkbox

Used when multiple options can be selected.

Example:

<input type="checkbox">

JavaScript

<input type="checkbox">

React

<input type="checkbox">

Node.js

Output:

☑ JavaScript
☑ React
☑ Node.js

Multiple allowed.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Textarea

Used for large text.

Example:

<textarea>

</textarea>

Use cases:

Feedback
Description
Comments
Message
Select Dropdown
<select>

<option>
India
</option>

<option>
USA
</option>

<option>
Canada
</option>

</select>

Output:

▼ India
▼ USA
▼ Canada

Button
<button>
Submit
</button>

Used to submit form.

Complete Login Form

Complete Signup Form

Real-World Connection


 in React:

<form onSubmit={handleSubmit}>
    <input
    value={email}
    onChange={handleChange}
    />
</form>

Same concepts.

React simply adds JavaScript.

Common Mistakes
Mistake 1
<label>
Name
</label>

No connection to input.

Correct:

<label for="name">
Name
</label>

<input
id="name">

Mistake 2

Radio buttons without same name.

Wrong:

<input type="radio">

<input type="radio">

Both can be selected.

Correct:

<input
type="radio"
name="gender">

<input
type="radio"
name="gender">

Interview Questions
What is a form?

Used to collect user data.

Difference between checkbox and radio?

Checkbox:

Multiple selections allowed

Radio:

Only one selection allowed
Why use labels?
Accessibility
User Experience
Input Association
Difference between input and textarea?

Input:

Single line

Textarea:

Multiple lines