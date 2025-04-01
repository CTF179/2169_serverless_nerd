// Generics are a way of programming that attempts to create very reusable functions, classes and interfaces while providing type safety

function reverseArray<T>(array: T[]): T[]{
    return [...array].reverse();
}

const numbers = [1, 2, 3, 4 ,5];
const reversedNumbers = reverseArray(numbers);

console.log(reversedNumbers);

const strings = ['Apple', "Banana", "Cherry"];
const reversedStrings = reverseArray(strings);

console.log(reversedStrings);