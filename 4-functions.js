"use strict";
const square = (num) => num * num;
console.log(square(2));
const greet = (person = "stranger") => `Hi ${person}`;
console.log(greet());
const doSomething = (person, age, isFunny) => `${person} is a ${age} year old ${isFunny ? 'funny' : 'not funny'} mofo`;
console.log(doSomething("Matthew", 40, true));
const random = (num) => Math.random() < 0.5 ? num.toString() : num;
console.log(random(5));
const add = (a, b) => a + b;
console.log(add(5, 10));
const colors = ["red", "blue", "green"];
colors.map(color => color.toUpperCase());
console.log(colors);
const printTwice = (msg) => console.log(msg, msg);
const makeError = (msg) => { throw new Error(msg); };
const neverStop = () => {
    while (true) {
        console.log("Game Loop Running!!!");
    }
};
