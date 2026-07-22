01_Semantic_HTML
Learning Objectives

By the end of this lesson we will be able to:

Understand Semantic HTML
Differentiate Semantic vs Non-Semantic Elements
Create a proper webpage structure
Understand SEO benefits
Understand Accessibility benefits
Use Semantic HTML in React projects
What is Semantic HTML?

Semantic means:

An element that clearly describes its purpose.

Example:

<header>
    Welcome
</header>

When another developer sees <header>, they immediately understand:

This is the header section.

Non-Semantic Example
<div class="header">
    Welcome
</div>

Question:

What is this div?

Header?
Footer?
Sidebar?
Navigation?

We don't know.

That's why semantic tags were introduced.

Why Do We Use Semantic HTML?
1. Better Readability

Bad:

<div class="top">
<div class="menu">
<div class="content">

Good:

<header>
<nav>
<main>

The code becomes self-explanatory.

2. Better SEO

Google understands:

<article>

means:

Important content.

<nav>

means:

Navigation links.

Google can rank content better.

3. Accessibility

Screen readers used by visually impaired users understand:

<header>
<nav>
<main>
<footer>

and can navigate the page easily.

Important Semantic Tags
<header>

Represents:

Top section of webpage

Example:

<header>
    <h1>Code Academy</h1>
</header>

Usually contains:

Logo
Title
Search bar
<nav>

Navigation section.

Example:

<nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
</nav>

Usually contains:

Menus
Links
<main>

Main content of webpage.

Example:

<main>
    <h2>JavaScript Course</h2>
</main>

A page should normally have:

1 main tag
<section>

Groups related content.

Example:

<section>
    <h2>Our Courses</h2>
</section>

Think:

Chapter of a book
<article>

Independent content.

Example:

<article>
    <h3>JavaScript Basics</h3>
    <p>Learn Variables...</p>
</article>

Examples:

Blog Post
News Article
Product Card
<aside>

Side content.

Example:

<aside>
    Related Articles
</aside>

Usually:

Ads
Sidebar
Recommendations
<footer>

Bottom section.

Example:

<footer>
    Copyright 2026
</footer>

Usually contains:

Contact
Copyright
Social Links
Visual Structure
+----------------------+
|       HEADER         |
+----------------------+

+----------------------+
|         NAV          |
+----------------------+

+----------------------+
|        MAIN          |
|                      |
|  +---------------+   |
|  |   SECTION     |   |
|  +---------------+   |
|                      |
|  +---------------+   |
|  |   ARTICLE     |   |
|  +---------------+   |
+----------------------+

+----------------------+
|       FOOTER         |
+----------------------+
Real Example

<!DOCTYPE html>
<html>

<head>
    <title>Semantic HTML</title>
</head>

<body>

    <header>
        <h1>Code Academy</h1>
    </header>

    <nav>
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Contact</a>
    </nav>

    <main>

        <section>
            <h2>Programming Courses</h2>

            <article>
                <h3>JavaScript</h3>
                <p>Learn JS from scratch.</p>
            </article>

            <article>
                <h3>React</h3>
                <p>Learn React Development.</p>
            </article>

        </section>

    </main>

    <footer>
        Copyright 2026
    </footer>

</body>

</html>


Interview Questions
What is Semantic HTML?

Elements that clearly describe their meaning and purpose.

Give examples of Semantic Tags.
header
nav
main
section
article
aside
footer
Why use Semantic HTML?
1. Readability
2. SEO
3. Accessibility
4. Maintainability
Difference Between section and article?

Section

Groups related content.

Article

Independent reusable content.
Assignment

Create:

Online Learning Website Layout

Must contain:

<header>
<nav>
<main>
<section>
<article>
<footer>

No CSS.

Focus only on HTML structure.