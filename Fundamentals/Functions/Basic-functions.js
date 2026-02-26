// ========================== Basic Functions ==========================

// A function is a reusable block of code that performs a specific task. 
// Functions allow you to break down complex problems into smaller, more manageable pieces, and they help to avoid code duplication.
// Here's a basic example of a function in JavaScript:
// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}


// Function invocation
console.log(greet("Alice")); // Output: Hello, Alice!
// In this example, we declare a function named `greet` that takes a parameter `name`. The function returns a greeting message that includes the provided name. We then invoke the function with the argument "Alice" and log the result to the console.
// You can also define functions using function expressions or arrow functions. Here are examples of both:
// Function expression
const greetExpression = function(name) {
    return "Hello, " + name + "!";
};

// Arrow function
const greetArrow = (name) => {
    return "Hello, " + name + "!";
};
// Both `greetExpression` and `greetArrow` functions work the same way as the `greet` function. You can invoke them in the same manner:
console.log(greetExpression("Bob")); // Output: Hello, Bob!
console.log(greetArrow("Charlie")); // Output: Hello, Charlie!

// Functions can also have default parameters, which are used when no argument is provided for that parameter:
function greetWithDefault(name = "Guest") {
    return "Hello, " + name + "!";
}
console.log(greetWithDefault()); // Output: Hello, Guest!
console.log(greetWithDefault("Dave")); // Output: Hello, Dave!

// Functions can also return values, which can be used in other parts of your code:
function add(a, b) {
    return a + b;
}
const sum = add(5, 3);
console.log(sum); // Output: 8
// In this example, the `add` function takes two parameters `a` and `b`, adds them together, and returns the result. We then store the result in a variable called `sum` and log it to the console. 
// Functions can also be used to perform more complex tasks, such as manipulating arrays, handling events, or making API calls. They are a fundamental building block of programming and are essential for writing efficient and maintainable code.

// Functions can also be nested, meaning you can define a function inside another function. This is useful for creating helper functions that are only used within the outer function:
function outerFunction() {
    function innerFunction() {  
        return "Hello from the inner function!";
    }   
    return innerFunction();
}
console.log(outerFunction()); // Output: Hello from the inner function!
// In this example, `innerFunction` is defined inside `outerFunction`. When we call `outerFunction`, it invokes `innerFunction` and returns its result. This allows us to encapsulate functionality that is only relevant within the context of the outer function. 

// Functions can also be used as arguments to other functions, which is a powerful feature in JavaScript. This is often referred to as a "callback function":
function performOperation(a, b, operation) {
    return operation(a, b);
}
function multiply(x, y) {
    return x * y;
}   
console.log(performOperation(5, 3, multiply)); // Output: 15
// In this example, `performOperation` takes two numbers and a function as arguments. It calls the provided function (in this case, `multiply`) with the two numbers and returns the result. This allows for flexible and reusable code, as you can pass different functions to `performOperation` to perform various operations on the numbers.    

// Functions can also be used to create closures, which are functions that have access to variables from their outer scope even after the outer function has finished executing:
function outer() {
    let count = 0;  
    function inner() {
        count++;
        return count;
    }   
    return inner;
}
const counter = outer();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
// In this example, the `inner` function has access to the `count` variable from the `outer` function's scope. Each time we call `counter`, it increments and returns the updated count value, demonstrating how closures allow functions to maintain state across multiple invocations.


// ========================== End of Basic Functions ==========================