export default class Dog {
	constructor(public name: string, public breed: string, public age: number) { }
	bark():void {
		console.log(`Woof, woof, woof! I'm ${this.name} and I'm ${this.age} years old.`);
	}
}