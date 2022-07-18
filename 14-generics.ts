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