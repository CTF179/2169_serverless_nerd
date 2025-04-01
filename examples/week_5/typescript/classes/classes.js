// Classes
// TS uses the same OOP paradigm
// Basically a way to create consistent, reusable, modular code
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonClass = /** @class */ (function () {
    // constructor
    function PersonClass(name, age) {
        this.firstName = name;
        this.age = age;
    }
    // method
    PersonClass.prototype.sayHello = function () {
        console.log("My name is ".concat(this.firstName, " and I am ").concat(this.age, " years old"));
    };
    return PersonClass;
}());
var jane = new PersonClass("Jane", 30);
jane.sayHello();
// inheritance
var StudentClass = /** @class */ (function (_super) {
    __extends(StudentClass, _super);
    function StudentClass(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    // override a method from a parent class
    StudentClass.prototype.sayHello = function () {
        console.log("My name is ".concat(this.firstName, " and I am ").concat(this.age, " years old, and I go to ").concat(this.school));
    };
    return StudentClass;
}(PersonClass));
var robert = new StudentClass("Robert", 33, "Revature");
robert.sayHello();
// access modifiers
// public, private, and protected
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    return MyClass;
}());
// static members
// static it is assigned to the class, not the object, so you don't have to instantiate something to have access to it
var MathUtil = /** @class */ (function () {
    function MathUtil() {
    }
    MathUtil.calculateCircleArea = function (radius) {
        return this.Pi * radius * radius;
    };
    MathUtil.Pi = 3.14;
    return MathUtil;
}());
console.log(MathUtil.calculateCircleArea(5));
