// Closures
// When there is a function inside of another function, and the inner function has access to the scope of the outside function even when the outside function has finished executing
// This is essentially how JS can have data encapsulation


function outer(){
    const outerVariable = 10;

    function inner(){
        console.log(outerVariable);
    }

    return inner;
}

const closureFunction = outer();

closureFunction();