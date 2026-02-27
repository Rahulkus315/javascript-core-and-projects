// ======================== DOM Manipulation Practice Questions ========================
// Here are some practice questions related to DOM manipulation in JavaScript:
// 1. How do you change the content of an element in the DOM?
//    You can change the content of an element using the innerHTML property.
//    Example: element.innerHTML = "New content";   
// 2. How do you change the style of an element in the DOM?
//    You can change the style of an element using the style property.
//    Example: element.style.backgroundColor = "yellow";    
// 3. How do you add a new element to the DOM?
//    You can add a new element to the DOM using the createElement() method to create a new element and then using appendChild() or insertBefore() to add it to the desired location in the DOM.
//    Example:  
//    let newParagraph = document.createElement("p");
//    newParagraph.innerHTML = "This is a new paragraph.";
//    let myDiv = document.getElementById("myDiv");
//    myDiv.appendChild(newParagraph);
// 4. How do you remove an element from the DOM?
//    You can remove an element from the DOM using the removeChild() method or the remove() method. 
//    Example:
//    let myParagraph = document.getElementById("myParagraph");
//    myParagraph.remove();
// 5. How do you add an event listener to an element in the DOM?
//    You can add an event listener to an element using the addEventListener() method. This method takes two arguments: the type of event to listen for and a callback function that will be executed when the event occurs.
//    Example:  
//    let myButton = document.getElementById("myButton");
//    myButton.addEventListener("click", function() {
//        console.log("Button was clicked!");
//    });
// 6. How do you change the attributes of an element in the DOM?
//    You can change the attributes of an element using the setAttribute() method or by directly setting the attribute as a property of the element.
//    Example:
//    let myImage = document.getElementById("myImage");
//    myImage.setAttribute("src", "new-image.jpg");
//    // Alternatively:
//    myImage.src = "another-image.jpg";
// 7. What are some types of events you can listen for in the DOM?
//    Some common types of events you can listen for in the DOM include:    
//    - click: Triggered when an element is clicked.
//    - mouseover: Triggered when the mouse pointer is moved over an element.
//    - mouseout: Triggered when the mouse pointer is moved out of an element.  
//    - keydown: Triggered when a key is pressed down.
//    - keyup: Triggered when a key is released.
//    - submit: Triggered when a form is submitted.
//    - change: Triggered when the value of an input element changes.
//    - load: Triggered when a resource has finished loading.
//    - resize: Triggered when the window is resized.
//    - scroll: Triggered when the user scrolls the page.
//    - touchstart: Triggered when a touch point is placed on the touch surface.
//    - touchmove: Triggered when a touch point is moved along the touch surface.

// ==================== End of DOM Manipulation Practice Questions ========================