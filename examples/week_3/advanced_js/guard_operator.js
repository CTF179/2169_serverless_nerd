// Guard Operator
// &&

// Used to check and ensure a condition is met  before proceeding with further code

const someValue = null;

function someFunction(value){
    return value;
}

// Guard against a null or undefined value
const result = someValue && someFunction(someValue);