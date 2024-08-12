// Creating an object using object literal syntax
let person = {
    name: "John Doe",
    age: 30,
    job: "Developer",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Accessing object properties using dot notation
console.log("Name:", person.name);
console.log("Age:", person.age);

// Accessing object properties using bracket notation
console.log("Job:", person['job']);

// Adding a new property to an object
person.email = "john.doe@example.com";
console.log("Email:", person.email);

// Modifying an existing property
person.age = 31;
console.log("Updated Age:", person.age);

// Deleting a property from an object
delete person.job;
console.log("Job after deletion:", person.job); // undefined

// Using the method defined inside the object
person.greet();

// Looping through object properties using for...in loop
console.log("Looping through properties:");
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}

// Using Object.keys() to get an array of property names
let keys = Object.keys(person);
console.log("Keys:", keys);

// Using Object.values() to get an array of property values
let values = Object.values(person);
console.log("Values:", values);

// Using Object.entries() to get an array of key-value pairs
let entries = Object.entries(person);
console.log("Entries:", entries);

// Creating an object using Object.create() for prototypal inheritance
let prototypePerson = {
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

let student = Object.create(prototypePerson);
student.name = "Jane Smith";
student.age = 22;
student.greet();

// Merging objects using Object.assign()
let additionalInfo = { country: "USA", occupation: "Engineer" };
let mergedObject = Object.assign({}, person, additionalInfo);
console.log("Merged Object:", mergedObject);

// Using spread operator to merge objects (ES6)
let anotherMergedObject = { ...person, ...additionalInfo };
console.log("Another Merged Object:", anotherMergedObject);

// Checking if a property exists in an object using 'in' operator
if ('name' in person) {
    console.log("The property 'name' exists in person");
}

// Using hasOwnProperty() to check for a property's existence
if (person.hasOwnProperty('age')) {
    console.log("The property 'age' exists in person");
}

// Using Object.freeze() to make an object immutable
Object.freeze(person);
person.age = 32; // This will not change the age property
console.log("Age after trying to modify:", person.age);

// Using Object.seal() to prevent adding/removing properties but allowing modification
let sealedObject = Object.seal({ title: "Developer", years: 5 });
sealedObject.years = 6; // Allowed
delete sealedObject.title; // Not allowed
console.log("Sealed Object:", sealedObject);

// Destructuring objects (ES6)
let { names, age } = person;
console.log("Destructured Name:", names);
console.log("Destructured Age:", age);

// Function using object as a parameter with destructuring
function displayPersonInfo({ name, age }) {
    console.log(`Person Info - Name: ${name}, Age: ${age}`);
}

displayPersonInfo(person);



// Key Points Covered;
// Object Creation: Using literal syntax and Object.create().

// Property Access: Using dot and bracket notation.

// Adding, Modifying, and Deleting Properties: How to manipulate object properties.

// Object Methods: Defining and using methods within objects.

// Looping Through Properties: Using for...in and Object methods.

// Merging Objects: Using Object.assign() and the spread operator.

// Property Existence Check: Using in and hasOwnProperty().

// Object Immutability: Using Object.freeze() and Object.seal().

// Destructuring: Extracting properties using ES6 syntax.

