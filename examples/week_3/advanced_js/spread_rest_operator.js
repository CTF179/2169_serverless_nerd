// ...
// working with objects and arrays
// essentially, a concise way to manipulate and destructure data

// spread operator
// cloning objects or arrays

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]

const originalObject = {a:1, b:2};
const copiedObject = {...originalObject};

// concatenation
const firstArray = [1, 2];
const secondArray = [3, 4];
const concatenatedArray = [...firstArray, secondArray];


// rest operator
// used in function parameters as a way of grouping results not specified

function sum(...numbers){
    return numbers.reduce((acc, num) => acc + num, 0);
};

console.log(sum(1, 2, 3, 4));


// destructuring assignment
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(second);
console.log(rest);