
// // Assignment
// // guess the output of the following code:
// alert( null == undefined );
// alert( 0 === false );//
// alert( 0 == false ); //
// alert( null === undefined)










// alert( null > 0);  
// alert( null == 0 );
// alert( null >= 0 );


// alert( undefined > 0 ); 
// alert( undefined < 0 ); 
// alert( undefined == 0 );









// // Why does it dislike zero so much? Always false!

// // We get these results because:

// // Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
// // The equality check (3) returns false because undefined only equals null, undefined, and no other value.






















// // Mathematically, that’s strange. The last result states that “null is greater than or equal to zero”, so in one of the comparisons above it must be true, but they are both false.

// // The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.