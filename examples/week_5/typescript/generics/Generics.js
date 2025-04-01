var NumberStack = /** @class */ (function () {
    function NumberStack() {
        this.items = [];
    }
    NumberStack.prototype.push = function (item) {
        this.items.push(item);
    };
    NumberStack.prototype.pop = function () {
        return this.items.pop();
    };
    return NumberStack;
}());
var StringStack = /** @class */ (function () {
    function StringStack() {
        this.items = [];
    }
    StringStack.prototype.push = function (item) {
        this.items.push(item);
    };
    StringStack.prototype.pop = function () {
        return this.items.pop();
    };
    return StringStack;
}());
// Generic Function
function identity(arg) {
    return arg;
}
// usage
var strValue = identity("Hello String");
var numValue = identity(42);
// Generic Classes
var Pair = /** @class */ (function () {
    function Pair(first, second) {
        this.first = first;
        this.second = second;
    }
    return Pair;
}());
var numberAndString = new Pair(42, "Hello");
var booleanAndDate = new Pair(true, new Date());
console.log(numberAndString.first);
console.log(booleanAndDate.second);
