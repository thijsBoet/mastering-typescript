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