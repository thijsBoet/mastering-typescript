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
// Generics can have multiple parameters
function merge<T, U>(obj1: T, obj2: U) {
	return {...obj1, ...obj2}
};
const comboObj = merge({ name: "Max" }, { age: 30 });