// ================= Loops =================

// Loops are used to repeat a block of code until a specified condition is met. 
// JavaScript supports several types of loops, including for, while, and do...while loops.  

// ================= for loop =================
// The for loop is used to execute a block of code a specified number of times. For example:
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// In the above example, the for loop will execute the block of code inside it five times, logging the values from 0 to 4 to the console.   

// ================= while loop =================
// The while loop is used to execute a block of code as long as a specified condition is true. For example:
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}   
// In the above example, the while loop will execute the block of code inside it as long as the value of `j` is less than 5. It will log the values from 0 to 4 to the console.

// ================= do...while loop =================
// The do...while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false. For example:
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);
// In the above example, the do...while loop will execute the block of code inside it at least once, logging the value of `k` to the console. It will continue to execute as long as `k` is less than 5, logging the values from 0 to 4.

// ================== break and continue ==================
// The break statement is used to exit a loop prematurely, while the continue statement is used to skip the current iteration of a loop and continue with the next iteration. For example:
for (let i = 0; i < 10; i++) {  
    if (i === 5) {
        break; // This will exit the loop when i is 5
    }
    if (i % 2 === 0) {
        continue; // This will skip the current iteration when i is even
    }   
    console.log(i); // This will log odd numbers from 1 to 9
}   
// In the above example, the loop will log odd numbers from 1 to 9. When `i` is 5, the break statement will exit the loop, and when `i` is even, the continue statement will skip the current iteration, so only odd numbers will be logged to the console.

// ================== Nested loops ==================
// Nested loops are loops that are contained within another loop. For example:
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// In the above example, we have a nested loop where the outer loop runs from 1 to 3, and for each iteration of the outer loop, the inner loop also runs from 1 to 3. This will log all combinations of `i` and `j` to the console.

// ================== Infinite loops ==================
// An infinite loop is a loop that never ends. It can occur when the condition of the loop is always true. For example:
// while (true) {
//     console.log("This is an infinite loop.");
// }
// In the above example, the while loop will run indefinitely because the condition is always true. It is important to avoid infinite loops in your code, as they can cause your program to crash or become unresponsive.   


// ================== Loop control statements ==================
// Loop control statements are used to control the flow of a loop. They include break, continue, and return statements. For example:
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // This will exit the loop when i is 5
    }   
    if (i % 2 === 0) {
        continue; // This will skip the current iteration when i is even
    }
    console.log(i); // This will log odd numbers from 1 to 9
}
// In the above example, the loop will log odd numbers from 1 to 9. When `i` is 5, the break statement will exit the loop, and when `i` is even, the continue statement will skip the current iteration, so only odd numbers will be logged to the console.

// ================== Errors ==================
// Common errors in loops include off-by-one errors, infinite loops, and incorrect loop conditions. It is important to carefully check your loop conditions and ensure that they will eventually become false to avoid infinite loops. Additionally, be mindful of the loop variable and how it is being updated to avoid off-by-one errors.

// ================== End of loops section ==================