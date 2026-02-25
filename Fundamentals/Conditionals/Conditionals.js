// ========================== conditionals ==========================

// conditionals are used to perform different actions based on different conditions. 
// In JavaScript, we have several types of conditionals, including if statements, else statements, else if statements, switch statements, and ternary operators.

// ====================== if statement ======================   
// The if statement is used to execute a block of code if a specified condition is true. For example:
let age = 18;   
if (age >= 18) {
    console.log("You are an adult.");
}   
// In the above example, we check if the value of `age` is greater than or equal to 18. If the condition is true, the message "You are an adult." will be logged to the console.


// ====================== else statement ======================   
// The else statement is used to execute a block of code if the condition in the if statement is false. For example:
let age2 = 16;  
if (age2 >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
// In the above example, since the value of `age2` is less than 18, the else block will be executed, and the message "You are a minor." will be logged to the console.

// ====================== else if statement ======================   
// The else if statement is used to specify a new condition to test if the previous condition is false. For example:
let age3 = 20;  
if (age3 < 18) {
    console.log("You are a minor.");
} else if (age3 >= 18 && age3 < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}
// In the above example, we have multiple conditions to check. If `age3` is less than 18, it will log "You are a minor." If `age3` is between 18 and 65, it will log "You are an adult." Otherwise, it will log "You are a senior."


// ====================== switch statement ======================
// The switch statement is used to perform different actions based on different conditions. It is an alternative to using multiple else if statements. For example:
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday.");    
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    case "Saturday":
        console.log("Today is Saturday.");
        break;
    case "Sunday":
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day.");
}
// In the above example, we use a switch statement to check the value of `day` and log the corresponding message to the console. If the value of `day` does not match any of the cases, the default case will be executed, logging "Invalid day."

// ====================== ternary operator ======================
// The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. For example:
let age4 = 25;
let message = age4 >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);
// In the above example, we use the ternary operator to check if `age4` is greater than or equal to 18. If the condition is true, it assigns "You are an adult." to the variable `message`. Otherwise, it assigns "You are a minor." Finally, we log the value of `message` to the console.


// ====================== End of Conditionals.js ====================== //