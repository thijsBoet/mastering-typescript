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

const printAge = (age: number | string): void => console.log(`You are ${age} years old`);

printAge(23);
printAge("87");

const calculateTax = (price: number | string, tax: number) => {
	return typeof price === "string"
		? parseFloat(price.replace("$", "")) * tax
		: price * tax;
}
console.log(calculateTax("$399", 0.15));

// Union types can be used to describe the types of multiple inputs
// Array of numbers and strings
const stuff: (number | string)[] = [1, "2", 3, "4"];
// Array of numbers or strings
const stuff2: number[] | string[] = ["2", "4"];
// Array of strings or a number
const stuff3: string[] | number = 15;
// Custom types
const coordinates2: (Point | Loc)[] = [{ x: 1, y: 34 }, { lat: 321.213, long: 23.334 }];

// Literal Types
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