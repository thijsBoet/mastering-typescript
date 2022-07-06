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

### Primitives
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
// Function that doesn't finish running
const neverStop = (): never => {
	while(true) {
		console.log("Game Loop Running!!!")
	}
}
```