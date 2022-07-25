"use strict";
var square = function (num) { return num * num; };
console.log(square(2));
var greet = function (person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi ".concat(person);
};
console.log(greet());
var doSomething = function (person, age, isFunny) { return "".concat(person, " is a ").concat(age, " year old ").concat(isFunny ? 'funny' : 'not funny', " mofo"); };
console.log(doSomething("Matthew", 40, true));
var random = function (num) { return Math.random() < 0.5 ? num.toString() : num; };
console.log(random(5));
var add = function (a, b) { return a + b; };
console.log(add(5, 10));
var colors = ["red", "blue", "green"];
colors.map(function (color) { return color.toUpperCase(); });
console.log(colors);
var printTwice = function (msg) { return console.log(msg, msg); };
var makeError = function (msg) { throw new Error(msg); };
var neverStop = function () {
    while (true) {
        console.log("Game Loop Running!!!");
    }
};
