// ======================== Objects. ========================

// Objects are collections of properties, and a property is an association between a name (or key) and a value.
// The value of a property can be a function, in which case the property is known as a method.  

// how to create an object?
// You can create an object using object literal syntax. 
// For example:
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person); // Output: { name: 'John', age: 30, city: 'New York' } 

// how to access properties of an object?
// You can access properties of an object using dot notation or bracket notation. 
// For example, using dot notation: 
console.log(person.name); // Output: John (the value of the name property)
console.log(person.age); // Output: 30 (the value of the age property)
// For example, using bracket notation:
console.log(person["city"]); // Output: New York (the value of the city property)

// how to add a new property to an object?
// You can add a new property to an object by simply assigning a value to a new key. 
// For example:
person.country = "USA"; // This adds a new property called country with the value "USA"
console.log(person); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' } 

// how to delete a property from an object?
// You can delete a property from an object using the delete operator. 
// For example:
delete person.age; // This deletes the age property from the person object
console.log(person); // Output: { name: 'John', city: 'New York', country: 'USA' } (the age property is removed)    

// how to check if a property exists in an object?
// You can check if a property exists in an object using the in operator. 
// For example:
console.log("name" in person); // Output: true (the name property exists in the person object)
console.log("age" in person); // Output: false (the age property does not exist in the person object)   

// how to iterate over the properties of an object?
// You can iterate over the properties of an object using a for...in loop. 
// For example:
for (let key in person) {
    console.log(key + ": " + person[key]); // Output: name: John, city: New York, country: USA (each property and its value on a new line)
}   

// how to get the keys of an object?
// You can get the keys of an object using the Object.keys() method. 
// For example:
let keys = Object.keys(person);
console.log(keys); // Output: [ 'name', 'city', 'country' ] (an array of the keys of the person object)

// how to get the values of an object?
// You can get the values of an object using the Object.values() method. 
// For example:
let values = Object.values(person);
console.log(values); // Output: [ 'John', 'New York', 'USA' ] (an array of the values of the person object) 

// how to get the entries of an object?
// You can get the entries of an object using the Object.entries() method. 
// For example:
let entries = Object.entries(person);
console.log(entries); // Output: [ [ 'name', 'John' ], [ 'city', 'New York' ], [ 'country', 'USA' ] ] (an array of key-value pairs of the person object)    

// ======================== End of Objects. ========================