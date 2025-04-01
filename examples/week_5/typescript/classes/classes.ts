// Classes
// TS uses the same OOP paradigm
// Basically a way to create consistent, reusable, modular code

class PersonClass {
    // properties
    firstName: string;
    age: number;

    // constructor
    constructor(name: string, age: number){
        this.firstName = name;
        this.age = age;
    }


    // method
    sayHello() {
        console.log(`My name is ${this.firstName} and I am ${this.age} years old`);
    }
}

const jane = new PersonClass("Jane", 30);
jane.sayHello();

// inheritance

class StudentClass extends PersonClass {
    school: string;

    constructor(name: string, age: number, school: string){
        super(name, age);
        this.school = school;
    }

    // override a method from a parent class
    sayHello(): void {
        console.log(`My name is ${this.firstName} and I am ${this.age} years old, and I go to ${this.school}`);
    }
}

const robert = new StudentClass("Robert", 33, "Revature");

robert.sayHello();


// access modifiers
// public, private, and protected

class MyClass {
    publicField: string;
    private privateField: string;
    protected protectedField: string;
}

// static members
// static it is assigned to the class, not the object, so you don't have to instantiate something to have access to it

class MathUtil {
    static Pi: number = 3.14;

    static calculateCircleArea(radius: number): number {
        return this.Pi * radius * radius;
    }
}

console.log(MathUtil.calculateCircleArea(5));