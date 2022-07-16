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
