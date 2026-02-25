// ==============================================================
//                        Arithmetic Operators
// ==============================================================
// Addition
let a = 5;
let b = 3;
let sum = a + b; // sum is 8   
// Subtraction
let difference = a - b; // difference is 2
// Multiplication
let product = a * b; // product is 15   
// Division
let quotient = a / b; // quotient is 1.6666666666666667
// Modulus (Remainder)
let remainder = a % b; // remainder is 2    
// Exponentiation
let power = a ** b; // power is 125
// Increment
a++; // a is now 6
// Decrement
b--; // b is now 2
// In the above example, we have demonstrated the use of various arithmetic operators in JavaScript. These operators allow us to perform basic mathematical operations on numbers and variables. Understanding how to use these operators is essential for performing calculations and manipulating data in JavaScript programs.

// ====================== End of Arithmetic-Operators.js ====================== //


// ==============================================================
//                  questions and exercises (interview questions)
// ==============================================================
/*
1. What is the difference between the `+` operator when used with numbers and when used with strings in JavaScript?
2. How does the modulus operator (`%`) work in JavaScript, and what is its output when used with negative numbers?
3. What is the result of the following expression: `5 + 3 * 2`? Explain the order of operations in JavaScript.
4. How can you use the increment (`++`) and decrement (`--`) operators in both prefix and postfix forms, and what is the difference between them?   
5. What will be the output of the following code snippet, and why?
```javascriptlet x = 10;
console.log(x++); // Output?
console.log(++x); // Output?
```
6. How can you use the exponentiation operator (`**`) to calculate the square root of a number in JavaScript?
7. What is the difference between the division operator (`/`) and the floor division operator in JavaScript, and how can you implement floor division using the division operator?
8. How does JavaScript handle division by zero, and what is the output of such an operation?
9. Can you explain the concept of operator precedence in JavaScript and how it affects the evaluation of expressions?
10. How can you use parentheses to change the order of operations in a complex expression, and can you provide an example?

// ====================== Answers ====================== //
1. The `+` operator performs addition when used with numbers, but it performs string concatenation when used with strings. For example, `5 + 3` results in `8`, while `"Hello" + " " + "World"` results in `"Hello World"`.
2. The modulus operator (`%`) returns the remainder of a division operation. When used with negative numbers, the result can be negative. For example, `-5 % 3` results in `-2`, while `5 % -3` results in `2`.
3. The result of the expression `5 + 3 * 2` is `11`. This is because of operator precedence, where multiplication has a higher precedence than addition. Therefore, `3 * 2` is evaluated first, resulting in `6`, and then `5 + 6` is evaluated to give `11`.
4. The increment (`++`) and decrement (`--`) operators can be used in both prefix and postfix forms. In prefix form (e.g., `++x`), the variable is incremented or decremented before its value is used in an expression. In postfix form (e.g., `x++`), the variable's current value is used in the expression before it is incremented or decremented. For example:
```javascriptlet x = 5;
console.log(x++); // Output: 5 (postfix, value used before increment)
console.log(++x); // Output: 7 (prefix, value incremented before use)
```
5. The output of the code snippet will be:
```10
12
// ========================= end of questions and exercises ======================// */
