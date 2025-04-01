// function declaration
function greet(name: string): string {
    return `Hello, ${name}`;
}

// Function expression
const greetExpression = function (name: string): string {
    return `Hello, ${name}`;
}

// arrow function
const multiply = (x: number, y: number): number => x * y;

console.log(greetExpression("hello"));


// optional and default parameters
function sayHello(name: string, age?: number, greeting: string = "hello"): void{
    if(age){
        console.log(`${greeting}, ${name}! You are ${age} years old`);
    }else{
        console.log(`${greeting}, ${name}`);
    }
}

sayHello("Mike", 33, "Salutations");
sayHello("Jim");

// rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(12, 3, 4234, 234));


// Function Overloads
function greetOverload(person: string): string;
function greetOverload(person: string, age: number): string;
function greetOverload(person: string, age?: number): string{
    if (age){
        return `Hello, ${person}! You are ${age} years old` 
    }else{
        return `Hello, ${person}`;
    }
}

console.log(greetOverload(`Alice`));
console.log(greetOverload("Bob", 30));