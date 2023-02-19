// Functions with traditional declaration
function increment(num1:number) : number {
    return num1 + 1;
}

console.log(increment(10));

function add(num1:number, num2:number) : number {
    return num1 + num2;
}

console.log(add(10, 9));

// Const's declaration to save the value returned by a function
const concatenation = (name:string, age:number) : string => name + " - " + age + " years old";

console.log(concatenation("Albert", 37));

const toUpperCase = function (name:string) : string {
    return name.toUpperCase();
};

console.log(toUpperCase("Albert"));

// Function with optional parameters
function subtract(num1:number, num2:number, num3?:number) : number {
    return num3 ? num1 - num2 - num3 : num1 - num2;
}

console.log(subtract(10, 5));
console.log(subtract(10, 5, 2));

// Function with default parameter
function anotherSubtract(num1:number, num2:number, num3 = 3) : number {
    return num1 - num2 - num3;
}

console.log(anotherSubtract(10, 5));
console.log(anotherSubtract(10, 5, 2));

// Function with a variable list of parameters (rest parameters)
function addition(num1: number, num2: number, ...num3: number[]) : number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1,2,3];
console.log(addition(1,2, 10, 20, 30, ...numbers));

// Generic function
function getItems<Type>(items: Type[]) : Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5,6,7,8,9]);
let concatString = getItems<string>(["a", "b", "c", "d", "e"]);