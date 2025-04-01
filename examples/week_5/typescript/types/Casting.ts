// You are telling the tsc that you know the actual data type of a value better than it does
// Sometimes you may need to change the data type of something for a single case
// This is where casting comes in

// Angle-Bracket Syntax

let x: any = "Hello Typescript";
let stringLength: number = (<string>x).length;

// as-Syntax

stringLength = (x as string).length;

// Both work, it's up to preference really, but it is recommended to use the as-syntax as it is more readable

