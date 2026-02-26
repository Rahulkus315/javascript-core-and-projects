// =================== Functions Exercises ===================
// 1. Write a function that takes a number as an argument and returns the square of that number.
// 2. Write a function that takes two numbers as arguments and returns their sum.
// 3. Write a function that takes a string as an argument and returns the number of characters in that string.
// 4. Write a function that takes an array of numbers as an argument and returns the average of those numbers.
// 5. Write a function that takes a string as an argument and returns the string in reverse order.
// 6. Write a function that takes a number as an argument and returns true if the number is even, and false if the number is odd.
// 7. Write a function that takes an array of strings as an argument and returns a new array with all the strings in uppercase.
// 8. Write a function that takes a number as an argument and returns the factorial of that number.
// 9. Write a function that takes a string as an argument and returns true if the string is a palindrome, and false otherwise.
// 10. Write a function that takes an array of numbers as an argument and returns the largest number in that array.



// =================== Functions Solutions ===================
// 1. Function to return the square of a number
function square(num) {
    return num * num;
}
console.log(square(5)); // Output: 25

// 2. Function to return the sum of two numbers
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4)); // Output: 7

// 3. Function to return the number of characters in a string
function countCharacters(str) {
    return str.length;
}   
console.log(countCharacters("Hello")); // Output: 5

// 4. Function to return the average of an array of numbers
function average(arr) {
    const total = arr.reduce((acc, num) => acc + num, 0);
    return total / arr.length;
}
console.log(average([1, 2, 3, 4, 5])); // Output: 3

// 5. Function to return a string in reverse order
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello")); // Output: "olleH"

// 6. Function to check if a number is even or odd  
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // Output: true
console.log(isEven(5)); // Output: false    

// 7. Function to return an array of strings in uppercase
function toUpperCase(arr) {
    return arr.map(str => str.toUpperCase());
}   
console.log(toUpperCase(["hello", "world"])); // Output: ["HELLO", "WORLD"]

// 8. Function to return the factorial of a number  
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5)); // Output: 120

// 9. Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    return cleanedStr === cleanedStr.split("").reverse().join("");
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("Hello")); // Output: false


// 10. Function to return the largest number in an array
function findLargest(arr) {
    return Math.max(...arr);
}
console.log(findLargest([1, 5, 3, 9, 2])); // Output: 9


//==================== End of Functions Exercises and Solutions ===================