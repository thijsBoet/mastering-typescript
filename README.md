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
tsc filename.ts
```

## Types

### Type Inference
The TS compiler can infer types from certain values in your code
```
let x = 27 					// 27 infers it is a number
x = "Twenty-seven"	// Therefor it cannot be changed to a string
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