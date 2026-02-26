// ===================== Conditionals Practice questions =====================

// 1. Write a program that checks if a number is positive, negative, or zero and logs the appropriate message to the console.
// 2. Write a program that checks if a person is eligible to vote based on their age and logs the appropriate message to the console.
// 3. Write a program that checks if a given year is a leap year and logs the appropriate message to the console.
// 4. Write a program that checks if a person is eligible for a senior citizen discount based on their age and logs the appropriate message to the console.
// 5. Write a program that checks if a given string is a palindrome and logs the appropriate message to the console.
// 6. Write a program that checks if a given number is even or odd and logs the appropriate message to the console.
// 7. Write a program that checks if a given number is divisible by 3 and logs the appropriate message to the console.
// 8. Write a program that checks if a given number is a prime number and logs the appropriate message to the console.
// 9. Write a program that checks if a given string contains the word "JavaScript" and logs the appropriate message to the console.
// 10. Write a program that checks if a given number is within a specified range and logs the appropriate message to the console.




/// ===== ================= Solutions ======================

// 1.
// let number;
// number = prompt("Enter a number:");
// if (number > 0) {
//     console.log("positive");
// }
// else if(number < 0) {
//     console.log("negative number:");
// }
// else if(number == 0){
//     console.log("Zero")
// }
// else{
//     console.log("Invalid input")
// }

// 2.
// let age;
// age = prompt("Enter a age : ");
// if(age >= 18 && age <= 100) {
//     console.log("Eligible to vote");
// }
// else if(age >= 0 && age <18 ){
//     console.log("Not Eligible to vote");
// }
// else {
//     console.log("Invalid Input");
// }


// 3.
// let year;
// year = prompt("Enter a year : ");
// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log("Leap year");
// }
// else{
//     console.log("Not a leap year");
// }

// 4.
// let age ;
// age = Number(prompt("Enter age : "));
// if(isNaN(age)){
//     console.log("Invalid input. Please enter a valid number..")
// }

// else if(age >= 60){
//     console.log("eligible to get discount");
// }
// else console.log("Not eligible");

// 5.
// let str;
// str = prompt("Enter a string : ");
// let reversedStr = str.split("").reverse().join("");
// if(str === reversedStr){
//     console.log("Palindrome");
// }
// else console.log("Not a palindrome");