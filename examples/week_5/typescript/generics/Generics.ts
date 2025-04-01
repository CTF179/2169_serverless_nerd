interface Stack<T> {
    push(item: T): void;
    pop(): T | undefined;
}

class NumberStack implements Stack<number> {
    
    private items: number[] = [];
    
    push(item: number): void {
        this.items.push(item);
    }
    pop(): number | undefined {
        return this.items.pop();
    }
}

class StringStack implements Stack<string> {
    
    private items: string[] = [];
    
    push(item: string): void {
        this.items.push(item);
    }
    pop(): string | undefined {
        return this.items.pop();
    }
}





// Generic Function
function identity<T>(arg: T): T {
    return arg;
}

// usage
const strValue: string = identity("Hello String");
const numValue: number = identity(42);


// Generic Classes

class Pair<T, U> {
    constructor(public first: T, public second: U){}
}

const numberAndString = new Pair<number, string>(42, "Hello");
const booleanAndDate = new Pair<boolean, Date>(true, new Date());

console.log(numberAndString.first);
console.log(booleanAndDate.second);