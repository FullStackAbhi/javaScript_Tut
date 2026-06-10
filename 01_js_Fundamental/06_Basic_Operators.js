//  Basic operators, maths

// Terms: “unary”, “binary”, “operand”

// An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

let x = 1;

x = -x;
alert( x ); 
// An operator is binary if it has two operands. The same minus exists in binary form as well:

let x = 1, y = 3;
alert( y - x ); 
// Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.

// Maths
// The following math operations are supported:

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

// The first four are straightforward, while % and ** need a few words about them.

// Remainder %
// The remainder operator %, despite its appearance, is not related to percents.

// The result of a % b is the remainder of the integer division of a by b.

// For instance:

alert( 5 % 2 ); 
alert( 8 % 3 ); 
alert( 8 % 4 ); 
// Exponentiation **
// The exponentiation operator a ** b raises a to the power of b.

// In school maths, we write that as ab.

// For instance:

alert( 2 ** 2 );
alert( 2 ** 3 );
alert( 2 ** 4 ); 
// Just like in maths, the exponentiation operator is defined for non-integer numbers as well.

// For example, a square root is an exponentiation by ½:

alert( 4 ** (1/2) ); 
alert( 8 ** (1/3) ); 

// String concatenation with binary +

// Let’s meet the features of JavaScript operators that are beyond school arithmetics.

// Usually, the plus operator + sums numbers.

// But, if the binary + is applied to strings, it merges (concatenates) them:

let s = "my" + "string";











alert(s); //"mystring"
// Note that if any of the operands is a string, then the other one is converted to a string too.

// For example:

alert( '1' + 2 );
alert( 2 + '1' ); 

// See, it doesn’t matter whether the first operand is a string or the second one.

// Here’s a more complex example:

alert(2 + 2 + '1' )//4 + "1" "41"
alert('1' + 2 + 2); //. "12" + 2 => "122"

















// Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.




// Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

// Here’s the demo for subtraction and division:

alert( 6 - '2' ); 
alert( '6' / '2' )

// Numeric conversion, unary +
// The plus + exists in two forms: the binary form that we used above and the unary form.

// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

// For example:

// // No effect on numbers





let x = 1;
alert( +x ); 

let y = -2;
alert( +y ); 





// // Converts non-numbers
alert( +true )
alert( +"" );   
// It actually does the same thing as Number(...), but is shorter.

// The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

// The binary plus would add them as strings:

let apples = "2";
let oranges = "3";

// alert( apples + oranges ); 
//  the binary plus concatenates strings
// If we want to treat them as numbers, we need to convert and then sum them:

let apples = "2";
let oranges = "3";

// // both values converted to numbers before the binary plus
alert( +apples + +oranges );//5
alert( apples + oranges );//23








// // the longer variant
alert( Number(apples) + Number(oranges) ); 

// From a mathematician’s standpoint, the abundance of pluses may seem strange. But from a programmer’s standpoint, there’s nothing special: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.

// Why are unary pluses applied to values before the binary ones? As we’re going to see, that’s because of their higher precedence.

// Operator precedence
// If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.

// From school, we all know that the multiplication in the expression 1 + 2 * 2 should be calculated before the addition. That’s exactly the precedence thing. The multiplication is said to have a higher precedence than the addition.

// Parentheses override any precedence, so if we’re not satisfied with the default order, we can use them to change it. For example, write (1 + 2) * 2.

// There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

// Here’s an extract from the precedence table (you don’t need to remember this, but note that unary operators are higher than corresponding binary ones):

// Precedence	Name	Sign
// …	…	…
// 14	unary plus	+
// 14	unary negation	-

// 13	exponentiation	**

// 12	multiplication	*
// 12	division	/
// 11	addition	+
// 11	subtraction	-
// …	…	…
// 2	assignment	=
// …	…	…
// As we can see, the “unary plus” has a priority of 14 which is higher than the 11 of “addition” (binary plus). That’s why, in the expression "+apples + +oranges", unary pluses work before the addition.
