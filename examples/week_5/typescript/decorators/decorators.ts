/*

    Adding metadata and behavior to classes, methods, properties, and parameters

    To use this feature, you have to use the flag:

    tsc --experimentalDecorators

    It will show errors, you can ignore them

*/

// class decorators

function classDecorator(constructor: Function){
    console.log("Class decorator has been called");
    console.log(constructor())
}


// method decorators
function methodDecorator(target: any, key: string, descriptor: PropertyDescriptor){
    console.log(`Method decorator called for ${key}`);
}

// Property Decorator
function propertyDecorator(target: any, key: string){
    console.log(`Property Decorator called for ${key}`);
}

// Parameter Decorator
function parameterDecorator(target: any, key: string, index: number){
    console.log(`Parameter decorator called for parameter ${index} of ${key}`);
}


@classDecorator
class MyClass {

    @propertyDecorator
    message = "hello";

    constructor(){
        console.log("Class Instance Created");
    }

    @methodDecorator
    greet(@parameterDecorator name: string){
        console.log(`Hello ${name}`)
    }
}

const myClass = new MyClass();
myClass.greet("Mike");

/*
    This is used for a variety of things, especially if you were creating your own packages to be used on NPM
    Additonal logging, validation, modifying the behavior of classes and their members
    Typically used inside libraries and frameworks like Angular for feature like dependency injection and route handling

*/