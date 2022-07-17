'use strict';

class Player {
	// Hardcoded initial values new syntax
	numLives = 10;
	// Vars starting with # are private and can only be accessed within the class
	#score = 0;
	// Static properties are only accessible from the class itself
	// Player.description and not player1.description
	// Same for methods
	static description = 'A player in a game';

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
		const [firstName, lastName] = fullName.split(' ');
		this.firstName = firstName;
		this.lastName = lastName;
	}

	get score() {
		this.#score;
	}

	set score(score) {
		// Can build extra logic here to validate score
		if (score < 0) throw new Error('Score must be positive');
		return (this.#score = score);
	}

	// Methods starting with # are private methods and can only be accessed within the class
	#secretJWT = () =>
		'anT96altFrAq2LctU56XXLVMlr9m3ucKYx1yTxBfWM4Ml32yfnRouZWXfsben52gTP4vwn0mZveFVfavjMxuOH2n1WrPfP1On3BQ';
	loseLife = () => (this.numLives -= 1);
}

const player1 = new Player('Blue', 'Steel');
player1.loseLife();
console.log(player1);
player1.score = 100;
console.log(player1.score);
player1.fullName = 'Tugg Speedman';
console.log(player1.fullName);

// Extend a base class with extra functionality
class AdminPlayer extends Player {
	constructor(firstName, lastName) {
		super(firstName, lastName);
		this.isAdmin = true;
	}
}
