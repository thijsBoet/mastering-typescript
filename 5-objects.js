"use strict";
const pet = {
    name: "Muis",
    breed: "Cat",
    age: 8,
};
const printName = (person) => console.log(`${person.first} ${person.last}`);
printName({ first: "Mick", last: "Jagger" });
const randomCoordinate = () => {
    return { x: Math.random(), y: Math.random() };
};
let coordinate = { x: 1, y: 2 };
let coordinate2 = { x: 1, y: 2 };
const doublePoint = (point) => {
    return { x: point.x * 2, y: point.y * 2 };
};
const calculatePayout = (song) => song.numStreams * 0.0033;
const song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    }
};
const printSong = (song) => {
    console.log(`${song.title} by ${song.artist}`);
    console.log(`Produced by ${song.credits.producer}`);
    console.log(`Written by ${song.credits.writer}`);
};
const earnings = calculatePayout(song);
console.log(earnings);
printSong(song);
const happyFace = {
    radius: 100,
    color: "yellow"
};
const christy = {
    numLives: 7,
    breed: "Husky",
    age: 2
};
