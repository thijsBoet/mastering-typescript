var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Angle bracket notation is used to create a generic type.
var nums = [1, 2, 3];
var Colors = ['red', 'green', 'blue'];
var inputEl = document.querySelector("#username");
inputEl.value = "Max";
var button = document.querySelector(".btn");
// Cumbersome to write, for all types
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
// Returns the type of the generic parameter
function identity(item) {
    return item;
}
identity("Max");
identity(true);
identity({ name: "Max", age: 30 });
// Another generic function
function getRandomElement(list) {
    var randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
getRandomElement(['red', 'green', 'blue']);
getRandomElement([5, 4, 8]);
// TypeScript infers the type of the generic parameter
getRandomElement(['red', 'green', 'blue']);
// In TSX Arrow functions you must add a trailing comma to the first occurance of Type
var fetchList = function (list) { return list; };
// Generics can have multiple parameters and have type constraints with extends ...type
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
;
var comboObj = merge({ name: "Max" }, { age: 30 });
function printDoubleLength(item) {
    return item.length * 2;
}
// Can also have a default type when none is given
function makeEmptyArray() {
    return [];
}
var numbers = makeEmptyArray();
var VideoPlayList = /** @class */ (function () {
    function VideoPlayList() {
        this.videos = [];
    }
    return VideoPlayList;
}());
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.queue = [];
    }
    Playlist.prototype.add = function (el) {
        this.queue.push(el);
    };
    return Playlist;
}());
var songs = new Playlist();
var videos = new Playlist();
