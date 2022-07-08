# Mastering TypeScript - 2022 Edition

### Why Typescript
Add functionality to quirky/strange javascript like types checking
1. Helps us find errors
2. Analyzes our code as we type
3. Only exists in development

### What is Typescript
- Is a superset of JavaScript. Therefor all JS is valid TS, but TS is no valid JS.
- Adds Type checking to javascript

### Installation
```
// Locally
npm install typescript --save-dev

// Globally
npm install -g typescript
tsc -v

// Compile to JS
tsc filename.ts --watch
```

## Types

### Type Inference
The TS compiler can infer types from certain values in your code
```
let x = 27 // 27 infers it is a number
x = "Twenty-seven" // Therefor it cannot be changed to a string
```

### Primitive Types
```
const actor: string = 'Al Pacino';
const born: number = 1940;
let isAlive: boolean = true;
```

### Any Type
Allows you to use any type. By turning off type checking
Sort of defeats the purpose of TS, so use sparingly!
```
const anyType: any = "I'm an any Type"
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"]
let foundMovie :any;

for (let movie of movies) {
	if(movie === "Amadeus") {
		foundMovie === "Amadeus"
	}
}
```

### Functions
```
const square = (num: number):number => num * num
const greet = (person: string = "stranger"):string => `Hi ${person}`

// union types
const random = (num:number): string|number => Math.random() < 0.5 ? num.toString() : num

// multiple types in array
const colors: [string, number, boolean] = ["red", 10, false];

// void type (functions that doesn't return anything)
const printTwice = (msg: string): void => console.log(msg, msg);

// never type (the never type represents values the NEVER occur)
// Don't confuse with void - void returns undefined or null.
// With never, a function doesn't even finish executing
// Function that throws an exception
const makeError = (msg:string): never => throw new Error(msg)

// Function that don't finish running
const neverStop = (): never => {
	while(true) {
		console.log("Game Loop Running!!!")
	}
}
```

### Object Types
```
const dog = {
	name: "Eshley",
	breed: "teckel",
	age: 16.3,
}

const printName = (person: { first: string, last: string }): void => console.log(`${person.first} ${person.last}`);
printName({ first: "Matthijs", last: "Boet" })

let coordinate: {x: number, y: number} = {x: 1, y: 2};
```

#### Type Alias
Instead of writing out object types in an annotation, we can declare them separately in a type alias, which is simply the desired shape of the object.

This allows us to make our code more readable and even reuse the types elsewhere in our code.
```
let coordinate: { x: number, y: number } = { x: 1, y: 2 };

type Point = {
	x: number,
	y: number
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
```

#### Nested Objects
```
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
```

#### Intersection Types
```
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
```

### Array Types
Arrays can be typed using a type annotation followed by empty array brackets, like number[] for an array of numbers.
Note: these arrays only allow data of that one type inside them. More on that later!
```
const activeUsers: string[] = ["Max", "Anna"];
activeUsers.push("Margot");

const ageList: number[] = [32, 33, 34, 35];

// Alternative clunky syntax
const bool: Array<boolean> = [];

// Custom Type Array
type Point = {
	x: number;
	y: number;
}

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });

// Multidimensional Arrays
const board: string[][] = [
	["X", "O", "X"],
	["O", "X", "O"],
	["X", "O", "X"]
];

const demo: number[][][] = [[[1]]];
```

### Union Types
Union types allow us to give a value a few different possible types. If the eventual value's type is included, Typescript will be happy.

We can create a union type by using the single | (pipe character) to separate the types we want to include. It's like saying, "This thing is allowed to be this, this, or this". Typescript will enforce it
from there.
```
let age: number | string = 22;
age = "23";

type Point = {
	x: number;
	y: number;
}

type Loc = {
	lat: number;
	long: number;
}

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

const printAge = (age: number|string): void => console.log(`You are ${age} years old`);

printAge(23);
printAge("87");
```

### Unions - Narrowing the Type
Narrowing the Type is simply doing a type check before working with a value. If your value is a string you may want to use it
differently than if you got a number.

Since unions allow multiple types for a value, it's good to check what came through before working with it.
```
const calculateTax = (price: number|string, tax: number) => {
	if (typeof price === "string") {
		return parseFloat(price.replace("$", "")) * tax;
	} else {
		return price * tax;
	}
}

// Union types can be used to describe the types of multiple inputs
// Array of numbers and strings
const stuff: (number | string)[] = [1, "2", 3, "4"];
// Array of numbers or strings
const stuff2: number[] | string[] = ["2", "4"];
// Array of strings or a number
const stuff3: string[] | number = 15;
// Custom types
const coordinates2: (Point | Loc)[] = [{ x: 1, y: 34 }, { lat: 321.213, long: 23.334 }];
```

### Literal Types
Literal types are not just types - but the values themselves too!

On it's own, they may not seem useful, but combine them with unions and you can have very fine-tuned type options for Typescript to enforce.
```
let zero: 0 = 0;
let hi: "hi" = "hi";

let mood: "happy" | "sad" = "happy";
mood = "sad";

type DayOfWeek =
	| "Monday"
	| "Tuesday"
	| "Wednesday"
	| "Thursday"
	| "Friday"
	| "Saturday"
	| "Sunday";

let today: DayOfWeek = "Monday";
```