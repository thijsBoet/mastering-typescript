var age = 22;
age = "23";
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };
var printAge = function (age) { return console.log("You are ".concat(age, " years old")); };
printAge(23);
printAge("87");
var calculateTax = function (price, tax) {
    return typeof price === "string"
        ? parseFloat(price.replace("$", "")) * tax
        : price * tax;
};
console.log(calculateTax("$399", 0.15));
// Union types can be used to describe the types of multiple inputs
// Array of numbers and strings
var stuff = [1, "2", 3, "4"];
// Array of numbers or strings
var stuff2 = ["2", "4"];
// Array of strings or a number
var stuff3 = 15;
// Custom types
var coordinates2 = [{ x: 1, y: 34 }, { lat: 321.213, long: 23.334 }];
// Literal Types
var zero = 0;
var hi = "hi";
var mood = "happy";
mood = "sad";
var today = "Monday";
