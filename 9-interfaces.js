"use strict";
const pt = { x: 10, y: 20 };
const pt2 = { x: 1, y: 2 };
const thomas = {
    id: 124,
    first: 'Thomas',
    last: 'Huber',
    nickname: 'HJ',
    sayHi: () => `Hi there! I am ${this.first} ${this.last} aka ${this.nickname}`,
};
const shoes = {
    name: 'Nike Air',
    price: 100,
    applyDiscount(amount) {
        return this.price * (1 - amount);
    },
};
console.log(shoes.applyDiscount(0.1));
const Elton = {
    name: 'Elton',
    age: 2,
    breed: 'Poodle',
    bark: () => 'Woof!',
};
const Chewy = {
    name: 'Chewy',
    age: 1,
    breed: 'German Shepard',
    bark: () => 'Bark!',
    job: 'drug sniffer',
};
const Tony = {
    first: 'Tony',
    last: 'Stark',
    id: 123,
    email: 't.stark@ironman.com',
    level: 'mid',
    languages: ['JavaScript', 'TypeScript', 'C#'],
};
