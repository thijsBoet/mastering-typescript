var _this = this;
var pt = { x: 10, y: 20 };
var pt2 = { x: 1, y: 2 };
var thomas = {
    id: 124,
    first: 'Thomas',
    last: 'Huber',
    nickname: 'HJ',
    sayHi: function () { return "Hi there! I am ".concat(_this.first, " ").concat(_this.last, " aka ").concat(_this.nickname); }
};
var shoes = {
    name: 'Nike Air',
    price: 100,
    applyDiscount: function (amount) {
        return this.price * (1 - amount);
    }
};
console.log(shoes.applyDiscount(0.1));
var Elton = {
    name: 'Elton',
    age: 2,
    breed: 'Poodle',
    bark: function () { return 'Woof!'; }
};
var Chewy = {
    name: 'Chewy',
    age: 1,
    breed: 'German Shepard',
    bark: function () { return 'Bark!'; },
    job: 'drug sniffer'
};
var Tony = {
    first: 'Tony',
    last: 'Stark',
    id: 123,
    email: 't.stark@ironman.com',
    level: 'mid',
    languages: ['JavaScript', 'TypeScript', 'C#']
};
