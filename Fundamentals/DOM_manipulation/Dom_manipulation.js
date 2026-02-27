// ===================== DOM Manipulation =====================

// what is DOM manipulation?
// DOM manipulation refers to the process of using JavaScript to interact with and modify the Document Object Model (DOM) of a web page. The DOM is a programming interface for HTML and XML documents, which represents the structure of a web page as a tree-like structure of nodes. With DOM manipulation, you can dynamically change the content, structure, and style of a web page without needing to reload it. This allows for creating interactive and dynamic web applications.

// how to select elements from the DOM?
// You can select elements from the DOM using various methods provided by the Document object. Some common methods include:
// 1. getElementById(): Selects an element by its unique ID.
// 2. getElementsByClassName(): Selects all elements with a specific class name.
// 3. getElementsByTagName(): Selects all elements with a specific tag name.
// 4. querySelector(): Selects the first element that matches a specified CSS selector.
// 5. querySelectorAll(): Selects all elements that match a specified CSS selector.
// For example, to select an element with the ID "myElement":
let element = document.getElementById("myElement");
console.log(element); // Output: <div id="myElement">...</div> (the element with the specified ID)  

// how to change the content of an element?
// You can change the content of an element using the innerHTML property.
// For example, to change the content of an element with the ID "myElement":
element.innerHTML = "New content"; // This changes the content of the element to "New content"
console.log(element); // Output: <div id="myElement">New content</div> (the element's content is updated)   

// how to change the style of an element?
// You can change the style of an element using the style property.
// For example, to change the background color of an element with the ID "myElement":
element.style.backgroundColor = "yellow"; // This changes the background color of the element to yellow
console.log(element); // Output: <div id="myElement" style="background-color: yellow;">New content</div> (the element's style is updated)

// how to add a new element to the DOM?
// You can add a new element to the DOM using the createElement() method to create a new element and then using appendChild() or insertBefore() to add it to the desired location in the DOM.
// For example, to create a new paragraph element and add it to a div with the ID "myDiv":
let newParagraph = document.createElement("p"); // This creates a new paragraph element
newParagraph.innerHTML = "This is a new paragraph."; // This sets the content of the new paragraph
let myDiv = document.getElementById("myDiv");
myDiv.appendChild(newParagraph); // This adds the new paragraph to the div with the ID "myDiv"
console.log(myDiv); // Output: <div id="myDiv"><p>This is a new paragraph.</p></div> (the new paragraph is added to the div)

// how to remove an element from the DOM?
// You can remove an element from the DOM using the removeChild() method or the remove() method.
// For example, to remove a paragraph element with the ID "myParagraph":
let myParagraph = document.getElementById("myParagraph");
myParagraph.remove(); // This removes the paragraph element from the DOM
console.log(myParagraph); // Output: null (the element is removed from the DOM) 

// how to add an event listener to an element?
// You can add an event listener to an element using the addEventListener() method. This method takes two arguments: the type of event to listen for and a callback function that will be executed when the event occurs.
// For example, to add a click event listener to a button with the ID "myButton":   
let myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
    console.log("Button was clicked!"); // This will be executed when the button is clicked
}); 
// Now, when the button with the ID "myButton" is clicked, it will log "Button was clicked!" to the console.

// how to change the attributes of an element?
// You can change the attributes of an element using the setAttribute() method or by directly setting the attribute as a property of the element.
// For example, to change the "src" attribute of an image with the ID "myImage":
let myImage = document.getElementById("myImage");
myImage.setAttribute("src", "new-image.jpg"); // This changes the src attribute of the image to "new-image.jpg"
console.log(myImage); // Output: <img id="myImage" src="new-image.jpg"> (the image's src attribute is updated)  
// Alternatively, you can directly set the attribute as a property:
myImage.src = "another-image.jpg";
console.log(myImage); // Output: <img id="myImage" src="another-image.jpg"> (the image's src attribute is updated again)

// types of events you can listen for in the DOM?
// There are many types of events you can listen for in the DOM, including:
// 1. Mouse events: click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout 
// 2. Keyboard events: keydown, keyup, keypress
// 3. Form events: submit, change, input, focus, blur
// 4. Window events: load, resize, scroll, unload
// 5. Touch events: touchstart, touchmove, touchend
// 6. Drag and drop events: dragstart, dragover, drop
// These are just a few examples of the many events you can listen for in the DOM. Each event type has its own specific use cases and can be used to create interactive and dynamic web applications.


// ===================== End of DOM Manipulation =====================


