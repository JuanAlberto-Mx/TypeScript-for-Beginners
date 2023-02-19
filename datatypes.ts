// String type variable declaration
let lastName : string;
lastName = "Hernandez-Martinez";

// UpperCase conversion
let upperName = lastName.toUpperCase();
console.log(upperName);

// Number type variable declaration
let age : number;
age = 37;
age = 37.3;
console.log(age);

// Variable conversion [String to Number]
let result = parseInt("35.5");
console.log(result);

// Boolean variable initialized with a false value
let isValid : boolean = false;
console.log(isValid);

// Setting a boolean variable to true
isValid = true;
console.log(isValid);

// List of String
let varList : string[];
varList = ["var1", "var2"];

// Array of numbers
let numList : Array<number>;
numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter numbers greater than 3
let filtered = numList.filter((num) => num > 3);
console.log(filtered);

// Sum of numbers from the list
let sumList = numList.reduce((acc, num) => acc + num);
console.log(sumList);

// Enum declaration with 'const' to remove init values
const enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

let month : Month = Month.September;
console.log(month);

// Tuple declaration
let tuple: [number, number];

function swapNumbers(num1:number, num2:number): [number, number] {
    return [num2, num1];
}

console.log(swapNumbers(10, 20));

// Any value
let aux: any;