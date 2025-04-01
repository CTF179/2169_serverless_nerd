// Type Alias

type User = {
    id: number;
    name: string;
    email: string;
}



// Interface
interface UserInterface {
    id: number;
    name: string;
    email: string;
}


function getUserInfo(user: User): string{
    return `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
}

function getUserInfo2(user: UserInterface): string{
    return `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
}


// Differences
// Extending / Implementing

// Interfaces support extending and implementing other interfaces, allowing you to create hierarchies

interface Person {
    name: string;
}

interface Address{
    street: string;
}

interface Contact extends Person, Address {
    email: string;
}
// Type Aliases do not support extending or implementing


// Intersection Types
// Type aliases can represent the intersection of types using the & operator

type A = {x: number};
type B = {y: string};
type C = A & B; // intersection of types A and B

const double: C = {x: 1, y:"hello"};

// Interfaces do not support intersections types like this


// Implements

// class PersonClass implements UserInterface {
//     ...
// }


// Preference
/*
    - Use interfaces when defining the shape of objects or when creating contracts for classes
    - Use type aliases when creating complex, reusable types that may not necessarily represent objects or classes
*/
