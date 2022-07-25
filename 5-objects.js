"use strict";
var pet = {
    name: "Muis",
    breed: "Cat",
    age: 8,
};
var printName = function (person) { return console.log("".concat(person.first, " ").concat(person.last)); };
printName({ first: "Mick", last: "Jagger" });
var randomCoordinate = function () {
    return { x: Math.random(), y: Math.random() };
};
var coordinate = { x: 1, y: 2 };
var coordinate2 = { x: 1, y: 2 };
var doublePoint = function (point) {
    return { x: point.x * 2, y: point.y * 2 };
};
var calculatePayout = function (song) { return song.numStreams * 0.0033; };
var song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    }
};
var printSong = function (song) {
    console.log("".concat(song.title, " by ").concat(song.artist));
    console.log("Produced by ".concat(song.credits.producer));
    console.log("Written by ".concat(song.credits.writer));
};
var earnings = calculatePayout(song);
console.log(earnings);
printSong(song);
var happyFace = {
    radius: 100,
    color: "yellow"
};
var christy = {
    numLives: 7,
    breed: "Husky",
    age: 2
};
