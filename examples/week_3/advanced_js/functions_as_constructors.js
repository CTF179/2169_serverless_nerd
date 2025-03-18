// We can use functions as constructors to create objects with shared properties and methods 

function Person(name, age){
    this.name = name;
    this.age = age;
}

const person1 = new Person("Mike", 23);

console.log(person1);