// Generics are a way of programming that attempts to create very reusable functions, classes and interfaces while providing type safety
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function reverseArray(array) {
    return __spreadArray([], array, true).reverse();
}
var numbers = [1, 2, 3, 4, 5];
var reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);
var strings = ['Apple', "Banana", "Cherry"];
var reversedStrings = reverseArray(strings);
console.log(reversedStrings);
