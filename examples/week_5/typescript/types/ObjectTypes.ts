type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    isWorking?: boolean;
}

const mike: Person = {
    name: "Mike",
    age: 30,
    isStudent: false,
    // isWorking: true // optional
}

type Address = {
    street: string;
    city: string;
}

type Coder = Person & {
    languages: string[];
    address: Address;
}

const Alice: Coder = {
    name: "Alice",
    age: 30,
    isStudent: true,
    isWorking: true,
    languages: ["python"],
    address: {
        street: "Street",
        city: "city"
    }
}


