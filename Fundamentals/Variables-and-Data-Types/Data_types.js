// ====================== what is a data type ====================== //
// A data type in JavaScript defines the kind of value a variable can hold. JavaScript has several built-in data types, including:
// 1. String: A sequence of characters, enclosed in single or double quotes.
// 2. Number: A numeric value, including integers and floating-point numbers.
// 3. Boolean: A logical value that is either `true` or `false`.
// 4. Undefined: A variable that has been declared but not assigned a value.
// 5. Null: A value that represents "nothing" or "no value".
// 6. Object: A collection of key-value pairs.
// 7. Symbol: A unique identifier for an object property (introduced in ES6).
// 8. BigInt: An integer type that can represent integers larger than Number.MAX_SAFE_INTEGER (introduced in ES2020).


// ====================== examples of data types ====================== //
let name = "John"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let address; // Undefined
let phoneNumber = null; // Null
let person = { name: "John", age: 30 }; // Object
let uniqueId = Symbol("id"); // Symbol
let bigNumber = 9007199254740991n; // BigInt
// In the above example, we have declared variables of different data types to demonstrate the variety of values that can be stored in JavaScript.
// ====================== type checking ====================== //  
// We can check the data type of a variable using the `typeof` operator. For example:
console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof address); // Output: undefined
console.log(typeof phoneNumber); // Output: object (null is considered an object in JavaScript)
console.log(typeof person); // Output: object
console.log(typeof uniqueId); // Output: symbol     
console.log(typeof bigNumber); // Output: bigint
// In the above example, we used the `typeof` operator to check the data type of each variable and logged the results to the console.




// ====================== type coercion ====================== //   
// JavaScript is a dynamically typed language, which means that variables can hold values of any data type and can change types at runtime. This can lead to type coercion, where JavaScript automatically converts values from one type to another when performing operations. For example:
let result = "5" + 10; // Output: "510" (string concatenation)
let sum = "5" - 2; // Output: 3 (string is coerced to a number)
// In the above example, when we add a string and a number, JavaScript coerces the number to a string and performs string concatenation. When we subtract a number from a string, JavaScript coerces the string to a number and performs subtraction.
// In summary, understanding data types is crucial for writing effective JavaScript code. It helps us to store and manipulate data correctly and avoid unexpected behavior due to type coercion.  



// ====================== End of Data_types.js ====================== //