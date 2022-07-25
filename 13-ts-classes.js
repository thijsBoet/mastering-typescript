"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Types must be set first
var Player = /** @class */ (function () {
    function Player(first, last) {
        // By default every property/method is public (changable outside the class)
        this.score = 0;
        // Private only accessible within the class
        this.id = Math.floor(Math.random() * Date.now());
        this.secretMethod = function () { return console.log('secret method!!!'); };
        this.first = first;
        this.last = last;
    }
    return Player;
}());
// Shorthand for declaring a class
var PlayerShort = /** @class */ (function () {
    function PlayerShort(first, last) {
        this.first = first;
        this.last = last;
        // Protected properties accessible within the class and its extended subclasses
        this._score = 0;
    }
    Object.defineProperty(PlayerShort.prototype, "fullName", {
        // Getters and Setters in TypeScript
        get: function () {
            return "".concat(this.first, " ").concat(this.last);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerShort.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (newScore) {
            if (newScore < 0)
                throw new Error('Score must be positive');
            this._score = newScore;
        },
        enumerable: false,
        configurable: true
    });
    return PlayerShort;
}());
var elton = new PlayerShort('Elton', 'John');
elton.fullName;
elton.score = 99;
var SuperPlayer = /** @class */ (function (_super) {
    __extends(SuperPlayer, _super);
    function SuperPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAdmin = true;
        return _this;
    }
    SuperPlayer.prototype.maxScore = function () {
        this._score = 0;
    };
    return SuperPlayer;
}(PlayerShort));
// Classes can implement multiple interfaces
var Bike = /** @class */ (function () {
    function Bike(color) {
        this.color = color;
    }
    return Bike;
}());
var Jacket = /** @class */ (function () {
    function Jacket(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    Jacket.prototype.print = function () {
        console.log("".concat(this.brand, " in ").concat(this.color));
    };
    return Jacket;
}());
var bike1 = new Bike('red');
var jacket1 = new Jacket("Levi's", 'blue');
// Abstract classes can't be instantiated
var Employee = /** @class */ (function () {
    function Employee(first, last) {
        this.first = first;
        this.last = last;
    }
    return Employee;
}());
// Can be implemented in subclasses
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(first, last, salary) {
        var _this = _super.call(this, first, last) || this;
        _this.first = first;
        _this.last = last;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getPay = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(Employee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(first, last, hourlyRate, hoursWorked) {
        var _this = _super.call(this, first, last) || this;
        _this.first = first;
        _this.last = last;
        _this.hourlyRate = hourlyRate;
        _this.hoursWorked = hoursWorked;
        return _this;
    }
    PartTimeEmployee.prototype.getPay = function () {
        return this.hourlyRate * this.hoursWorked;
    };
    return PartTimeEmployee;
}(Employee));
var betty = new FullTimeEmployee('Betty', 'White', 950000);
console.log(betty.getPay());
var bill = new PartTimeEmployee('Bill', 'Smith', 10, 1100);
console.log(bill.getPay());
