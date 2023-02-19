"use strict";
// Functions with traditional declaration
function increment(num1) {
    return num1 + 1;
}
console.log(increment(10));
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 9));
// Const's declaration to save the value returned by a function
const concatenation = (name, age) => name + " - " + age + " years old";
console.log(concatenation("Albert", 37));
const toUpperCase = function (name) {
    return name.toUpperCase();
};
console.log(toUpperCase("Albert"));
// Function with optional parameters
function subtract(num1, num2, num3) {
    return num3 ? num1 - num2 - num3 : num1 - num2;
}
console.log(subtract(10, 5));
console.log(subtract(10, 5, 2));
// Function with default parameter
function anotherSubtract(num1, num2, num3 = 3) {
    return num1 - num2 - num3;
}
console.log(anotherSubtract(10, 5));
console.log(anotherSubtract(10, 5, 2));
// Function with a list of parameters
function addition(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3];
console.log(addition(1, 2, 10, 20, 30, ...numbers));
