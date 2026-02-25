// ====================== what is a variable ====================== //

// A variable is a container for storing data values. It allows us to store and manipulate data in our programs. In JavaScript, we can declare variables using the `var`, `let`, or `const` keywords.
// ====================== declaring variables ====================== //
// We can declare a variable using the `var`, `let`, or `const` keywords followed by the variable name. For example:
var name = "John"; // using var
let age = 30; // using let
const PI = 3.14; // using const
// In the above example, we declared three variables:--//
// - `name` is a variable that holds the string value "John".
// - `age` is a variable that holds the number value 30.
// - `PI` is a constant variable that holds the value 3.14 and cannot be reassigned.
// ====================== variable naming rules ====================== //
// When naming variables in JavaScript, there are some rules to follow:
// 1. Variable names must start with a letter, underscore (_), or dollar sign ($).
// 2. Variable names can contain letters, numbers, underscores, or dollar signs.
// 3. Variable names cannot be reserved keywords (e.g., `var`, `let`, `const`, `if`, `else`, etc.).
// 4. Variable names are case-sensitive (e.g., `name` and `Name` are different variables).
// ====================== variable scope ====================== //
// The scope of a variable determines where it can be accessed in the code. In JavaScript, there are three types of variable scope:
// 1. Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code. 
// 2. Function Scope: Variables declared inside a function are in the function scope and can only be accessed within that function.
// 3. Block Scope: Variables declared with `let` or `const` inside a block (e.g., inside an `if` statement or a loop) are in the block scope and can only be accessed within that block.
// ====================== variable hoisting ====================== //
// In JavaScript, variable declarations are hoisted to the top of their scope. This means that you can use a variable before it is declared. However, only the declaration is hoisted, not the initialization. For example:
console.log(x); // Output: undefined
var x = 5;
// In the above example, the declaration of `x` is hoisted to the top, but its initialization with the value 5 is not. Therefore, when we try to log `x` before it is initialized, it returns `undefined`.  



// In summary, variables are essential for storing and manipulating data in JavaScript. Understanding how to declare variables, the rules for naming them, their scope, and hoisting is crucial for writing effective JavaScript code.
// three types of variables in JavaScript: var, let, and const. Each has its own characteristics and use cases. It's important to choose the appropriate variable type based on the requirements of your code.



// ====================== End of Variables.js ====================== //
