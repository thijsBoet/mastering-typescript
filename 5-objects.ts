const pet = {
	name: "Muis",
	breed: "Cat",
	age: 8,
}

const printName = (person: { first: string, last: string }): void => console.log(`${person.first} ${person.last}`);
printName({ first: "Mick", last: "Jagger" })

const randomCoordinate = (): { x: number, y: number } => {
	return { x: Math.random(), y: Math.random() };
}

let coordinate: { x: number, y: number } = { x: 1, y: 2 };

// Use Type Alias to create a new type
type Point = {
	x: number,
	y: number,
	// ? means optional
	z?: number,
}

let coordinate2: Point = { x: 1, y: 2 };

const doublePoint = (point: Point): Point => {
	return { x: point.x * 2, y: point.y * 2 };
}

type User = {
	// readonly cannot be changed
	readonly id: number;
	username: string;
}

// Nested Objects
// Can create a nested object type
type Song = {
	title: string;
	artist: string;
	numStreams: number;
	credits: {
		producer: string;
		writer: string;
	}
}

const calculatePayout = (song: Song): number => song.numStreams * 0.0033;

const song: Song = {
	title: "Unchained Melody",
	artist: "Righteous Brothers",
	numStreams: 12873321,
	credits: {
		producer: "Phil Spector",
		writer: "Alex North",
	}
}

const printSong = (song: Song): void => {
	console.log(`${song.title} by ${song.artist}`);
	console.log(`Produced by ${song.credits.producer}`);
	console.log(`Written by ${song.credits.writer}`);
}

const earnings = calculatePayout(song);
console.log(earnings);
printSong(song);

// Intersection Types
type Circle = {
	radius: number;
}

type Colorful = {
	color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
	radius: 100,
	color: "yellow"
}