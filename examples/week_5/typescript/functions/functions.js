// function declaration
function greet(name) {
    return "Hello, ".concat(name);
}
// Function expression
var greetExpression = function (name) {
    return "Hello, ".concat(name);
};
// arrow function
var multiply = function (x, y) { return x * y; };
console.log(greetExpression("hello"));
// optional and default parameters
function sayHello(name, age, greeting) {
    if (greeting === void 0) { greeting = "hello"; }
    if (age) {
        console.log("".concat(greeting, ", ").concat(name, "! You are ").concat(age, " years old"));
    }
    else {
        console.log("".concat(greeting, ", ").concat(name));
    }
}
sayHello("Mike", 33, "Salutations");
sayHello("Jim");
// rest parameters
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sum(12, 3, 4234, 234));
function greetOverload(person, age) {
    if (age) {
        return "Hello, ".concat(person, "! You are ").concat(age, " years old");
    }
    else {
        return "Hello, ".concat(person);
    }
}
console.log(greetOverload("Alice"));
console.log(greetOverload("Bob", 30));
