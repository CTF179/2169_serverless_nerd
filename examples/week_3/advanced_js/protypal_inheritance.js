// JavaScript does not use classes
// Protypal Inheritance
// Objects are directly inherited by other objects
// There is no class as a medium between them

// Every object has an associated prototype
// A prototype is just another object that the current object inherits properties and methods from
// Objects are linked to their prototypes

// __proto__ and Object.getPrototypeOf();

const child = {age: 15};
const parent = { name: "john"};

child.__proto__ = parent; // set child's prototype to parent

// Object.setPrototypeOf(child, parent); // alternative way

console.log(child.name);
console.log(child.__proto__.name);


// Constructor Function

function Person(name){
    this.name = name;

    // this.greet = function (){
    //     console.log(`Hello, my name is ${this.name}`);
    // }
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

const john = new Person("John");

john.greet();
