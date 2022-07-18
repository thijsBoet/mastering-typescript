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

### Type Alias
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

### Nested Objects
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

### Intersection Types
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

### Tuples
Tuples are a special type exclusive to TypeScript (they don't exist in JS)

Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays.
```
let myTuple: [string, number] = ['hello', 4];

const color: [number, number, number] = [255, 255, 255];
// Cannot change order of elements in tuple
type HTTPResponse = [number, string];
const OK: HTTPResponse = [200, 'OK'];
// Does not complain after creation of Tuple
OK.push('hello');
OK.pop()
OK.pop()
const responses: HTTPResponse[] = [OK, [404, 'Not Found']];
```

### Enums
Enums allow us to define a set of named constants. We can give these constants numeric or string values.

There's quite a few options when it comes to enums!
```
enum Role {
	admin = 'admin',
	user = 'user',
	guest = 'guest'
}
const user1234: Role = Role.admin;

enum OrderStatus {
	PENDING, 	// 0
	SHIPPED, 	// 1
	DELIVERED,// 2
	RETURNED, // 3
}
const myStatus = OrderStatus.DELIVERED;

const isDelivered = (status: OrderStatus): boolean => status === OrderStatus.DELIVERED;

isDelivered(OrderStatus.RETURNED)
```

### Interfaces
Interfaces serve almost the exact same purpose as type aliases (with a slightly different syntax).

We can use them to create reusable, modular types that describe the shapes of objects
```
// TYPES vs. INTERFACES
// TYPE
type Point = {
	x: number;
	y: number;
};
const pt: Point = { x: 10, y: 20 };
// INTERFACE
interface Point2 {
	x: number;
	y: number;
}
const pt2: Point2 = { x: 1, y: 2 };

interface Person {
	readonly id: number;
	first: string;
	last: string;
	nickname?: string;
	// Can add methods to Interfaces
	sayHi?: (name: string) => string;
}

const thomas: Person = {
	id: 124,
	first: 'Thomas',
	last: 'Huber',
	nickname: 'HJ',
	sayHi: () => `Hi there! I am ${this.first} ${this.last} aka ${this.nickname}`,
};

interface Product {
	name: string;
	price: number;
	applyDiscount(discount: number): number;
}

const shoes: Product = {
	name: 'Nike Air',
	price: 100,
	applyDiscount(amount: number): number {
		return this.price * (1 - amount);
	},
};
console.log(shoes.applyDiscount(0.1));

interface Dog {
	name: string;
	age: number;
}
// Can add properties and methods to Interfaces
interface Dog {
	breed: string;
	bark(): string;
}
const Elton: Dog = {
	name: 'Elton',
	age: 2,
	breed: 'Poodle',
	bark: () => 'Woof!',
};

// Can Inherit from multiple other interfaces
interface ServiceDog extends Dog {
	job: 'drug sniffer' | 'bomb detection' | 'guide dog' | 'other';
}

const Chewy: ServiceDog = {
	name: 'Chewy',
	age: 1,
	breed: 'German Shepard',
	bark: () => 'Bark!',
	job: 'drug sniffer',
};

interface Employee {
	readonly id: number;
	email: string;
}

interface Developer extends Person, Employee {
	level: 'junior' | 'mid' | 'senior';
	languages: string[];
}

const Tony: Developer = {
	first: 'Tony',
	last: 'Stark',
	id: 123,
	email: 't.stark@ironman.com',
	level: 'mid',
	languages: ['JavaScript', 'TypeScript', 'C#'],
};
```

### TYPES vs. INTERFACES
- Interfaces can only describe the shape of an object. No Union types, literals, arrays etc
- Type Aliases can use any kind of shape
- Interfaces structure can be latter added on
- Interfaces can be extended with multiple other interfaces

### Configuring TypeScript
```
create tsconfig.json:
tsc --init

watch mode TS compiler:
tsc -w file.ts

compile and watch multiple files:
tsc -w file1.ts file2.ts

all options:
https://www.typescriptlang.org/tsconfig

// Configure what files to compile and what to ignore
"files": [
    "farmstand.ts",
    "index.ts",

  ],
  "include" : ["src"],
  "exclude" : ["dontTouch.ts", "node_modules"],

// Specify the output file name and location
"outDir": "./dist"

// Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', etc.
"target": "ES5"

// Enable all strict type-checking options
"strict": true,
```

### Working with DOM
Can Change Library compiler options
```
"lib": [
    "es2021",
    "ESNext",
    "DOM",
]
```
The TypeScript Non-Null Assertion allows us to say that a variable is not null. "!"
```
const btn: HTMLElement = document.getElementById("btn")!
```
Type assertions are used to tell the compiler that we know what type we're dealing with.
```
const input = document.getElementById("todoinput")! as HTMLInputElement
```

### JS Classes Recap
Classes are templates for creating objects in Javascript. They contain a few different important pieces which allow for creation and extension of customized (and nicelyorganized) objects.

```
class Player {
	// Hardcoded initial values new syntax
	numLives = 10;
	// Vars starting with # are private and can only be accessed within the class
	#score = 0;

	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.#secretJWT();
	}

	// Private variables can be accessed outside of the class using the getter and setter methods
	// Official getter and setter syntax
	get fullName() {
		// returns property value player1.fullName
		return `${this.firstName} ${this.lastName}`;
	}

	set fullName(fullName) {
		const [firstName, lastName] = fullName.split(" ");
		this.firstName = firstName;
		this.lastName = lastName;
	}

	get score() {
		this.#score;
	}

	set score(score) {
		// Can build extra logic here to validate score
		if(score < 0) throw new Error("Score must be positive");
		return this.#score = score;
	}

	// Methods starting with # are private methods and can only be accessed within the class
	#secretJWT = () =>
		'anT96altFrAq2LctU56XXLVMlr9m3ucKYx1yTxBfWM4Ml32yfnRouZWXfsben52gTP4vwn0mZveFVfavjMxuOH2n1WrPfP1On3BQ';
	loseLife = () => (this.numLives -= 1);
}

const player1 = new Player("Blue", "Steel");
player1.loseLife();
console.log(player1);
player1.score = 100;
console.log(player1.score);
player1.fullName = 'Tugg Speedman';
console.log(player1.fullName);
```

### TS Classes
```
// Types must be set first
class Player {
	// Can use readonly for hardcoded un-changeble values
	readonly first: string;
	readonly last: string;
	// By default every property/method is public (changable outside the class)
	score: number = 0;
	// Private only accessible within the class
	private id: number = Math.floor(Math.random() * Date.now());

	constructor(first: string, last: string) {
		this.first = first;
		this.last = last;
	}

	private secretMethod = (): void => console.log('secret method!!!');
}

// Shorthand for declaring a class
class PlayerShort {
	// Protected properties accessible within the class and its extended subclasses
	protected _score: number = 0;
	constructor(public first: string, public last: string) {}
	// Getters and Setters in TypeScript
	get fullName(): string {
		return `${this.first} ${this.last}`;
	}
	get score(): number {
		return this._score;
	}
	set score(newScore: number) {
		if (newScore < 0) throw new Error('Score must be positive');
		this._score = newScore;
	}
}

const elton = new PlayerShort('Elton', 'John');
elton.fullName;
elton.score = 99;

class SuperPlayer extends PlayerShort {
	public isAdmin: boolean = true;
	maxScore(): void {
		this._score = 0;
	}
}

interface Color {
	color: string;
}
interface Printable {
	print(): void;
}
// Classes can implement multiple interfaces
class Bike implements Color {
	constructor(public color: string) {}
}
class Jacket implements Color, Printable {
	constructor(public brand: string, public color: string) {}
	print(): void {
		console.log(`${this.brand} in ${this.color}`);
	}
}
const bike1 = new Bike('red');
const jacket1 = new Jacket("Levi's", 'blue');

// Abstract classes can't be instantiated
abstract class Employee {
	constructor(public first: string, public last: string) {}
	// Can be implemented in subclasses
	abstract getPay(): number;
}
// Can be implemented in subclasses
class FullTimeEmployee extends Employee {
	constructor(
		public first: string,
		public last: string,
		private salary: number
	) {
		super(first, last);
	}
	getPay(): number {
		return this.salary;
	}
}

class PartTimeEmployee extends Employee {
	constructor(
		public first: string,
		public last: string,
		private hourlyRate: number,
		private hoursWorked: number
	) {
		super(first, last);
	}
	getPay(): number {
		return this.hourlyRate * this.hoursWorked;
	}
}

const betty = new FullTimeEmployee('Betty', 'White', 950000);
console.log(betty.getPay());

const bill = new PartTimeEmployee('Bill', 'Smith', 10, 1100);
console.log(bill.getPay());
```
### Generics
Generics allow us to define reusable functions and classes that work with multiple types rather than a single type.

The syntax is...not pretty. They are used all over the place, so it's best to get comfortable with them :)
```
// Angle bracket notation is used to create a generic type.
const nums: Array<number> = [1, 2, 3];
const Colors: Array<string> = ['red', 'green', 'blue'];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
inputEl.value = "Max";

const button = document.querySelector<HTMLButtonElement>(".btn")!;
// Cumbersome to write, for all types
function numberIdentity(item: number):number {
	return item;
}
function stringIdentity(item: string):string {
	return item;
}

// Returns the type of the generic parameter
function identity<Type>(item: Type): Type {
	return item;
}
identity<string>("Max");

identity<boolean>(true);

// Can also use custom types
type Dogo = { name: string, age: number };
identity<Dogo>({ name: "Max", age: 30 });
// Another generic function
function getRandomElement<T>(list: T[]): T {
	const randomIndex = Math.floor(Math.random() * list.length);
	return list[randomIndex];
}

getRandomElement<string>(['red', 'green', 'blue']);
getRandomElement<number>([5, 4, 8]);
// TypeScript infers the type of the generic parameter
getRandomElement(['red', 'green', 'blue']);
// In TSX Arrow functions you must add a trailing comma to the first occurance of Type
const fetchList = <T,>(list: T[]) => list
// Generics can have multiple parameters and have type constraints with extends ...type
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
	return {...obj1, ...obj2}
};
const comboObj = merge({ name: "Max" }, { age: 30 });
// Generics can also extend an interface
interface Lengthy {
	length: number;
}
function printDoubleLength<T extends Lengthy>(item: T):number {
	return item.length * 2;
}
// Can also have a default type when none is given
function makeEmptyArray<T = number>(): T[] {
	return [];
}
const numbers = makeEmptyArray();
// Generic Classes
interface Songs {
	title: string;
	artist: string;
}
interface Video {
	title: string;
	creator: string;
	resolution: string;
}
class VideoPlayList {
	public videos: Video[] = [];
}
class Playlist<T> {
	public queue: T[] = [];
	add(el: T) {
		this.queue.push(el);
	}
}
const songs = new Playlist<Songs>();
const videos = new Playlist<Video>();
```
### Type Narrowing