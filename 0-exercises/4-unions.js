"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore = true;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff = ["2", "4"];
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [{ r: 1, g: 2, b: 3 }];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
var greet = function (name) {
    if (typeof name === "string") {
        console.log("Hello, ".concat(name));
    }
    else {
        for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
            var person = name_1[_i];
            console.log("Hello, ".concat(person));
        }
    }
};
