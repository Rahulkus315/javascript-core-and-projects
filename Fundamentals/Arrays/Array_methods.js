//  ==================== Array Methods ====================

// how to iterate over an array?
// You can iterate over an array using a for loop or the forEach() method.      
// For example, using a for loop:
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); // Output: 10, 5, 4, 3, 1 (each value on a new line)
}
// For example, using the forEach() method:
myArray.forEach(function(element) {
    console.log(element); // Output: 10, 5, 4, 3, 1 (each value on a new line)
}); 

// how to reverse an array?
// You can reverse an array using the reverse() method. 
// For example:
myArray.reverse(); // This reverses the order of the elements in the array
console.log(myArray); // Output: [1, 3, 4, 5, 10] (the array is now in ascending order) 

// how to concatenate two arrays?
// You can concatenate two arrays using the concat() method. 
// For example:
let array1 = [1, 2, 3]; 
let array2 = [4, 5, 6];
let concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6] (the two arrays are combined into one)

// how to find the length of an array?
// You can find the length of an array using the length property. 
// For example:
console.log(myArray.length); // Output: 5 (the number of elements in the array)

// how to check if an array is empty?
// You can check if an array is empty by checking if its length is 0. 
// For example:
let emptyArray = [];
console.log(emptyArray.length === 0); // Output: true (the array is empty)
console.log(myArray.length === 0); // Output: false (the array is not empty)


// how to find the index of an element in an array?
// You can find the index of an element in an array using the indexOf() method. 
// For example:
console.log(myArray.indexOf(4)); // Output: 2 (the index of the element 4 in the array)
console.log(myArray.indexOf(10)); // Output: 4 (the index of the element 10 in the array)
console.log(myArray.indexOf(100)); // Output: -1 (the element 100 is not found in the array)

// how to check if an array includes a certain element?
// You can check if an array includes a certain element using the includes() method. 
// For example:
console.log(myArray.includes(4)); // Output: true (the array includes the element 4)
console.log(myArray.includes(10)); // Output: true (the array includes the element 10)
console.log(myArray.includes(100)); // Output: false (the array does not include the element 100)

// ==================== End of Array Methods ====================