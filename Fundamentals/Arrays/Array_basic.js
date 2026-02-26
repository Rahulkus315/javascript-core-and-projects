// ===================== Array Basics =====================

// what is an array?
// An array is a data structure that can hold a fixed number of values of the same type. 
// It is used to store multiple values in a single variable, instead of declaring separate variables for each value.

// how to declare an array?
// In JavaScript, you can declare an array using square brackets [] and separating the values with commas. 
// For example:
let myArray = [1, 2, 3, 4, 5];  
// This creates an array called myArray that contains the values 1, 2, 3, 4, and 5.

// how to access array elements?
// You can access individual elements of an array using their index. 
// The index of the first element is 0, the second element is 1, and so on. 
// For example:
console.log(myArray[0]); // Output: 1
console.log(myArray[2]); // Output: 3

// how to modify array elements?
// You can modify the value of an array element by assigning a new value to it using its index. 
// For example:
myArray[1] = 10; // This changes the second element (index 1) from 2 to 10
console.log(myArray); // Output: [1, 10, 3, 4, 5]

// how to get the length of an array?
// You can get the length of an array using the length property. 
// For example:
console.log(myArray.length); // Output: 5

// how to add elements to an array?
// You can add elements to an array using the push() method, which adds an element to the end of the array. 
// For example:
myArray.push(6); // This adds the value 6 to the end of the array
console.log(myArray); // Output: [1, 10, 3, 4, 5, 6]        

// how to remove elements from an array?
// You can remove elements from an array using the pop() method, which removes the last element of the array. 
// For example:
myArray.pop(); // This removes the last element (6) from the array
console.log(myArray); // Output: [1, 10, 3, 4, 5]       

// ===================== End of Array Basics =====================