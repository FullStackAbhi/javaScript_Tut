

// Part 1 — Why Do We Need Date?

// How does Instagram know

// 2 hours ago

// How does WhatsApp know

// Last Seen 11:45 AM

// How does Amazon know

// Order Delivered on 24 June

// How does a timer know

// 5 seconds remaining

// Answer:

// JavaScript provides
// Date object.
// Definition

// Date is a built-in JavaScript object used to store, manipulate and manage dates and time.

// Part 2 — Creating Date Objects

// This is the first constructor students should know.

// Current Date
let today = new Date();

console.log(today);

// Example Output

// Wed Jun 25 2026 11:30:25 GMT+0530

// This creates the current date and current time.

// ⁡⁢⁣⁢Timestamp⁡

let date = new Date(0);

// Output

// Jan 1 1970

// Ask:

// Why 1970?

// Because JavaScript counts time from

// January 1, 1970

// called the Unix Epoch.

// String
let date = new Date("2026-06-25");

// Very common.

// Useful when reading data from APIs.

// Individual Components
let date = new Date(
    2026,
    5,
    25,
    10,
    30,
    15
);

// Explain:

// Year

// Month

// Day

// Hour

// Minute

// Second

// ⚠️ Important

// Month starts from

// 0

// Example

// 0 = January

// 1 = February

// 5 = June

//  always forget this.

// Part 3 — ⁡⁢⁣⁢Reading Date Components⁡

// Most Interview Questions come from here.

let date = new Date();
// Year
date.getFullYear();

// Returns

// 2026
// Month
date.getMonth();

// Returns

// 0-11

// Explain again

// January

// ↓

// 0

// Date
date.getDate();

// Returns

// 1-31

// Day
date.getDay();

// Returns

// 0-6
// Sunday
let obj  = {
    name = "divya"
}


// ↓

// 0


// getDate()

// and

// getDay()

// Explain carefully.

// Time
date.getHours();

date.getMinutes();

date.getSeconds();


// Part 4 — Setting Date

// Instead of reading,

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>> ⁡⁢⁣⁢now modify⁡.

let date = new Date();

// Year

date.setFullYear(2030);

// Month

date.setMonth(11);

// December.

// Date

date.setDate(15);

// Hours

date.setHours(8);

// Similarly

setMinutes()

setSeconds()


// get

// ↓

// Read

// set

// ↓

// Update

// Part 5 — ⁡⁢⁣⁢Auto Correction⁡ ⭐⭐⭐

// One of JavaScript's coolest features.

// Example

let date = new Date(2024,0,32);

console.log(date);

// Output

// 1 February

// Why?

// Because

// January

// has only

// 31 days.

// JavaScript automatically fixes it.

// Another example

let date = new Date(2024,1,28);



date.setDate(date.getDate()+2);

// Output

// 1 March

// JavaScript handles leap years too.

// Amazing feature.

// Part 6 — ⁡⁢⁣⁢Timestamp⁡

// Most important Interview Topic.

// Definition

// A timestamp is the number of milliseconds since 1 Jan 1970

// Example

let date = new Date();

console.log(date.getTime());

// Output

// 1750843254387

// Looks strange.

// But computers love numbers.

// Why Timestamp?

// Easy calculations.

// Instead of

// Date

// ↓

// Month

// ↓

// Year

// Computer compares

// Numbers

// Much faster.

// Part 7 — Date Difference

// Suppose

let start = new Date();

// // Task

let end = new Date();

// Difference

console.log(end-start);

// Output

// 25 ms

// This is how websites measure performance.

// Part 8 — Date.now()

// Instead of

new Date().getTime()

// Use

Date.now()

// Same output.

// Faster.

// Cleaner.

// Use it whenever you only need the timestamp.

// Part 9 — Date.parse()

// Suppose API returns

// 2026-06-25

// Convert

let ms = Date.parse("2026-06-25");

// Returns timestamp.

// Then

new Date(ms);

// Back to Date object.

// Things Students Always Forget
// Month starts from
// 0
// Sunday starts from
// 0
// Use
// getFullYear()

// Not

// getYear()

// because getYear() is deprecated.

// Timestamp is
// Milliseconds

// Not seconds.

// Real World Uses
// Instagram
// 2 minutes ago
// WhatsApp
// Last Seen
// Amazon
// Expected Delivery
// OTP Expiry
// Expires in 5 minutes
// Booking Systems
// Appointment Time
// Countdown Timers
// Sale ends in 2 hours
// Interview Questions
// What is Date object?

// Built-in object used to work with date and time.

// Why does month start from 0?

// Because JavaScript internally indexes months from 0 to 11.

// Difference between
// getDate()

// and

// getDay()

// getDate() returns the day of the month (1–31).

// getDay() returns the day of the week (0–6).

// Difference between
// Date.now()

// and

// new Date()

// Date.now() returns only the timestamp.

// new Date() returns a complete Date object.

// What is Timestamp?

// Milliseconds since

// January 1, 1970 UTC
// Why use timestamps?

// They make comparing dates and measuring time fast and efficient.

