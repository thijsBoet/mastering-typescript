const square = (num: number): number => num * num
console.log(square(2));

const greet = (person: string = "stranger"): string => `Hi ${person}`
console.log(greet());

const doSomething = (person: string, age: number, isFunny: boolean): string => `${person} is a ${age} year old ${isFunny ? 'funny' : 'not funny'} mofo`
console.log(doSomething("Matthew", 40, true));

const random = (num: number): string | number => Math.random() < 0.5 ? num.toString() : num;
console.log(random(5));


const add = (a: number, b: number): number => a + b;
console.log(add(5, 10));

const colors: [string, string, string] = ["red", "blue", "green"];
colors.map(color => color.toUpperCase());
console.log(colors);

const printTwice = (msg: string): void => console.log(msg, msg);

const makeError = (msg: string): never =>{ throw new Error(msg)}

const neverStop = (): never => {
	while (true) {
		console.log("Game Loop Running!!!")
	}
}