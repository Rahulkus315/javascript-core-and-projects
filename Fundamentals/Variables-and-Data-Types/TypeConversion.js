// ======================================================================
// Type Conversion in JavaScript
// ==============================================================
/*
Type conversion, also known as type coercion, is the process of converting a value from one data type to another. In JavaScript, this can happen implicitly (automatically) or explicitly (manually).


Implicit type conversion occurs when JavaScript automatically converts a value to the expected type in a given context. For example:
let result = "5" + 10; // Output: "510" (string concatenation)
let sum = "5" - 2; // Output: 3 (string is coerced to a number)
In the above example, when we add a string and a number, JavaScript coerces the number to a string and performs string concatenation. When we subtract a number from a string, JavaScript coerces the string to a number and performs subtraction.

Explicit type conversion, on the other hand, is when we manually convert a value to a different type using built-in functions or methods. For example:
let num = Number("5"); // Converts the string "5" to the number 5
let str = String(10); // Converts the number 10 to the string "10"
let bool = Boolean(0); // Converts the number 0 to the boolean value false
In the above example, we used the `Number()`, `String()`, and `Boolean()` functions to explicitly convert values to different types.


In summary, type conversion is an important concept in JavaScript that allows us to work with different data types and perform operations on them. Understanding how type coercion works can help us avoid unexpected behavior in our code and write more effective JavaScript programs.
*/


// ====================== End of TypeConversion.js ====================== //