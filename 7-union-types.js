"use strict";
let age = 22;
age = "23";
let coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };
const printAge = (age) => console.log(`You are ${age} years old`);
printAge(23);
printAge("87");
const calculateTax = (price, tax) => {
    return typeof price === "string"
        ? parseFloat(price.replace("$", "")) * tax
        : price * tax;
};
console.log(calculateTax("$399", 0.15));
// Union types can be used to describe the types of multiple inputs
// Array of numbers and strings
const stuff = [1, "2", 3, "4"];
// Array of numbers or strings
const stuff2 = ["2", "4"];
// Array of strings or a number
const stuff3 = 15;
// Custom types
const coordinates2 = [{ x: 1, y: 34 }, { lat: 321.213, long: 23.334 }];
// Literal Types
let zero = 0;
let hi = "hi";
let mood = "happy";
mood = "sad";
let today = "Monday";
